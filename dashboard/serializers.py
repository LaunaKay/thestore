from rest_framework import serializers

from .models import Order
# from .models import Product


# create nested object with image path embedded
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model=Order
        fields=('customer', 'product', 'quantity', 'created')


# class ProductSerializer(serializers.ModelSerializer):

#     images=serializers.StringRelatedField(many=True)

#     class Meta:
#         model=Product
#         fields=('item', 'unitcost', 'description', 'quantity', 'images', 'id')
