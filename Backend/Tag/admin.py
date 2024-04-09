from django.contrib import admin
from .models import Tag,TagList
# Register your models here.

admin.site.register(Tag)
admin.site.register(TagList)