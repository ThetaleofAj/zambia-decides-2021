from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from .models import ProgressBar, Sixteen,Eleven,TwentyOne

class ProgressBarSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressBar
        fields = ('__all__')

class SixteenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sixteen
        fields = ('__all__')

class TwentyOneSerializer(serializers.ModelSerializer):
    class Meta:
        model = TwentyOne
        fields = ('__all__')

class ElevenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eleven
        fields = ('__all__')


