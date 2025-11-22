from django.urls import path
from .views import *

urlpatterns = [
    # post -> http://127.0.0.1:8000/api/carts/add/
    path('add/',CartItemAddView.as_view(),name="add-to-cart"),
    # get -> http://127.0.0.1:8000/api/carts/
    path('',CartDetailView.as_view(),name="cart-details"),
    # patch -> http://127.0.0.1:8000/api/carts/update/id/
    path('update/<int:pk>/',CartUpdateView.as_view(),name="cart-update"),
    # delete -> http://127.0.0.1:8000/api/carts/delete/id/
    path('delete/<int:pk>/',CartDeleteView.as_view(),name="cart-delete"),
]