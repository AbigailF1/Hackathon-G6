from django.db import models
from User.models import User
from Tag.models import Tag, TagList

# Model for the main feed
class Feed(models.Model):
    FEED_TYPE_CHOICES = (
        ('post', 'Post'),
        ('idea', 'Idea'),
    )
    feedText = models.TextField()
    image = models.ImageField(upload_to='feed_images/', null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    tag_list = models.ForeignKey(TagList, on_delete=models.CASCADE, default=1)
    feed_type = models.CharField(max_length=10, choices=FEED_TYPE_CHOICES ,default='post')


# Model for the idea feed, which inherits from Feed
class IdeaFeed(Feed):
    collaborate_button = models.BooleanField(default=False)

# Model for comments on the feed
class Comment(models.Model):
    text_content = models.TextField()
    feed = models.ForeignKey(Feed, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    time = models.DateTimeField(auto_now_add=True)

# Model for likes on the feed
class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    feed = models.ForeignKey(Feed, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)

# Model for the collaborators
class Collaborator(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    idea_feed = models.ForeignKey(IdeaFeed, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=[('pending', 'Pending'), ('accepted', 'Accepted'), ('declined', 'Declined')])

# Model for collaborative chats
class CollaboratorChat(models.Model):
    chat = models.TextField()
    idea = models.ForeignKey(IdeaFeed, on_delete=models.CASCADE)
    collaborator = models.ForeignKey(User, on_delete=models.CASCADE)

# Model for the notifications
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, null=True, blank=True)
    like = models.ForeignKey(Like, on_delete=models.CASCADE, null=True, blank=True)

class FeedReport(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Feed, on_delete=models.CASCADE)
    reason = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
