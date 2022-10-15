from django.shortcuts import get_object_or_404
from rest_framework import generics, viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from posts.models import Post
from posts.serializers import PostSerializer

# Create your views here.

# ModelViewSet is like scarffold in rails
class PostList(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    # queryset = Post.objects.all()
    serializer_class = PostSerializer

    # overwrite the retrieve/update/delete method
    def get_object(self, queryset=None, **kwargs):
        # find post with title column instead of pk
        item = self.kwargs.get('pk')
        return get_object_or_404(Post, title=item)

    # Define Custom Queryset
    def get_queryset(self):
        return Post.objects.filter(id__gte=2)

'''
class PostList(viewsets.ViewSet):
    permission_classes = [AllowAny]
    queryset = Post.objects.all()

    def list(self, request):
        serializer_class = PostSerializer(self.queryset, many=True)
        return Response(serializer_class.data)

    def retrieve(self, request, pk=None):
        post = get_object_or_404(self.queryset, pk=pk)
        serializer_class = PostSerializer(post)
        return Response(serializer_class.data)
    
    def create(self, request):
        serializer_class = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer_class.data)
'''

'''
class PostList(generics.ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
'''