from rest_framework import serializers

# import Todo class from model to here for converting to JSON
from .models import Todo

class TodoSerialiser(serializers.ModelSerializer):
    class Meta:
        model = Todo # specify the model to work with
        fields = ('id', 'title', 'description', 'completed') # the fields to be converted 