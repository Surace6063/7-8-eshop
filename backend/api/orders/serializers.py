from rest_framework import serializers
from .models import Order, OrderItem


class OrderItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(
        source="product.title", read_only=True)

    class Meta:
        model = OrderItem
        fields = ['id', 'product', 'quantity',
                  'product_name', 'price', 'subtotal']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'full_name', 'email', 'phone_number',
                  'address', 'payment_method', 'status','total', 'items', 'created_at'
                  ]
