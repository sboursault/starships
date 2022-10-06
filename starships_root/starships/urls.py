from django.urls import include, path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'starships', views.StarshipRestAPI, 'starships')

urlpatterns = [
    path('', views.starships, name='starships'),
    path('add-starship', views.add_starship, name='add-starship'),
    path('api/', include(router.urls)),
]
