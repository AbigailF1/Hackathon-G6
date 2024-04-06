from rest_framework import viewsets, permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import login, logout, get_user_model
from .models import Profile, Skill, Education, User
from .serializers import (
    UserSerializer, ProfileSerializer, SkillSerializer,
    EducationSerializer, UserRegisterSerializer, UserLoginSerializer,
    SetNewPasswordSerializer, ResetPasswordEmailRequestSerializer,
    EmailVerificationSerializer,
)
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


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


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



class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user_data = serializer.validated_data  

        return Response(user_data, status=status.HTTP_200_OK)


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


class RequestPasswordResetEmail(APIView):
    serializer_class = ResetPasswordEmailRequestSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data.get('email')

            if User.objects.filter(email=email).exists():
                user = User.objects.get(email=email)
                uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
                token = PasswordResetTokenGenerator().make_token(user)
                current_site = get_current_site(request=request).domain
                relative_link = reverse('password-reset-confirm', kwargs={'uidb64': uidb64, 'token': token})

                redirect_url = serializer.validated_data.get('redirect_url', '')
                abs_url = 'http://' + current_site + relative_link
                email_body = f"Hello,\n\nUse the link below to reset your password:\n{abs_url}?redirect_url={redirect_url}"
                data = {'email_body': email_body, 'to_email': user.email, 'email_subject': 'Reset your password'}
                Util.send_email(data)
                return Response({'success': 'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)
            return Response({'error': 'No user found with this email address'}, status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PasswordTokenCheckAPI(APIView):
    serializer_class = SetNewPasswordSerializer

    def get(self, request, uidb64, token):
        redirect_url = request.GET.get('redirect_url')
        try:
            id = force_text(urlsafe_base64_decode(uidb64))
            user = User.objects.get(id=id)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and PasswordResetTokenGenerator().check_token(user, token):
            if redirect_url and len(redirect_url) > 3:
                return redirect(redirect_url + f'?token_valid=True&message=Credentials Valid&uidb64={uidb64}&token={token}')
            else:
                return redirect(settings.FRONTEND_URL + '?token_valid=True')
        else:
            if redirect_url and len(redirect_url) > 3:
                return redirect(redirect_url + '?token_valid=False')
            else:
                return redirect(settings.FRONTEND_URL + '?token_valid=False')

class SetNewPasswordAPIView(APIView):
    serializer_class = SetNewPasswordSerializer

    def patch(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            return Response({'success': True, 'message': 'Password reset success'}, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)