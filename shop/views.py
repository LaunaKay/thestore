from django.shortcuts import render
from .models import Product
from .models import Image
from rest_framework import viewsets
from .serializers import ProductSerializer
from .serializers import ImageSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

def index(request):
    return render(request, 'base.html')