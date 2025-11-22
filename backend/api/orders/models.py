from django.db import models
from django.contrib.auth.models import User
from store.models import Product

# order model
class Order(models.Model):
    STATUS_CHOICES = [
        ('pending','pending'),
        ('completed','completed'),
        ('cancelled','cancelled')
    ]
    
    PAYMENT_METHOD = [
        ('cod','cod'),
        ('esewa','esewa')
    ]
    
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    full_name = models.CharField(max_length=200)
    email = models.EmailField(max_length=100)
    phone_number = models.CharField(max_length=10)
    address = models.CharField(max_length=200)
    payment_method = models.CharField(max_length=100,choices=PAYMENT_METHOD)
    status = models.CharField(max_length=100,choices=STATUS_CHOICES,default="pending")
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"#{self.id} - {self.full_name}"
    
    @property
    def total(self):
        return sum(item.subtotal for item in self.items.all())
    

# order item model
class OrderItem(models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE,related_name="items")
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10,decimal_places=2)
    
    def __str__(self):
        return f"{self.product.title} * {self.product.quantity}"
    
    @property
    def subtotal(self):
        return self.price * self.quantity