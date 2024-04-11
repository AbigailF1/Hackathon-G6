from rest_framework import viewsets, permissions, status, generics, views
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import login, logout, get_user_model
from .models import Profile, Skill, Education, User, PasswordResetCode
from .serializers import (
    UserSerializer, ProfileSerializer, SkillSerializer,
    EducationSerializer
)
from .serializers import RegisterSerializer, SetNewPasswordSerializer, ResetPasswordEmailRequestSerializer, EmailVerificationSerializer, LoginSerializer
from .validations import custom_validation, validate_email, validate_password
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from .utils import Util, decode_jwt
from rest_framework_simplejwt.tokens import RefreshToken
import jwt
from django.conf import settings
from drf_yasg import openapi
from .renderers import UserRenderer
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.shortcuts import redirect
from django.http import HttpResponsePermanentRedirect
from django.core.mail import send_mail
import secrets
import os
from django.utils.crypto import get_random_string
from django.core.exceptions import ObjectDoesNotExist


class CustomRedirect(HttpResponsePermanentRedirect):

    allowed_schemes = [os.environ.get('APP_SCHEME'), 'http', 'https']

UserModel= get_user_model()

class RegisterView(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    renderer_classes = (UserRenderer,)
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        role = request.data.get('role', None)
        user_data = request.data.copy()  # Make a copy of request data

        # Role validation
        valid_roles = ['student', 'recruiter']  # Add other valid roles if needed
        if role not in valid_roles:
            return Response({'error': 'Invalid role provided.'}, status=status.HTTP_400_BAD_REQUEST)

        # Clean data and perform custom validation
        clean_data = custom_validation(user_data)

        # Create serializer instance with cleaned data
        serializer = self.serializer_class(data=clean_data)

        # Check serializer validity
        if serializer.is_valid(raise_exception=True):
            email = serializer.validated_data.get('email')
            if role == 'student':
                try:
                    domain = email.split('@')[1]
                    if not domain.endswith('.edu.et'):
                        return Response({'error': 'Email domain not allowed'}, status=status.HTTP_400_BAD_REQUEST)
                except IndexError:
                    return Response({'error': 'Invalid email format'}, status=status.HTTP_400_BAD_REQUEST)

            # Save the user
            serializer.save()

            user_data = serializer.data
            user = User.objects.get(email=user_data['email'])
            token = RefreshToken.for_user(user).access_token
            current_site = get_current_site(request).domain
            relativeLink = reverse('email-verify')
            absurl = 'http://' + current_site + relativeLink + "?token=" + str(token)
            email_body = 'Hi ' + user.username + \
                ' Use the link below to verify your email \n' + absurl
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Verify your email'}

            Util.send_email(data)
            return Response(user_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyEmail(views.APIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = EmailVerificationSerializer

    token_param_config = openapi.Parameter(
        'token', in_=openapi.IN_QUERY, description='Description', type=openapi.TYPE_STRING)

    def get(self, request):
        token = request.GET.get('token')
        try:
            payload = decode_jwt(token, settings.SECRET_KEY)
            user = User.objects.get(id=payload['user_id']) 
            if not user.is_verified:  
                user.is_verified = True  
                role = user.role

                if role == 'student':
                    user.is_student = True
                elif role == 'recruiter':
                    user.is_recruiter = True
                user.save()  
                return Response({'email': 'Successfully activated'}, status=status.HTTP_200_OK)  
            else:
                return Response({'error': 'Email already verified'}, status=status.HTTP_400_BAD_REQUEST)     
        except jwt.exceptions.DecodeError:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST) 


from django.contrib.auth import login as django_login

class LoginAPIView(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        django_login(request, user)  # Log the user in using Django's login function
        return Response({'detail': 'Logged in successfully'}, status=status.HTTP_200_OK)



class RequestPasswordResetEmail(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = ResetPasswordEmailRequestSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid(raise_exception=True):
            email = serializer.validated_data.get('email')
            user = User.objects.filter(email=email).first()

            if user:
                try:
                    # Try to get the PasswordResetCode for the user
                    password_reset_code = PasswordResetCode.objects.get(user=user)
                except ObjectDoesNotExist:
                    # If no PasswordResetCode exists, create a new one
                    password_reset_code = PasswordResetCode(user=user)

                # Generate a unique code
                unique_code = get_random_string(length=8)
                password_reset_code.code = unique_code
                password_reset_code.save()

                current_site = get_current_site(request=request).domain
                relative_link = reverse('password-reset') + f'?code={unique_code}'
                absurl = 'http://' + current_site + relative_link

                email_body = f"Hello,\n\nUse the link below to reset your password and enter the code given to you:\n\n{absurl}\n\nCode: {unique_code}"
                send_mail('Reset your password', email_body, 'academateinc@gmail.com', [user.email])

                return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)

            else:
                return Response({'error': 'No user found with this email'}, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)






class SetNewPasswordAPIView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = SetNewPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        code = serializer.validated_data.get('code')
        password = serializer.validated_data.get('password')

        try:
            # Get the user associated with the unique code
            password_reset_code = PasswordResetCode.objects.get(code=code)
            user = password_reset_code.user

            # Set the new password
            user.set_password(password)
            user.save()

            # Delete the password reset code
            password_reset_code.delete()

            return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)

        except PasswordResetCode.DoesNotExist:
            return Response({'error': 'Invalid code'}, status=status.HTTP_400_BAD_REQUEST)



class UserLogout(APIView):
	permission_classes = (permissions.AllowAny,)
	authentication_classes = ()
	def post(self, request):
		logout(request)
		return Response(status=status.HTTP_200_OK)

class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Profile.objects.filter(user=user)

class SkillViewSet(viewsets.ModelViewSet):
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Skill.objects.filter(profile__user=user)

class EducationViewSet(viewsets.ModelViewSet):
    serializer_class = EducationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Education.objects.filter(profile__user=user)

