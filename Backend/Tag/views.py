from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from .serializers import (TagSerializer)
from .models import (Tag)
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist

@api_view(['POST'])
def create_tag(request):
    tag_title = request.data.get('tag_title', '').strip()  # Assuming tag title is sent in the request data

    if not tag_title:
        return Response({'error': 'Tag title is required.'}, status=status.HTTP_400_BAD_REQUEST)

    # Check if the tag already exists
    try:
        tag = Tag.objects.get(tag_title__iexact=tag_title)
        # Tag already exists, no need to create a new one
        return Response({'message': 'Tag already exists in the list.', 'tag_id': tag.id}, status=status.HTTP_200_OK)
    except Tag.DoesNotExist:
        # Create a new tag
        tag = Tag.objects.create(tag_title=tag_title)
        return Response({'message': 'Tag created successfully.', 'tag_id': tag.id}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def list_tags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def search_tags(request):
    query = request.GET.get('query', '')
    tags = Tag.objects.filter(tag_title__istartswith=query)
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)
