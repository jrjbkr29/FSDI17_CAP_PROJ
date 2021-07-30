from django.db import models

class Task(models.Model):
    job_type = models.CharField(max_length=3)
    work_order = models.CharField(max_length=100)
    serial_num = models.CharField(max_length=100)
    part_num = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    details = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

