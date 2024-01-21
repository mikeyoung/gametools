
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('create-json', views.create_json, name='create-json'),
]