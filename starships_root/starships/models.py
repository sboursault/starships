from django.db import models


class Starship(models.Model):
    user_id = models.IntegerField(default=0)
    name = models.CharField(max_length=256)
    size = models.IntegerField(blank=True, null=True)
    max_passengers = models.IntegerField(blank=True, null=True)
    quantity = models.IntegerField(default=0)

    def __str__(self):
        return self.name
