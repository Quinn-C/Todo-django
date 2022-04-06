from django.contrib import admin

# import Todo class from models to admin
from .models import Todo

# create a class for listing info from the model in admin page
class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')

# Register your models here.

admin.site.register(Todo, TodoAdmin)