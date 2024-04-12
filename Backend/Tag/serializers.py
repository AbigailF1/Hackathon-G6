from rest_framework import serializers
from .models import Tag, TagList

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class TagListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TagList
        fields = '__all__'

