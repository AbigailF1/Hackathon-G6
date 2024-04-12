from django.db import models
from User.models import User
from django.contrib.contenttypes.models import ContentType

class Tag (models.Model):
    tag_title = models.CharField(max_length=100, unique=True,null=True, blank=True)

    def __str__(self):
        return self.tag_title
