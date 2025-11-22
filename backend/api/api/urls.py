from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    # store api urls
    path('api/',include('store.urls')),
    
    # accounts api urls
    path('api/auth/',include('accounts.urls')),
    
    # cart app url
    path('api/carts/',include('carts.urls')),
    
    # order app url
    path('api/orders/',include('orders.urls'))
]


# for production phase only
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)