from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ( ProfileViewSet, SkillViewSet, EducationViewSet
)
from .views import RegisterView, UserLogout, SetNewPasswordAPIView, VerifyEmail, LoginAPIView, RequestPasswordResetEmail, UserView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from . import views

# Create a router and register viewsets with it
router = DefaultRouter()
router.register(r'profiles', ProfileViewSet, basename='profile')
router.register(r'skills', SkillViewSet, basename='skill')
router.register(r'educations', EducationViewSet, basename='education')


# Define paths for custom actions
urlpatterns = [
    path('', include(router.urls)),
    path('user/', UserView.as_view(), name='user'),
    path('register/', RegisterView.as_view(), name="register"),
    path('login/', LoginAPIView.as_view(), name="login"),
    path('logout/', UserLogout.as_view(), name="logout"),
    path('email-verify/', VerifyEmail.as_view(), name="email-verify"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('request-reset-email/', RequestPasswordResetEmail.as_view(),
         name="request-reset-email"),
    path('password-reset/', SetNewPasswordAPIView.as_view(), name='password-reset'), 

     # Project URLs
    # path('projects/add/', views.add_project, name='add_project'),
    # path('projects/<int:project_id>/edit/', views.edit_project, name='edit_project'),
    # path('projects/<int:project_id>/delete/', views.delete_project, name='delete_project'),
    # path('projects/', views.get_all_projects, name='get_all_projects'),
    # path('projects/<int:project_id>/', views.get_project_by_id, name='get_project_by_id'),

    # # Experience URLs
    # path('experiences/add/', views.add_experience, name='add_experience'),
    # path('experiences/<int:experience_id>/edit/', views.edit_experience, name='edit_experience'),
    # path('experiences/<int:experience_id>/delete/', views.delete_experience, name='delete_experience'),
    # path('experiences/', views.get_all_experiences, name='get_all_experiences'),
    # path('experiences/<int:experience_id>/', views.get_experience_by_id, name='get_experience_by_id')
]


''' /users/: List and create users.
    /users/<pk>/: Retrieve, update, and delete a specific user.
    /profiles/: List and create profiles.
    /profiles/<pk>/: Retrieve, update, and delete a specific profile.
    /skills/: List and create skills.
    /skills/<pk>/: Retrieve, update, and delete a specific skill.
    /educations/: List and create educations.
    /educations/<pk>/: Retrieve, update, and delete a specific education.
    path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
    
    '''


