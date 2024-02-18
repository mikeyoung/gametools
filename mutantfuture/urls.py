
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("splat", views.splat, name="splat"),
    path("mutations", views.mutations, name="mutations"),
    path('create-json', views.create_json, name='create-json'),
]
