from django.contrib import admin

# from ../shop/models import Product
# from ../shop/models import Image
from .models import Order

class OrderAdmin(admin.ModelAdmin):
    fields = ['customer', 'product',  'quantity', 'created', 'updated']

admin.site.register(Order, OrderAdmin)