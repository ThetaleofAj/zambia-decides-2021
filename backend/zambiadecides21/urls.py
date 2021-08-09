from django.urls import path
from .views import ElevenView,SixteenView,TwentyOneView,ProgressBarView


urlpatterns = [
    path('',ProgressBarView.as_view()),
    path('2011/',ElevenView.as_view()),
    path('2016/',SixteenView.as_view()),
    path('2021/',TwentyOneView.as_view()),

]