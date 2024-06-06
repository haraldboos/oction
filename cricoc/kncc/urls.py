from .views import *
from django.urls import path

urlpatterns=[
    path('player/',Player_show.as_view(),name='player'),
    path('dashboard/',Sold_out.as_view(),name='dashboard')
]