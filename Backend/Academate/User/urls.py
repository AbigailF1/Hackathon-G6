from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, ProfileViewSet, SkillViewSet, EducationViewSet
)
from .views import RegisterView, UserLogout, SetNewPasswordAPIView, VerifyEmail, LoginAPIView, RequestPasswordResetEmail, UserView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

# Create a router and register viewsets with it
router = DefaultRouter()
router.register(r'users', UserViewSet),
router.register(r'profiles', ProfileViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'educations', EducationViewSet)

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


