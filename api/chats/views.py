from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.http import JsonResponse

# Create your views here.

class Index(APIView):
  permission_classes = [AllowAny]

  def get(self, request):
    return JsonResponse({"testing": "testing"})

class ChatRoom(APIView):
  permission_classes = [AllowAny]

  def get(self, request, room_name):
    return JsonResponse({"room": room_name})
  