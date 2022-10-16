from django.urls import path
from .views import PostList, PostSearch
from rest_framework.routers import DefaultRouter

app_name = 'posts'

# using routes in defaultrouter, like resouce in rails
# router = DefaultRouter()
# router.register('', PostList, basename='post')
# urlpatterns = router.urls

urlpatterns = [
  path('<int:pk>/', PostList.as_view({'get': 'retrieve'}), name='post-retrieve'),
  path('', PostList.as_view({'get': 'list', 'post': 'create'}), name='post-list'),
  path('search/', PostSearch.as_view(), name='post-search')
]