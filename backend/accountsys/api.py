from rest_framework import viewsets, permissions

from .models import Transaction
from .serializers import TransactionSerializer

#Transaction ViewSet
class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all().order_by('created_at')
    permission_classes = [permissions.AllowAny,]
    serializer_class = TransactionSerializer