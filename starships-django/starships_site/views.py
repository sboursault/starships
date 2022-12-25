from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.hashers import make_password
from django.views.generic.edit import CreateView
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework import permissions, viewsets


class RegisterView(CreateView):
    """
    View to create a user
    """
    template_name = 'registration/register.html'
    form_class = UserCreationForm
    success_url = reverse_lazy('register-success')

    def form_valid(self, form):
        form.save()
        return HttpResponseRedirect(self.success_url)


class UserRestAPI(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAdminUser]
    queryset = User.objects.all()

    def get_queryset(self):
        if self.action is 'list' and 'username' in self.request.query_params:
            return User.objects.filter(username=self.request.query_params['username'])
        else:
            return User.objects.all()

    def perform_create(self, serializer):
        password = make_password(serializer.validated_data['password'])
        serializer.save(password=password)
