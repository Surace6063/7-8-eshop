from rest_framework import generics
from .serializers import CartItemSerializer, CartSerializer
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem

# add to cart view
class CartItemAddView(generics.CreateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]
    
    def perform_create(self, serializer):
        cart,_ = Cart.objects.get_or_create(user=self.request.user)
        product = serializer.validated_data['product']
        quantity = serializer.validated_data['quantity']
        
        # check if cart item for partcular product is already exits or not
        item,created = CartItem.objects.get_or_create(cart=cart,product=product)
        
        if created:
            item.quantity = quantity
        else:
            item.quantity += quantity
        
        item.save()
                
 
# get user cart 
class CartDetailView(generics.RetrieveAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        cart, _ = Cart.objects.get_or_create(user=self.request.user)
        return cart
           

# update  user cart item
class CartUpdateView(generics.UpdateAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return CartItem.objects.filter(cart__user=self.request.user)


# delete  user cart item
class CartDeleteView(generics.DestroyAPIView):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return CartItem.objects.filter(cart__user=self.request.user)           