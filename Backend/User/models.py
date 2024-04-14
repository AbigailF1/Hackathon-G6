from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.contrib.auth import get_user_model
from django.contrib.auth.base_user import BaseUserManager
from rest_framework_simplejwt.tokens import RefreshToken
from django.conf import settings




class UserManager(BaseUserManager):

    def create_user(self, username, email, password=None, **extra_fields):
        if username is None:
            raise TypeError('Users should have a username')
        if email is None:
            raise TypeError('Users should have a Email')

        user = self.model(username=username, email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password=None):
        if password is None:
            raise TypeError('Password should not be none')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


AUTH_PROVIDERS = {'facebook': 'facebook', 'google': 'google',
                  'twitter': 'twitter', 'email': 'email'}


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, unique=True, db_index=True)
    email = models.EmailField(max_length=255, unique=True, db_index=True)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    ROLES = (
        ('student', 'Student'),
        ('recruiter', 'Recruiter'),
    
    )

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=ROLES, default='student') 
    phone_number = models.CharField(max_length=100)
    is_student = models.BooleanField('Is student', default=False)
    is_recruiter = models.BooleanField('Is recruiter', default=False)
    is_banned = models.BooleanField(default=False, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    auth_provider = models.CharField(
        max_length=255, blank=False,
        null=False, default=AUTH_PROVIDERS.get('email'))

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.email

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }


User = get_user_model()
  
class OnlineUser(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)

class Profile(models.Model):
    # user = models.OneToOneField("User", on_delete=models.CASCADE, related_name='profile')
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField()
    image = models.ImageField(upload_to="user",)
    resume_link = models.URLField(blank=True, null=True)
    skills = models.ManyToManyField('Skill')
    educations = models.ManyToManyField('Education')
    expriences = models.ManyToManyField('Experience')

    def __str__(self):
        return self.user.username
class Skill(models.Model):
    title = models.CharField(max_length=100)
    def __str__(self):
           return self.title
class Education(models.Model):
    year = models.IntegerField()
    department = models.CharField(max_length=100)
    university_name = models.CharField(max_length=100)
    def __str__(self):
           return self.university_name

class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to="projects")
    link = models.URLField()

    def __str__(self):
        return self.title

class Experience(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()

    def __str__(self):
        return self.title