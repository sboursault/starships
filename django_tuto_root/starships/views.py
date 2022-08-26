from django.shortcuts import render
from .models import Starship


def starships(request):
    starship_list = Starship.objects.all().order_by("name")
    return render(request,
                  'starships/starship_list.html',
                  {
                      'title': 'Starships',
                      'starship_list': starship_list
                  })
