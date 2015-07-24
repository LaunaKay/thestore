from django.contrib import admin

from .models import Product
from .models import Image

class ProductAdmin(admin.ModelAdmin):
    fields = ['item', 'description', 'unitcost', 'quantity', 'size', 'color', 'created', 'updated', 'id']

class ImageAdmin(admin.ModelAdmin):
    fields=['imgpath', 'product']

admin.site.register(Product, ProductAdmin)
admin.site.register(Image, ImageAdmin)


