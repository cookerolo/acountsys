from rest_framework import routers
from .api import TransactionViewSet

router = routers.DefaultRouter()
router.register('api/transactions', TransactionViewSet, 'transactions')

urlpatterns = router.urls