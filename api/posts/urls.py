from django.urls import path
from .views import PostList
from rest_framework.routers import DefaultRouter

app_name = 'posts'

# using routes in defaultrouter, like resouce in rails
router = DefaultRouter()
router.register('', PostList, basename='post')
urlpatterns = router.urls

# urlpatterns = [
#     path('<int:pk>/', PostDetail.as_view(), name='detailcreate'),
#     path('', PostList.as_view(), name='listcreate'),
# ]