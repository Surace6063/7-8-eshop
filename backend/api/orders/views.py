from rest_framework import generics
from .serializers import OrderItemSerializer, OrderSerializer
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class OrderItemCreateView(generics.CreateAPIView):
    serializer_class = OrderItemSerializer
    permission_classes = [IsAuthenticated]
    