from django.urls import include, path
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'starships', views.StarshipViewSet)

urlpatterns = [
    path('', views.starships, name='starships'),
    path('add-starship', views.add_starship, name='add-starship'),
    path('api/', include(router.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
