from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import (TagSerializer, TagListSerializer)
from .models import (Tag, TagList)

@api_view(['POST'])
def create_tag(request):
    serializer = TagSerializer(data=request.data)
    if serializer.is_valid():
        tag_name = serializer.validated_data['name']
        content_type = request.data.get('content_type')

        # Check the content type and associate the tag with the appropriate TagList
        if content_type == 'Feed':
            tag_list, _ = TagList.objects.get_or_create(name='Post Feed Tags')
        elif content_type == 'IdeaFeed':
            tag_list, _ = TagList.objects.get_or_create(name='Idea Feed Tags')

        # Associate tag with tag list
        tag, created = Tag.objects.get_or_create(name=tag_name)
        if created:
            tag_list.tags.add(tag)
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_tags(request):
    tags = Tag.objects.all()
    serializer = TagSerializer(tags, many=True)
    return Response(serializer.data)

    
# @api_view(['GET'])
# def tag_suggestions(request):
#     query = request.GET.get('query')
#     tags = Tag.objects.filter(name__icontains=query)[:10]  # Fetch tags containing the query string
#     serializer = TagSerializer(tags, many=True)
#     return Response(serializer.data)
