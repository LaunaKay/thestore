from rest_framework import serializers

from .models import Product
from .models import Image


# create nested object with image path embedded
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model=Image
        fields=('imgpath', 'product')


class ProductSerializer(serializers.ModelSerializer):

    images=serializers.StringRelatedField(many=True)

    class Meta:
        model=Product
        fields=('item', 'unitcost', 'description', 'quantity', 'images', 'id')
