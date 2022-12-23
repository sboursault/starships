from rest_framework import serializers

from .models import Starship


class StarshipSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Starship
        fields = ['id', 'name', 'size', 'max_passengers', 'quantity']
