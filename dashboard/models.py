from django.db import models
from django.utils import timezone

class Order(models.Model):
    customer = models.CharField(max_length=500)
    product = models.CharField(max_length=500)
    quantity = models.IntegerField()
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.customer