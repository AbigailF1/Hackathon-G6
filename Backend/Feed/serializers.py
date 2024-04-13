from rest_framework import serializers
from .models import Feed, IdeaFeed, Comment, Like,Collaborator, CollaboratorChat, Notification,PostReport
from User.serializers import UserSerializer,ProfileSerializer
from django.contrib.contenttypes.models import ContentType
from User.models import Profile


class ContentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentType
        fields = ['id', 'app_label', 'model']
        
from .models import Feed


class FeedSerializer(serializers.ModelSerializer):
    image = serializers.CharField(allow_null=True, allow_blank=True)
    
    class Meta:
        model = Feed
        fields = '__all__'
        
class IdeaFeedSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = IdeaFeed
        fields = '__all__'


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['bio', 'image', 'resume_link', 'skills', 'educations']


class ExtendedUserSerializer(UserSerializer):
    # Use the source argument to point to the related profile.
    profile = ProfileSerializer(read_only=True)

    class Meta(UserSerializer.Meta):
        # Ensure we are working with a list here.
        # Copy the fields from the parent class and add 'profile'.
        fields = list(UserSerializer.Meta.fields) + ['profile']


class CollaboratorSerializer(serializers.ModelSerializer):
    user = ExtendedUserSerializer(read_only=True)

    class Meta:
        model = Collaborator
        fields = '__all__'
class CollaboratorChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollaboratorChat
        fields = '__all__'
class CommentSerializer(serializers.ModelSerializer):
    user = ExtendedUserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):
    user = ExtendedUserSerializer(read_only=True)

    class Meta:
        model = Like
        fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):
    # If you had methods or additional fields to include, define them here.
    # For example, if `like_user` is meant to be a nested representation:
    # like_user = ExtendedUserSerializer(source='like.user', read_only=True)

    class Meta:
        model = Notification
        fields = '__all__'  # This already includes all fields from the Notification model.

class PostReportSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    post = serializers.PrimaryKeyRelatedField(queryset=Feed.objects.all())
    reason = serializers.CharField()

    class Meta:
        model = PostReport
        fields = ['user', 'post', 'reason', 'created_at']
        read_only_fields = ['user', 'created_at']
