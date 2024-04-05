from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.response import Response
from .serializers import (TagSerializer, TagListSerializer)
from .models import (Tag, TagList)
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.core.exceptions import ObjectDoesNotExist



@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def create_tag(request):
    serializer = TagSerializer(data=request.data)
    if serializer.is_valid():
        tag_title = serializer.validated_data['tag_title']
        content_type_name = request.data.get('content_type')
        try:
            content_type = ContentType.objects.get(app_label='Feed', model__in=['IdeaFeed', 'Feed'])
            tag_list, _ = TagList.objects.get_or_create(content_type=content_type)

            tag, created = Tag.objects.get_or_create(tag_title=tag_title)
            
            if created:
                tag_list.tag.add(tag)
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except ObjectDoesNotExist:
            return Response({'error': f'Content type "{content_type_name}" does not exist.'}, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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

# @api_view(['GET'])
# def tag_suggestions(request):
#     query = request.GET.get('query')
#     tags = Tag.objects.filter(name__icontains=query)[:10]  # Fetch tags containing the query string
#     serializer = TagSerializer(tags, many=True)
#     return Response(serializer.data)
