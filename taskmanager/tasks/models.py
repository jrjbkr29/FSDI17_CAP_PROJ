from django.db import models

class Task(models.Model):
    job_type = models.CharField(max_length=3)
    work_order = models.CharField(max_length=10)
    serial_num = models.CharField(max_length=25)
    part_num = models.CharField(max_length=25)
    email = models.EmailField(max_length=25, unique=True)
    details = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

