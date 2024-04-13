from django.urls import path
from . import views

urlpatterns = [
    path('create-tag/', views.create_tag, name='create-tag'),
    path('list-tags/', views.list_tags, name='list-tags'),
    path('search-tags/', views.search_tags, name='search-tags'),
]
