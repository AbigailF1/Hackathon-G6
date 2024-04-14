from rest_framework import viewsets, permissions, status, generics, views
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import login, logout, get_user_model
from .models import Profile, Skill, Education, User, PasswordResetCode, Project, Experience
from .serializers import (
    UserSerializer, ProfileSerializer, SkillSerializer,
    EducationSerializer)
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .serializers import RegisterSerializer, SetNewPasswordSerializer, ResetPasswordEmailRequestSerializer, EmailVerificationSerializer, LoginSerializer, ProjectSerializer, ExperienceSerializer
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
from django.utils.crypto import get_random_string
from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail
import secrets
import os
from rest_framework.decorators import parser_classes
from rest_framework.parsers import MultiPartParser, FormParser



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

    def get(self, request, *args, **kwargs):
        return Response({"errors": {"detail": "Method \"GET\" not allowed."}}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)  

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
        if serializer.is_valid():
            user = serializer.validated_data['user']
            refresh = RefreshToken.for_user(user)
            return Response({
                'detail': 'Logged in successfully',
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'user': UserSerializer(user).data,
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    permission_classes = (permissions.AllowAny,)
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']

        # Log the user in using Django's login function
        django_login(request, user)

        # Generate JWT tokens for the user
        refresh = RefreshToken.for_user(user)
        access_token = str(refresh.access_token)
        refresh_token = str(refresh)

        # Return the success response with both tokens
        return Response({
            'detail': 'Logged in successfully',
            'access': access_token,
            'refresh': refresh_token,
            'user': UserSerializer(user).data  # Include user data in the response
        }, status=status.HTTP_200_OK)

    permission_classes = (permissions.AllowAny,)
    serializer_class = LoginSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        
        # Log the user in using Django's login function
        django_login(request, user)

        # Generate JWT token for the user
        refresh = RefreshToken.for_user(user)
        token = str(refresh.access_token)

        # Return the success response with token
        return Response({
            'detail': 'Logged in successfully',
            'token': token,
            'user': UserSerializer(user).data  # Include user data in the response
        }, status=status.HTTP_200_OK)


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

from rest_framework.decorators import action
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        profile = serializer.save(user=self.request.user)

        # Handle image upload
        image = self.request.FILES.get('image')
        if image:
            profile.image = image
            profile.save()
    def get_queryset(self):
        """
        Optionally restricts the returned profiles to a given user,
        by filtering against a `user_id` query parameter in the URL.
        """
        queryset = self.queryset
        user_id = self.request.query_params.get('user_id')
        if user_id is not None:
            queryset = queryset.filter(user_id=user_id)
        return queryset

    @action(detail=True, url_path='user', methods=['get'])
    def user_profile(self, request, pk=None):
        """
        Get a profile based on the user_id, not the profile's own ID.
        """
        user_id = pk  # Here, 'pk' is used as the user_id
        profile = get_object_or_404(Profile, user__id=user_id)
        serializer = self.get_serializer(profile)
        return Response(serializer.data)




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

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@parser_classes([MultiPartParser, FormParser])
def add_project(request):
    if request.method == 'POST':
        serializer = ProjectSerializer(data=request.data)
        if serializer.is_valid():
            # Associate the project with the authenticated user
            project = serializer.save(user=request.user)

            # Handle image upload
            image = request.FILES.get('image')
            if image:
                project.image = image
                project.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
@parser_classes([MultiPartParser, FormParser])
def edit_project(request, project_id):
    project = get_object_or_404(Project, pk=project_id)
    # Check if the project belongs to the authenticated user
    if project.user != request.user:
        return Response({'message': 'You do not have permission to edit this project.'}, status=status.HTTP_403_FORBIDDEN)
    
    if request.method == 'POST':
        serializer = ProjectSerializer(project, data=request.data)
        if serializer.is_valid():
            project = serializer.save()

            # Handle image upload
            image = request.FILES.get('image')
            if image:
                project.image = image
                project.save()

            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_project(request, project_id):
    project = get_object_or_404(Project, pk=project_id)
    # Check if the project belongs to the authenticated user
    if project.user != request.user:
        return Response({'message': 'You do not have permission to delete this project.'}, status=status.HTTP_403_FORBIDDEN)
    
    if request.method == 'DELETE':
        project.delete()
        return Response({'message': 'Project deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_projects(request):
    # Retrieve projects associated with the authenticated user
    projects = Project.objects.filter(user=request.user)
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_project_by_id(request, project_id):
    project = get_object_or_404(Project, pk=project_id)
    # Check if the project belongs to the authenticated user
    if project.user != request.user:
        return Response({'message': 'You do not have permission to view this project.'}, status=status.HTTP_403_FORBIDDEN)
    
    serializer = ProjectSerializer(project)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_experience(request):
    if request.method == 'POST':
        serializer = ExperienceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def edit_experience(request, experience_id):
    experience = get_object_or_404(Experience, pk=experience_id)
    if request.method == 'POST':
        serializer = ExperienceSerializer(experience, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_experience(request, experience_id):
    experience = get_object_or_404(Experience, pk=experience_id)
    if request.method == 'DELETE':
        experience.delete()
        return Response({'message': 'Experience deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_experiences(request):
    user = request.user
    experiences = Experience.objects.filter(profile__user=user)
    serializer = ExperienceSerializer(experiences, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_experience_by_id(request, experience_id):
    experience = get_object_or_404(Experience, pk=experience_id)
    serializer = ExperienceSerializer(experience)
    return Response(serializer.data)

# class UserRegister(APIView):
#     permission_classes = (permissions.AllowAny,)
# class add_project(APIView):
#     permission_classes = (permissions.AllowAny,)
# class edit_project(APIView):
#     permission_classes = (permissions.AllowAny,)
# class delete_project(APIView):
#     permission_classes = (permissions.AllowAny,)
# class get_all_projects(APIView):
#     permission_classes = (permissions.AllowAny,)    
# class get_project_by_id(APIView):
#     permission_classes = (permissions.AllowAny,)
# class add_experience(APIView):
#     permission_classes = (permissions.AllowAny,)
# class edit_experience(APIView):
#     permission_classes = (permissions.AllowAny,)
# class delete_experience(APIView):
#     permission_classes = (permissions.AllowAny,)
# class get_all_experiences(APIView):
#     permission_classes = (permissions.AllowAny,)
# class get_experience_by_id(APIView):
#     permission_classes = (permissions.AllowAny,)
    
    
