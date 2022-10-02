from django.db import models


class Starship(models.Model):
    name = models.CharField(max_length=256)
    size = models.IntegerField(blank=True, null=True)
    max_passengers = models.IntegerField(blank=True, null=True)

    def __str__(self):
        return self.name


