from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
import os
from .models import Product

# -------------------------------
# Signal: Delete product image when the product is deleted
# -------------------------------
@receiver(post_delete, sender=Product)  # Trigger this function after a Product instance is deleted
def delete_image_on_delete(sender, instance, **kwargs):
    # Check if the Product has an image associated
    if instance.image:
        # Check if the image file actually exists on the filesystem
        if os.path.isfile(instance.image.path):
            # Delete the file from the filesystem
            os.remove(instance.image.path)


# -------------------------------
# Signal: Delete old product image when updating with a new image
# -------------------------------
@receiver(pre_save, sender=Product)  # Trigger this function before a Product instance is saved
def delete_old_image_on_update(sender, instance, **kwargs):
    # If this is a new Product (doesn't exist in DB yet), do nothing
    if not instance.pk:
        return

    try:
        # Fetch the existing Product from the database
        old_instance = Product.objects.get(pk=instance.pk)
    except Product.DoesNotExist:
        # If for some reason it doesn't exist, do nothing
        return

    # Check if there was an old image and it has changed
    if old_instance.image and old_instance.image != instance.image:
        # Check if the old image file exists on the filesystem
        if os.path.isfile(old_instance.image.path):
            # Delete the old image file from the filesystem
            os.remove(old_instance.image.path)
