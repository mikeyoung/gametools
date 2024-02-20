
from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("splat", views.splat, name="splat"),
    path("items", views.items, name="items"),
    path('create-json', views.create_json, name='create-json'),
]
