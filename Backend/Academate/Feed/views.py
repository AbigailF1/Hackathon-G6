from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from django.contrib.contenttypes.models import ContentType
from rest_framework.decorators import api_view 
from rest_framework.response import Response 
from .serializers import (FeedSerializer, IdeaFeedSerializer, CommentSerializer, LikeSerializer, CollaboratorSerializer, CollaboratorChatSerializer, NotificationSerializer, ContentTypeSerializer, FeedReportSerializer )
from .models import ( Feed, IdeaFeed, Comment, Like, Collaborator, CollaboratorChat, Notification)

# related to the feed itself

@api_view(['POST'])
def create_post_feed(request):
    serializer = FeedSerializer(data=request.data)
    if serializer.is_valid():
        # serializer.save(user=request.user, feed_type='post')
        serializer.save(feed_type='post')
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_idea_feed(request):
    serializer = IdeaFeedSerializer(data=request.data)
    if serializer.is_valid():
        # serializer.save(feed__user=request.user, feed__feed_type='idea')
        serializer.save(feed_type='idea')
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def view_content_type(request):
    content_types = ContentType.objects.all()
    serializer = ContentTypeSerializer(content_types, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def update_feed(request, feed_id):
    try:
        feed = Feed.objects.get(pk=feed_id)
    except Feed.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = FeedSerializer(feed, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_feed(request, feed_id):
    try:
        feed = Feed.objects.get(pk=feed_id)
    except Feed.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    feed.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def list_feeds(request):
    feeds = Feed.objects.all()
    serializer = FeedSerializer(feeds, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def list_post_feeds(request):
    post_feeds = Feed.objects.filter(feed_type='post')
    serializer = FeedSerializer(post_feeds, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def list_idea_feeds(request):
    idea_feeds = Feed.objects.filter(feed_type='idea')
    serializer = IdeaFeedSerializer(idea_feeds, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def search_feed_by_user(request, username):
    user_feeds = Feed.objects.filter(user__username=username)
    serializer = FeedSerializer(user_feeds, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def search_feed_by_tag(request, tag_name):
    feeds = Feed.objects.filter(tag_title=tag_name)
    serializer = FeedSerializer(feeds, many=True)
    return Response(serializer.data)

# related to comments 
@api_view(['POST'])
def add_comment(request, feed_id):
    feed = Feed.objects.get(pk=feed_id)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(feed=feed, user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_comments(request, feed_id):
    comments = Comment.objects.filter(feed_id=feed_id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def edit_comment(request, comment_id):
    try:
        comment = Comment.objects.get(pk=comment_id)
    except Comment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CommentSerializer(comment, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete_comment(request, comment_id):
    try:
        comment = Comment.objects.get(pk=comment_id)
    except Comment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    comment.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


# related to likes

# related to likes 
@api_view(['POST', 'DELETE'])
def toggle_like_feed(request, feed_id):
    try:
        feed = Feed.objects.get(pk=feed_id)
    except Feed.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    user = request.user
    try:
        # like = Like.objects.get(user=user, feed=feed)
        like = Like.objects.get(feed=feed)
        like.delete()
        return Response({'message': 'Unliked successfully'}, status=status.HTTP_200_OK)
    except Like.DoesNotExist:
        # Like.objects.create(user=user, feed=feed)
        Like.objects.create(feed=feed)
        return Response({'message': 'Liked successfully'}, status=status.HTTP_201_CREATED)


# @api_view(['POST'])
# def like_feed(request, feed_id):
#     try:
#         feed = Feed.objects.get(pk=feed_id)
#     except Feed.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     # has to be an authenticated user (i think we will handle that)
#     # user = request.user
#     # like, created = Like.objects.get_or_create(user=user, feed=feed)
#     like, created = Like.objects.get_or_create(feed=feed)
#     if created:
#         return Response({'message': 'Liked successfully'}, status=status.HTTP_201_CREATED)
#     else:
#         return Response({'message': 'Already liked'}, status=status.HTTP_200_OK)


# @api_view(['DELETE'])
# def unlike_feed(request, feed_id):
#     try:
#         feed = Feed.objects.get(pk=feed_id)
#     except Feed.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     # has to be an authenticated user (i think we will handle that)
#     user = request.user
#     try:
#         like = Like.objects.get(user=user, feed=feed)
#         like.delete()
#         return Response({'message': 'Unliked successfully'}, status=status.HTTP_204_NO_CONTENT)
#     except Like.DoesNotExist:
#         return Response({'message': 'You have not liked this feed'}, status=status.HTTP_400_BAD_REQUEST)


# collaborators 
@api_view(['PUT'])
def toggle_collaborate_button(request, feed_id):
    idea_feed = IdeaFeed.objects.get(pk=feed_id)
    idea_feed.collaborate_button = not idea_feed.collaborate_button
    idea_feed.save()
    serializer = IdeaFeedSerializer(idea_feed)
    return Response(serializer.data)

@api_view(['GET'])
def list_collaborators(request, feed_id):
    collaborators = Collaborator.objects.filter(idea_feed_id=feed_id)
    serializer = CollaboratorSerializer(collaborators, many=True)
    return Response(serializer.data)

@api_view(['PUT'])
def accept_collaborator(request, collaborator_id):
    try:
        collaborator = Collaborator.objects.get(pk=collaborator_id)
    except Collaborator.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    collaborator.status = 'accepted'
    collaborator.save()
    return Response({'message': 'Collaborator accepted successfully'}, status=status.HTTP_200_OK)

@api_view(['PUT'])
def decline_collaborator(request, collaborator_id):
    try:
        collaborator = Collaborator.objects.get(pk=collaborator_id)
    except Collaborator.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    collaborator.status = 'declined'
    collaborator.save()
    return Response({'message': 'Collaborator declined successfully'}, status=status.HTTP_200_OK)


#  Notifiction views 
@api_view(['GET'])
def list_notifications(request, user_id):
    notifications = Notification.objects.filter(user_id=user_id)
    serializer = NotificationSerializer(notifications, many=True)
    return Response(serializer.data)
    
@api_view(['POST'])
def report_Feed(request):
    serializer = FeedReportSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)