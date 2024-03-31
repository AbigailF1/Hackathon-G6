from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.contrib.auth import get_user_model
from django.contrib.auth.base_user import BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError('An email is required.')
        if not password:
            raise ValueError('A password is required.')
        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save()
        return user

class User(AbstractUser, PermissionsMixin):
    ROLES = (
        ('student', 'Student'),
        ('recruiter', 'Recruiter'),
    )

    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=ROLES, default='student') 
    phone_numbers = models.CharField(max_length=100)
    username = models.CharField(max_length=150, unique=True)
    is_student = models.BooleanField('Is student', default=False)
    is_recruiter = models.BooleanField('Is recruiter', default=False)
    is_super_admin = models.BooleanField('Is super admin', default=False)
    is_banned = models.BooleanField(default=False, null=True)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']
    objects = UserManager()

User = get_user_model()

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField()
    image = models.URLField()
    resume_link = models.URLField(blank=True, null=True)
    skills = models.ManyToManyField('Skill')
    educations = models.ManyToManyField('Education')


class Skill(models.Model):
    title = models.CharField(max_length=100)

class Education(models.Model):
    year = models.IntegerField()
    department = models.CharField(max_length=100)
    university_name = models.CharField(max_length=100)
