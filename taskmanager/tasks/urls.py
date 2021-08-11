from rest_framework import routers
from .api import TaskViewSet, FAQViewSet, ResourcesViewSet, EmployeesViewSet

router = routers.DefaultRouter()
router.register('api/tasks', TaskViewSet, 'tasks'),
router.register('api/FAQ', FAQViewSet, 'FAQ'),
router.register('api/Resources', ResourcesViewSet, 'Resources'),
router.register('api/Employees', EmployeesViewSet, 'Employees')

urlpatterns = router.urls