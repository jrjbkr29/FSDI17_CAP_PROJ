from tasks.models import Task
from rest_framework import viewsets, permissions
from .serializers import TasksSerializer

# Task Viewset
class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TasksSerializer