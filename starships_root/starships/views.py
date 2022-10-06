from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.urls import reverse_lazy
from .models import Starship
from .forms import StarshipForm
from .serializers import StarshipSerializer
from rest_framework import permissions, viewsets


@login_required(login_url=reverse_lazy('login'))
def starships(request):
    starship_list = _get_starships_by_user(request.user)
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
class StarshipRestAPI(viewsets.ModelViewSet):
    serializer_class = StarshipSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return _get_starships_by_user(self.request.user)

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user.id)


def _get_starships_by_user(user):
    return Starship.objects.filter(user_id=user.id).order_by("name")
