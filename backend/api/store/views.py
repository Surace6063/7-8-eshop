from rest_framework import generics, filters
from .models import *
from .serializers import *
from .pagination import CustomPagination
from django_filters.rest_framework import DjangoFilterBackend
from .filters import ProductFilter
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from .permissions import IsAdminUserOrReadOnly

# get and create category 
class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUserOrReadOnly]

# retrive, update and delete category
class CategoryRetriveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUserOrReadOnly]   


# get and create product
class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = CustomPagination
    permission_classes = [IsAdminUserOrReadOnly]
    filter_backends = [DjangoFilterBackend,filters.SearchFilter,filters.OrderingFilter]
    
    filterset_fields = ['category__name']   # http://127.0.0.1:8000/api/products/?category__name=
    search_fields = ['title', 'description'] # http://127.0.0.1:8000/api/products/?search=search_data
    ordering_fields = ['price']  # http://127.0.0.1:8000/api/products/?ordering = price or created_at
    ordering = ['-created_at']   # setting default ordering to -created_at
    filterset_class = ProductFilter # custom filter

# retrive, update and delete product
class ProductRetriveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUserOrReadOnly]      