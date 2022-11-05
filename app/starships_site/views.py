from django.contrib.auth.forms import UserCreationForm
from django.views.generic.edit import CreateView
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy


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

