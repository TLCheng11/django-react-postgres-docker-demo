from django.urls import path
from . import views

urlpatterns = [
    # path("", views.index, name="index"),
    path("", views.PostList.as_view(), name="postList"),
    path("<int:pk>/", views.PostDetail.as_view(), name="postDetail")
]