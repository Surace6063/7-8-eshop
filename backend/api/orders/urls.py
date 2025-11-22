from django.urls import path
from .views import OrderItemCreateView

urlpatterns = [
    path('create/',OrderItemCreateView.as_view(),name="create-order")
]