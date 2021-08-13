from django.contrib import admin

from .models import  Task, FAQ, Resources, Employees

# Register your models here.
admin.site.register({Task, FAQ, Resources, Employees})