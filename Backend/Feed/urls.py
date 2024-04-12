from django.urls import path
from . import views

urlpatterns = [
    # urls related to feed itself
    path('feeds/create/post/', views.create_post_feed, name='create_post_feed'),
    path('feeds/create/idea/', views.create_idea_feed, name='create_idea_feed'),
    path('feeds/<int:feed_id>/', views.update_feed, name='update_feed'),
    path('feeds/<int:feed_id>/delete/', views.delete_feed, name='delete_feed'),
    path('feeds/', views.list_feeds, name='list_feeds'),
    path('feeds/post/', views.list_post_feeds, name='list_post_feeds'),
    path('feeds/idea/', views.list_idea_feeds, name='list_idea_feeds'),
    path('feeds/search/user/<str:username>/', views.search_feed_by_user, name='search_feed_by_user'),
    path('feeds/search/tag/<str:tag_>/', views.search_feed_by_tag, name='search_feed_by_tag'),

    # urls related to comments
    
    path('feeds/<user_id>/comments/', views.list_comments, name='list_comments'),
    path('feeds/<int:feed_id>/comments/add/', views.add_comment, name='add_comment'),
    path('feeds/<int:feed_id>/comments/<int:comment_id>/', views.edit_comment, name='edit_comment'),
    path('feeds/<int:feed_id>/comments/<int:comment_id>/delete/', views.delete_comment, name='delete_comment'),
    
    # urls related to likes
    path('users/<int:user_id>/feeds/<int:feed_id>/toggle-like/', views.toggle_like_feed, name='toggle_like_feed'),
    
    # path('feeds/<int:feed_id>/like/', views.like_feed, name='like_feed'),
    # path('feeds/<int:feed_id>/unlike/', views.unlike_feed, name='unlike_feed'),
    
    # urls related to collaborators
    path('feeds/<int:feed_id>/toggle_collaborate/', views.toggle_collaborate_button, name='toggle_collaborate_button'),
    path('feeds/<int:feed_id>/collaborators/', views.list_collaborators, name='list_collaborators'),
    path('feeds/<int:feed_id>/collaborators/<int:collaborator_id>/accept/', views.accept_collaborator, name='accept_collaborator'),
    path('feeds/<int:feed_id>/collaborators/<int:collaborator_id>/decline/', views.decline_collaborator, name='decline_collaborator'),
    path('users/<int:user_id>/notifications/', views.list_notifications, name='list_notifications'),
    path('feeds/report/', views.report_post, name='report_post'),

    # url for content type
    path('feeds/content_type/', views.view_content_type, name='get_content_type')
]
