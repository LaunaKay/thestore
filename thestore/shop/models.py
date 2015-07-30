from django.db import models
from django.utils import timezone

class Product(models.Model):
    XS, S, M, L, XL = 'XS', 'S', 'M', 'L', 'XL'
    sizechoices = (XS, 'XS'), (S, 'S'), (M, 'M'), (L, 'L'), (XL, 'XL')
    grey, white, black, red = 'grey', 'white', 'black', 'red'
    colorchoices = (grey, 'grey'), (white, 'white'), (black, 'black'), (red, 'red')
    item = models.CharField(max_length=500)
    description = models.CharField(max_length=1000)
    unitcost = models.DecimalField(max_digits = 7, decimal_places=2)
    quantity = models.IntegerField()
    size = models.CharField(max_length=5, choices=sizechoices)
    color = models.CharField(max_length=15, choices = colorchoices)
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.item

class Image(models.Model):
    product = models.ForeignKey(Product, related_name='images')
    imgpath = models.CharField(max_length=50)

    def __str__(self):
        return self.imgpath