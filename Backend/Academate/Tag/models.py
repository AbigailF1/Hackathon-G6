from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType

class Tag (models.Model):
    tag_title = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.tag_title

class TagList(models.Model):
    tag = models.ManyToManyField('Tag')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
