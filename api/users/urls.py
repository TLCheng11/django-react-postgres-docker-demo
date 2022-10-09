from django.urls import path
from users.views import UserCreate

app_name = "users"

urlpatterns = [
    path("register/", UserCreate.as_view(), name="user_create")
]