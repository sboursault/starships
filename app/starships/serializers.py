from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Starship


class StarshipSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Starship
        fields = ['id', 'name', 'size', 'max_passengers', 'quantity']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
