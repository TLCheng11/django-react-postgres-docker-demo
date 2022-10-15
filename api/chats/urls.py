from django.urls import path

from chats.views import Index, ChatRoom

urlpatterns = [
  path('', Index.as_view(), name='index'),
  path('<str:room_name>/', ChatRoom.as_view(), name='room')
]