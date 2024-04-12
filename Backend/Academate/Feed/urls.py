from django.urls import path
from . import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

# Define schema view
schema_view = get_schema_view(
    openapi.Info(
        title="Your Feed API",
        default_version='v1',
        description="API documentation for managing feeds, comments, likes, collaborators, and notifications.",
    ),
    public=True,
)

urlpatterns = [
    path('welcome/', views.welcome, name='welcome'),
    # Feed-related URLs
    path('feeds/create/post/', views.create_post_feed, name='create_post_feed'),
    path('feeds/create/idea/', views.create_idea_feed, name='create_idea_feed'),
    path('feeds/<int:feed_id>/', views.update_feed, name='update_feed'),
    path('feeds/<int:feed_id>/delete/', views.delete_feed, name='delete_feed'),
    path('feeds/', views.list_feeds, name='list_feeds'),
    path('feeds/post/', views.list_post_feeds, name='list_post_feeds'),
    path('feeds/idea/', views.list_idea_feeds, name='list_idea_feeds'),
    path('feeds/search/user/<str:username>/', views.search_feed_by_user, name='search_feed_by_user'),
    path('feeds/search/tag/<str:tag_name>/', views.search_feed_by_tag, name='search_feed_by_tag'),

    # Comment-related URLs
    path('feeds/<int:feed_id>/comments/', views.list_comments, name='list_comments'),
    path('feeds/<int:feed_id>/comments/add/', views.add_comment, name='add_comment'),
    path('feeds/<int:feed_id>/comments/<int:comment_id>/', views.edit_comment, name='edit_comment'),
    path('feeds/<int:feed_id>/comments/<int:comment_id>/delete/', views.delete_comment, name='delete_comment'),
    
    # Like-related URLs
    path('feeds/<int:feed_id>/like/', views.toggle_like_feed, name='toggle_like_feed'),
    
    # Collaborator-related URLs
    path('feeds/<int:feed_id>/toggle_collaborate/', views.toggle_collaborate_button, name='toggle_collaborate_button'),
    path('feeds/<int:feed_id>/collaborators/', views.list_collaborators, name='list_collaborators'),
    path('feeds/<int:feed_id>/collaborators/<int:collaborator_id>/accept/', views.accept_collaborator, name='accept_collaborator'),
    path('feeds/<int:feed_id>/collaborators/<int:collaborator_id>/decline/', views.decline_collaborator, name='decline_collaborator'),
    
    # Notification-related URLs
    path('users/<int:user_id>/notifications/', views.list_notifications, name='list_notifications'),

    # Report post URL
    path('feeds/report/', views.report_Feed, name='report_Feed'),

    # Content type URL
    path('feeds/content_type/', views.view_content_type, name='get_content_type'),

    # Swagger documentation URL
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]
