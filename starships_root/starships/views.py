from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from .models import Starship
from .forms import StarshipForm
from .serializers import StarshipSerializer
from rest_framework import viewsets


@login_required(login_url=reverse_lazy('login'))
def starships(request):
    starship_list = Starship.objects.filter(user_id='Lennon').order_by("name")
    return render(
        request,
        'starships/starship_list.html',
        {'title': 'Starships', 'nav_active': 'list', 'starship_list': starship_list}
    )


@login_required(login_url=reverse_lazy('login'))
def add_starship(request):
    submitted = False
    if request.method == 'POST':
        starship = Starship(user_id=request.user.id)
        form = StarshipForm(request.POST, instance=starship)
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


# Rest api
class StarshipViewSet(viewsets.ModelViewSet):
    queryset = Starship.objects.all().order_by('name')
    serializer_class = StarshipSerializer
