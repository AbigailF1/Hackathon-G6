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
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    def __str__(self):
        return self.feedText
    
    
    def user_profile_image(self):
        # Access profile image of the user associated with the feed
        return self.user.profile.image.url if self.user.profile else None

    def user_skills(self):
        # Access skills of the user associated with the feed
        return self.user.profile.skills.all() if self.user.profile else None

    def user_full_name(self):
        # Access full name of the user associated with the feed
        return f"{self.user.first_name} {self.user.last_name}" if self.user else None

# Model for the idea feed, which inherits from Feed
class IdeaFeed(Feed):
    collaborate_button = models.BooleanField(default=False)

# Model for comments on the feed
class Comment(models.Model):
    text_content = models.TextField()
    feed = models.ForeignKey(Feed, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    time = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.text_content
# Model for likes on the feed
class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default="1")
    feed = models.ForeignKey(Feed, on_delete=models.CASCADE)
    time = models.DateTimeField(auto_now_add=True)

# Model for the collaborators
class Collaborator(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    idea_feed = models.ForeignKey(IdeaFeed, on_delete=models.CASCADE)
    status = models.CharField(max_length=10, choices=[('pending', 'Pending'), ('accepted', 'Accepted'), ('declined', 'Declined') ] ,null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    

# Model for collaborative chats
class CollaboratorChat(models.Model):
    chat = models.TextField()
    idea = models.ForeignKey(IdeaFeed, on_delete=models.CASCADE)
    collaborator = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.chat
# Model for the notifications
class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE, null=True, blank=True)
    like = models.ForeignKey(Like, on_delete=models.CASCADE, null=True, blank=True)
    collaborator = models.ForeignKey(Collaborator, on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True)

class PostReport(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Feed, on_delete=models.CASCADE)
    reason = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.reason

