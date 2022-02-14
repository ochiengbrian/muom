from rest_framework import serializers
from .models import LaptopAssesories, OtherElectronics, PhoneAssesories, Series, SingleMovies


class LaptopSerializers(serializers.ModelSerializer):
    class Meta:
        model = LaptopAssesories
        fields = [
            'name', 'description', 'image', 'image_url',
            'category', 'stock'
        ]


class OtherSerializers(serializers.ModelSerializer):
    class Meta:
        model = OtherElectronics
        fields = [
            'name', 'description', 'image', 'image_url',
            'category', 'stock'
        ]


class PhoneSerializers(serializers.ModelSerializer):
    class Meta:
        model = PhoneAssesories
        fields = [
            'name', 'description', 'image', 'image_url',
            'category', 'stock'
        ]


class MoviesSerializers(serializers.ModelSerializer):
    class Meta:
        model = SingleMovies
        fields = [
            'name', 'description', 'image', 'image_url',
            'category'
        ]


class SeriesSerializers(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = [
            'name', 'description', 'image', 'image_url',
            'category'
        ]
