from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from .models import Profile

User = get_user_model()

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True,required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True,required=True)
    email = serializers.EmailField(required=True)
    
    class Meta:
        model = User
        fields = ('username','email','password','password2')
    
    # validate email -> field level validation
    def validate_email(self,value): 
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already in use!")
        return value
    
    # validate matching password
    def validate(self, attrs):
           if attrs['password'] != attrs['password2']:
               raise serializers.ValidationError("Password didn't match!")
           return attrs
    
    # create new user with hashed password
    def create(self, validated_data):
         validated_data.pop('password2')  # remove password2... we dont save it in database
         
         user = User(
             email = validated_data["email"],
             username = validated_data["username"]
         )
         
         # hash passowrd
         user.set_password(validated_data["password"]) 
         user.save() # save user to user model
         return user


# login serializer



# profile serializer
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id','profile_image','phone','address','created_at']     


# user serializer  with nested profile serializer      
class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    
    class Meta:
        model = User
        fields = ['id','username','email','profile']
        
   