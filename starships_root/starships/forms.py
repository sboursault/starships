from django.forms import ModelForm
from .models import Starship


class StarshipForm(ModelForm):
    class Meta:
        model = Starship
        fields = '__all__'
