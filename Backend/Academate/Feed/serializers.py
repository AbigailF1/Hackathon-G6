from rest_framework import serializers
from .models import Feed, IdeaFeed, Comment, Like, Collaborator, CollaboratorChat, Notification, PostReport

class FeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feed
        fields = '__all__'

class IdeaFeedSerializer(serializers.ModelSerializer):
    class Meta:
        model = IdeaFeed
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = '__all__'

class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = '__all__'

class CollaboratorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collaborator
        fields = '__all__'

class CollaboratorChatSerializer(serializers.ModelSerializer):
    class Meta:
        model = CollaboratorChat
        fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

class PostReportSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    post = serializers.PrimaryKeyRelatedField(queryset=Feed.objects.all())
    reason = serializers.CharField()

    class Meta:
        model = PostReport
        fields = ['user', 'post', 'reason', 'created_at']
        read_only_fields = ['user', 'created_at']
