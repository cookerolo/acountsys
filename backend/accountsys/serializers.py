from django.db.models import Sum
from rest_framework import serializers

from .models import Transaction

#Transaction Serializer
class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

    #Amount validation to avoid negative Total
    def validate_amount(self, value):
        total_amount = Transaction.objects.all().aggregate(Sum('amount'))['amount__sum'] or 0
        if (-value > total_amount):
            raise serializers.ValidationError("Your total amount is less than the required transaction!")
        return value

