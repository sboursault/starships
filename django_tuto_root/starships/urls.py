from django.urls import path
from . import views

urlpatterns = [
    path('', views.starships, name='starships'),
]
