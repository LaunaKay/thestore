from django.shortcuts import render
# from ../shop/models import Product
# from ../shop/models import Image
from .models import Order
from rest_framework import viewsets
# from ../shop/serializers import ProductSerializer
# from ../shop/serializers import ImageSerializer
from .serializers import OrderSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

def dashboard(request):
    return render(request, 'index.html')