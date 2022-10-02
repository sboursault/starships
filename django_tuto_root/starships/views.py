from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Starship
from .forms import StarshipForm
from .serializers import StarshipSerializer
from rest_framework import viewsets


def starships(request):
    starship_list = Starship.objects.all().order_by("name")
    return render(
        request,
        'starships/starship_list.html',
        {'title': 'Starships', 'nav_active': 'list', 'starship_list': starship_list}
    )


def add_starship(request):
    submitted = False
    if request.method == 'POST':
        form = StarshipForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/add-starship?submitted=true')
    else:
        form = StarshipForm()
        if 'submitted' in request.GET:
            submitted = True
    return render(
        request,
        'starships/add_starship.html',
        {'title': 'New starship', 'nav_active': 'new', 'form': form, 'submitted': submitted}
    )


class StarshipViewSet(viewsets.ModelViewSet):
    queryset = Starship.objects.all().order_by('name')
    serializer_class = StarshipSerializer
