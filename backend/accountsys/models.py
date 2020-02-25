from django.db import models

# Create your models here.
class Transaction(models.Model):
    description = models.CharField(max_length=120)
    amount = models.DecimalField(decimal_places=2, max_digits=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.description



