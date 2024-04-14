from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from django.contrib.contenttypes.models import ContentType
from rest_framework.response import Response 
from .serializers import (FeedSerializer, IdeaFeedSerializer, CommentSerializer, LikeSerializer, CollaboratorSerializer, CollaboratorChatSerializer, NotificationSerializer, ContentTypeSerializer, PostReportSerializer )
from .models import ( User,Feed, IdeaFeed, Comment, Like, Collaborator, Tag ,CollaboratorChat, Notification)
from User.serializers import UserSerializer
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, authentication_classes, parser_classes
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser , FileUploadParser
from rest_framework_simplejwt.authentication import JWTAuthentication
from Tag.serializers import TagSerializer

@api_view(['POST'])
@authentication_classes([JWTAuthentication])
@parser_classes([MultiPartParser, FormParser, FileUploadParser])
def create_post_feed(request):
    try:
        if not request.user.is_authenticated:
            return Response({"error": "User authentication failed"}, status=status.HTTP_401_UNAUTHORIZED)

        serializer = FeedSerializer(data=request.data)
        if serializer.is_valid():
            feed = serializer.save(user=request.user, feed_type='post')

            # Handle image upload
            image = request.FILES.get('image')
            if image:
                feed.image = image
                feed.save()

            # Handle tags
            tags = request.data.get('tags', [])
            for tag_name in tags:
                # Create a new request object for the create_tag function
                tag_request = Request(request._request)
                tag_request._full_data = {'tag_title': tag_name}
                
                # Call the create_tag function
                tag_response = create_tag(tag_request)
                
                # Check if the tag was created successfully
                if tag_response.status_code in [status.HTTP_200_OK, status.HTTP_201_CREATED]:
                    tag_id = tag_response.data.get('tag_id')
                    tag = Tag.objects.get(id=tag_id)
                    feed.tags.add(tag)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def create_idea_feed(request):
    try:
        serializer = IdeaFeedSerializer(data=request.data)
        if serializer.is_valid():
            idea_feed = serializer.save()

            # Handle image upload
            image = request.FILES.get('image')
            if image:
                idea_feed.image = image
                idea_feed.save()

            # Handle tags
            tags = request.data.get('tags', [])
            for tag_name in tags:
                # Create a new request object for the create_tag function
                tag_request = Request(request._request)
                tag_request._full_data = {'tag_title': tag_name}
                
                # Call the create_tag function
                tag_response = create_tag(tag_request, idea_feed.id)
                
                # Check if the tag was created successfully
                if tag_response.status_code in [status.HTTP_200_OK, status.HTTP_201_CREATED]:
                    tag_id = tag_response.data.get('tag_id')
                    tag = Tag.objects.get(id=tag_id)
                    idea_feed.tags.add(tag)

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['PUT'])
@parser_classes([MultiPartParser, FormParser])
def update_feed(request, feed_id):
    try:
        feed = Feed.objects.get(pk=feed_id)
    except Feed.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = FeedSerializer(feed, data=request.data)
    if serializer.is_valid():
        feed = serializer.save()

        # Handle image upload
        image = request.FILES.get('image')
        if image:
            feed.image = image
            feed.save()

        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def view_content_type(request):
    content_types = ContentType.objects.all()
    serializer = ContentTypeSerializer(content_types, many=True)
    return Response(serializer.data)

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
    feeds = Feed.objects.order_by('-created_at').all()
    serialized_data = serialize_feeds(feeds)
    return Response(serialized_data)

@api_view(['GET'])
def list_post_feeds(request):
    post_feeds = Feed.objects.filter(feed_type='post').order_by('-created_at')
    serialized_data = serialize_feeds(post_feeds)
    return Response(serialized_data)

@api_view(['GET'])
def list_idea_feeds(request):
    idea_feeds = Feed.objects.filter(feed_type='idea').order_by('-created_at')
    serialized_data = serialize_feeds(idea_feeds)
    return Response(serialized_data)

def serialize_feeds(feeds):
    serialized_data = []

    for feed in feeds:
        user_data = UserSerializer(feed.user).data
        feed_data = FeedSerializer(feed).data
        combined_data = {
            'user': user_data,
            'feed': feed_data
        }
        serialized_data.append(combined_data)

    return serialized_data
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
    feed = get_object_or_404(Feed, pk=feed_id)
    serializer = CommentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(feed=feed, user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['GET'])
# def list_comments(request, feed_id):
#     comments = Comment.objects.filter(feed_id=feed_id)
#     serializer = CommentSerializer(comments, many=True)
#     return Response(serializer.data)

@api_view(['GET'])
def list_comments(request, user_id):
    # Filter comments by user_id
    comments = Comment.objects.filter(user__id=user_id)
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
def toggle_like_feed(request, user_id, feed_id):
    try:
        user = User.objects.get(pk=user_id)
        feed = Feed.objects.get(pk=feed_id)
    except (User.DoesNotExist, Feed.DoesNotExist):
        return Response({'error': 'User or Feed not found'}, status=status.HTTP_404_NOT_FOUND)

    # Checking if the user is the same as the request user for security purposes
    if request.user != user:
        return Response({'error': 'Unauthorized action'}, status=status.HTTP_403_FORBIDDEN)

    try:
        like = Like.objects.get(user=user, feed=feed)
        like.delete()
        return Response({'message': 'Unliked successfully'}, status=status.HTTP_200_OK)
    except Like.DoesNotExist:
        Like.objects.create(user=user, feed=feed)
        return Response({'message': 'Liked successfully'}, status=status.HTTP_201_CREATED)


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



def serialize_collaborators(collaborators):
    serialized_data = []

    for collaborator in collaborators:
        user_data = UserSerializer(collaborator.user).data
        collaborator_data=  CollaboratorSerializer(collaborator).data
        combined_data = {
            'user': user_data,
            'collaborator': collaborator_data
        }
        serialized_data.append(combined_data)

    return serialized_data
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
    return Response({'message': 'Collaborator declined '}, status=status.HTTP_200_OK)


#  Notifiction views 
@api_view(['GET'])
def list_notifications(request, user_id):
    notifications = Notification.objects.filter(user_id=user_id)
    serializer = NotificationSerializer(notifications, many=True)
    return Response(serializer.data)
    
@api_view(['POST'])
def report_post(request):
    serializer = PostReportSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_tags_for_feed(request, feed_id):
    feed = Feed.objects.get(pk=feed_id)
    tags = feed.tags.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def user_likes(request, user_id):
    try:
        user_likes = Like.objects.filter(user_id=user_id, time__lte=timezone.now())
        serializer = LikeSerializer(user_likes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Like.DoesNotExist:
        return Response({'message': 'No likes found for the user'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def post_feeds_count(request, user_id):
    post_feeds_count = Feed.objects.filter(user_id=user_id, feed_type='post').count()
    return Response({'post_feeds_count': post_feeds_count})

@api_view(['GET'])
def idea_feeds_count(request, user_id):
    idea_feeds_count = Feed.objects.filter(user_id=user_id, feed_type='idea').count()
    return Response({'idea_feeds_count': idea_feeds_count})

from django.shortcuts import get_object_or_404

@api_view(['GET'])
def list_feed_tags(request, feed_id):
    feed = get_object_or_404(Feed, pk=feed_id)
    tags = feed.tags.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)