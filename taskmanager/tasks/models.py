from django.db import models

# Tasks
job_type_CHOICES = (
    ('atp', 'ATP'),
    ('qtp', 'QTP'),
    ('dev', 'DEV'),
    ('n/a', 'N/A')
)

environment_CHOICES = (
    ('none', 'None'),
    ('vibe', 'Vibration'),
    ('shock', 'Shock'),
    ('thermal', 'Thermal'),
    ('tvac', 'Thermal Vacuum'),
    ('functional', 'Functional')
)

status_CHOICES = (
    ('wip', 'In-Progress'),
    ('hold', 'On-Hold'),
    ('complete', 'Completed'),
    ('new', 'New-Request'),
    ('n/a', 'Not-Scheduled')
)
class Task(models.Model):
    job_type = models.CharField(max_length=3, choices=job_type_CHOICES, default='n/a')
    work_order = models.CharField(max_length=10)
    serial_num = models.CharField(max_length=25)
    part_num = models.CharField(max_length=25)
    email = models.EmailField(max_length=25, unique=False)
    environment = models.CharField(max_length=15, choices=environment_CHOICES, default='none')
    details = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=25, choices=status_CHOICES, default='new')
    assignedTo = models.CharField(max_length=30, default='none')
    resource = models.CharField(max_length=30, default='none')

# FAQ
department_CHOICES = (
    ('none', 'None'),
    ('vibe', 'Vibration'),
    ('shock', 'Shock'),
    ('thermal', 'Thermal'),
    ('tvac', 'Thermal Vacuum'),
    ('functional', 'Functional')
)
class FAQ(models.Model):
    department = models.CharField(max_length=15, choices=department_CHOICES, default='none')
    question = models.CharField(max_length=50)
    answer = models.CharField(max_length=250)
    
class Employees(models.Model):
    employee = models.CharField(max_length=30, blank=False, unique=True)
    emp_image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)

res_stat_CHOICES = (
    ('prod', 'PRODUCTION'),
    ('eng', 'ENG-ONLY'),
    ('cal', 'Out of Cal'),
    ('down', 'Resource-Down')
)
class Resources(models.Model):
    resource = models.CharField(max_length=25, blank=False, unique=True)
    status = models.CharField(max_length=25, choices=res_stat_CHOICES, default='prod')
    res_image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100)
