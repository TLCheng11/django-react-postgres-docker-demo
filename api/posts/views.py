from django.shortcuts import get_object_or_404
from rest_framework import generics, viewsets, filters
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from posts.models import Post
from posts.serializers import PostSerializer

# Create your views here.

# ModelViewSet is like scarffold in rails
class PostList(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    # queryset = Post.objects.all()
    serializer_class = PostSerializer

    # overwrite the retrieve/update/delete method
    def get_object(self, queryset=None, **kwargs):
        # find post with title column instead of pk
        item = self.kwargs.get('pk')
        return get_object_or_404(Post, id=item)

    # Define Custom Queryset
    def get_queryset(self):
        user = self.request.user
        return Post.objects.filter(author=user)

# custom search
class PostSearch(generics.ListAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["^title"]

    # '^' Starts-with search.
    # '=' Exact matches.
    # '@' Full-text search. (Currently only supported Django's PostgreSQL backend.)
    # '$' Regex search.

'''
class PostList(viewsets.ViewSet):
    permission_classes = [AllowAny]
    queryset = Post.objects.all()

    def list(self, request):
        serializer = PostSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        post = get_object_or_404(self.queryset, pk=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)
    
    def create(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
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