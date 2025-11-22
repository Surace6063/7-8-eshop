from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # post -> http://127.0.0.1:8000/api/auth/register/
    path('register/',RegisterView.as_view(),name="regsiter"),
    
    # post -> http://127.0.0.1:8000/api/auth/login/
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    
    # post ->  http://127.0.0.1:8000/api/auth/token/refresh/
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # http://127.0.0.1:8000/api/auth/profile/pk/
    path('profile/',ProfileRetriveUpdateDeleteView.as_view(),name="profile"),
    
    # http://127.0.0.1:8000/api/auth/me/pk/
    path('me/',UserRetriveUpdateDeleteView.as_view(),name="user"),
    
]