from rest_framework import serializers
from .models import *

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id','name','created_at']
        read_only_fields = ['created_at']



class ProductSerializer(serializers.ModelSerializer):
    # read-only field to show category name
    category_name = serializers.StringRelatedField(source="category")
    
    # write-only filed to accept category id for add/update
    category = serializers.PrimaryKeyRelatedField(
        queryset = Category.objects.all(),
        write_only = True
    )
    
    class Meta:
        model = Product
        fields = ['id','title','slug','price','image','category_name','description','category','stock','created_at'] 
        read_only_fields = ['category_name','created_at']       