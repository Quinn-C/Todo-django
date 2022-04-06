from django.shortcuts import render

# provides the implementation for CRUD operations by default
from rest_framework import viewsets 

# JSON
from .serialisers import TodoSerialiser 

# Todo model
from .models import Todo

# Create your views here.
class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerialiser
    queryset = Todo.objects.all()
