from django.contrib import admin

from .models import  FAQ, Resources, Employees

# Register your models here.
admin.site.register({FAQ, Resources, Employees})