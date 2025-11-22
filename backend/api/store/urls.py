from django.urls import path
from .views import *

urlpatterns = [
    # get and post -> http://127.0.0.1:8000/api/categories/
    path('categories/',CategoryListCreateView.as_view(), name="category-list-create"),
    
    # get, put/patch and delete -> http://127.0.0.1:8000/api/categories/1/  # 1 -> id
    path('categories/<int:pk>/',CategoryRetriveUpdateDeleteView.as_view(),name="category-retrive-update-delete"),
    
       # get and post -> http://127.0.0.1:8000/api/products/
    path('products/',ProductListCreateView.as_view(), name="product-list-create"),
    
    # get, put/patch and delete -> http://127.0.0.1:8000/api/products/1/  # 1 -> id
    path('products/<int:pk>/',ProductRetriveUpdateDeleteView.as_view(),name="product-retrive-update-delete")
]