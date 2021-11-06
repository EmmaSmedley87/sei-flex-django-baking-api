from rest_framework import serializers
from cakes.models import Cakes, CakeCategories


class CakeSerializer(serializers.ModelSerializer):
    class Meta:
        # which model to use
        model = Cakes
        # which fields to serialise
        fields = '__all__'


class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        # which model to use
        model = CakeCategories
        # which fields to serialise
        fields = '__all__'
