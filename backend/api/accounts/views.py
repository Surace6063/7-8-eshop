from rest_framework import generics
from .serializers import RegisterSerializer, ProfileSerializer, UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny, IsAuthenticated

User = get_user_model()

# regsiter view
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

# login view


# profile view
class ProfileRetriveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        return self.request.user.profile

# user view
class UserRetriveUpdateDeleteView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class =  UserSerializer 
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        return self.request.user 
    