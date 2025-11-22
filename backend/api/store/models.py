from django.db import models
from django.utils.text import slugify

# category model
class Category(models.Model):
    name = models.CharField(max_length=100,unique=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
    


# post model    
class Product(models.Model):
    category = models.ForeignKey(Category,on_delete=models.CASCADE,related_name="items")
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=250,unique=True,blank=True)
    description = models.TextField()
    stock = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to="product_images/")
    price = models.DecimalField(max_digits=100,default=0,decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
    
    # create slug automatically
    def save(self, *args, **kwargs):
        if not self.slug:
            base_slug = slugify(self.title)  
            slug = base_slug
            counter = 1

            # Keep changing slug until it’s unique
            while Product.objects.filter(slug=slug).exists():
                slug = f"{base_slug}-{counter}"
                counter += 1

            self.slug = slug

        super().save(*args, **kwargs)