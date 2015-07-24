from django.conf.urls import patterns, include, url
from rest_framework import routers
from . import views

product_router = routers.DefaultRouter()
product_router.register(r'products', views.ProductViewSet, base_name='products')

urlpatterns = [
    url(r'^$', views.index, name='index'),
      url('^api/', include(product_router.urls)),
]