from django.contrib import admin
from .models import Feed , IdeaFeed, Comment, Like, Collaborator, Notification, CollaboratorChat

admin.site.register(Feed)
admin.site.register(IdeaFeed)
admin.site.register(Comment)
admin.site.register(Like)
admin.site.register(Collaborator)
admin.site.register(Notification)
admin.site.register(CollaboratorChat)