from rest_framework import viewsets, permissions, status, generics, views
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import login, logout, get_user_model
from .models import Profile, Skill, Education, User
from .serializers import (
    UserSerializer, ProfileSerializer, SkillSerializer,
    EducationSerializer
)
from .serializers import RegisterSerializer, SetNewPasswordSerializer, ResetPasswordEmailRequestSerializer, EmailVerificationSerializer, LoginSerializer, LogoutSerializer
from .validations import custom_validation, validate_email, validate_password
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from .utils import Util, decode_jwt
from rest_framework_simplejwt.tokens import RefreshToken
import jwt
from django.conf import settings
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from .renderers import UserRenderer
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.shortcuts import redirect
from django.http import HttpResponsePermanentRedirect
import os



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

        email = request.data.get('email', '')

        if User.objects.filter(email=email).exists():
            user = User.objects.get(email=email)
            uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
            token = PasswordResetTokenGenerator().make_token(user)
            current_site = get_current_site(
                request=request).domain
            relativeLink = reverse(
                'password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})

            redirect_url = request.data.get('redirect_url', '')
            absurl = 'http://'+current_site + relativeLink
            email_body = 'Hello, \n Use link below to reset your password  \n' + \
                absurl+"?redirect_url="+redirect_url
            data = {'email_body': email_body, 'to_email': user.email,
                    'email_subject': 'Reset your passsword'}
            Util.send_email(data)
        return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)


class PasswordTokenCheckAPI(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = SetNewPasswordSerializer

    def get(self, request, uidb64, token):

        redirect_url = request.GET.get('redirect_url')

        try:
            id = smart_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                if len(redirect_url) > 3:
                    return CustomRedirect(redirect_url+'?token_valid=False')
                else:
                    return CustomRedirect(os.environ.get('FRONTEND_URL', '')+'?token_valid=False')

            if redirect_url and len(redirect_url) > 3:
                return CustomRedirect(redirect_url+'?token_valid=True&message=Credentials Valid&uidb64='+uidb64+'&token='+token)
            else:
                return CustomRedirect(os.environ.get('FRONTEND_URL', '')+'?token_valid=False')

        except DjangoUnicodeDecodeError as identifier:
            try:
                if not PasswordResetTokenGenerator().check_token(user):
                    return CustomRedirect(redirect_url+'?token_valid=False')
                    
            except UnboundLocalError as e:
                return Response({'error': 'Token is not valid, please request a new one'}, status=status.HTTP_400_BAD_REQUEST)



class SetNewPasswordAPIView(generics.GenericAPIView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)


class LogoutAPIView(generics.GenericAPIView):
    serializer_class = LogoutSerializer

    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(status=status.HTTP_204_NO_CONTENT)


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class UserView(APIView):
    permission_classes = (permissions.IsAuthenticated,)
    authentication_classes = (SessionAuthentication,)

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = [permissions.IsAuthenticated]


class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticated]


class EducationViewSet(viewsets.ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [permissions.IsAuthenticated]


'''

class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        role = request.data.get('role', None)
        clean_data = custom_validation(request.data)
        serializer = UserRegisterSerializer(data=clean_data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.validated_data.get('email')
            if role == 'student':
                try:
                    domain = email.split('@')[1]
                    if not domain.endswith('.edu.et'):
                        return Response({'error': 'Email domain not allowed'}, status=status.HTTP_400_BAD_REQUEST)
                except IndexError:
                    return Response({'error': 'Invalid email format'}, status=status.HTTP_400_BAD_REQUEST)

            user = serializer.save()
            if user:
                token = RefreshToken.for_user(user).access_token
                current_site = get_current_site(request).domain
                relative_link = reverse('email-verify')
                abs_url = 'http://' + current_site + relative_link + "?token=" + str(token)
                email_body = 'Hi ' + user.username + ',\n\nUse the link below to verify your email:\n' + abs_url
                data = {'email_body': email_body, 'to_email': user.email, 'email_subject': 'Verify your email'}
                Util.send_email(data)  #
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VerifyEmail(APIView):
    def get(self, request):
        token = request.GET.get('token')  # Extract token from the request query parameters
        try:
            payload = decode_jwt(token, settings.SECRET_KEY)  # Decode the token using the decode_jwt function
            user_id = payload.get('user_id')  # Extract user ID from the decoded payload
            if user_id is not None: 
                user = User.objects.get(id=user_id)  
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
            else:
                return Response({'error': 'User ID not found in token'}, status=status.HTTP_400_BAD_REQUEST)  
            return Response({'error': 'Activation Expired'}, status=status.HTTP_400_BAD_REQUEST)  
        except jwt.exceptions.DecodeError:
            return Response({'error': 'Invalid token'}, status=status.HTTP_400_BAD_REQUEST)  

'''
