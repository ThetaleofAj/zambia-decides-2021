from django.shortcuts import render
from rest_framework import generics
from .models import ProgressBar, Sixteen,Eleven,TwentyOne
from .serializers import ProgressBarSerializer,SixteenSerializer,ElevenSerializer,TwentyOneSerializer

# Create your views here.
class ProgressBarView(generics.ListAPIView):
    queryset = ProgressBar.objects.all()
    serializer_class = ProgressBarSerializer

class ElevenView(generics.ListAPIView):
    queryset = Eleven.objects.all()
    serializer_class = ElevenSerializer

class SixteenView(generics.ListAPIView):
    queryset = Sixteen.objects.all()
    serializer_class = SixteenSerializer

class TwentyOneView(generics.ListAPIView):
    queryset = TwentyOne.objects.all()
    serializer_class = TwentyOneSerializer

