from django.conf.urls import patterns, include, url
from rest_framework import routers
from . import views

# product_router = routers.DefaultRouter()
# product_router.register(r'products', views.ProductViewSet, base_name='products')

order_router = routers.DefaultRouter()
order_router.register(r'orders', views.OrderViewSet, base_name='orders')

urlpatterns = [
	url(r'^$', views.dashboard, name='dashboard'),
    url(r'^dashboard/', views.dashboard, name='dashboard'),
]