from rest_framework import serializers
from .models import Feed, IdeaFeed, Comment, Like, Collaborator, CollaboratorChat, Notification, FeedReport
from django.contrib.contenttypes.models import ContentType

class ContentTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContentType
        fields = ['id', 'app_label', 'model']
        
class FeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feed
        fields = '__all__'

class IdeaFeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaFeed
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()  # Add user field

    def get_user(self, obj):
        # Serialize user data here
        return UserSerializer(obj.user).data

    class Meta:
        model = Comment
        fields = ['id', 'text_content', 'user', 'time']

class LikeSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()  # Add user field

    def get_user(self, obj):
        # Serialize user data here
        return UserSerializer(obj.user).data

    class Meta:
        model = Like
        fields = ['id', 'user', 'time']

class CollaboratorSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()  # Add user field

    def get_user(self, obj):
        # Serialize user data here
        return UserSerializer(obj.user).data

    class Meta:
        model = Collaborator
        fields = ['id', 'user', 'status']

class CollaboratorChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollaboratorChat
        fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()  # Add user field

    def get_user(self, obj):
        # Serialize user data here
        return UserSerializer(obj.user).data

    class Meta:
        model = Notification
        fields = ['id', 'user', 'comment', 'like']
        
class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

class FeedReportSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    Feed = serializers.PrimaryKeyRelatedField(queryset=Feed.objects.all())
    reason = serializers.CharField()

    class Meta:
        model = FeedReport
        fields = ['user', 'Feed', 'reason', 'created_at']
        read_only_fields = ['user', 'created_at']
