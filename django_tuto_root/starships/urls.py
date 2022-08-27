from django.urls import path
from . import views

urlpatterns = [
    path('', views.starships, name='starships'),
    path('add-starship', views.add_starship, name='add-starship'),
]
