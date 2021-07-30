from rest_framework import serializers
from tasks.models import Task

# Task Serializer
class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'