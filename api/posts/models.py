from django.db import models
from users.models import NewUser as User

# Create your models here.

class Post(models.Model):
    options = (("draft", "Draft"), ("published", "Published"))

    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    title = models.CharField(max_length=250)
    content = models.TextField()
    status = models.CharField(max_length=10, choices=options, default="published")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title