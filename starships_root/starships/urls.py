from django.urls import include, path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'starships', views.StarshipRestAPI, 'starships')
router.register(r'users', views.UserRestAPI, 'users')

urlpatterns = [
    path('', views.starships, name='starships'),
    path('new', views.add_starship, name='new'),
    path('<int:id>/edit/', views.edit_starship, name='edit-starship'),
    path('api/', include(router.urls)),
]
