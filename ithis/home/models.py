from django.db import models

# Create your models here.

# class Customer(models.Model):
#     first_name = models.CharField(max_length=50)
#     last_name = models.CharField(max_length=50)
#     phone_number = models.BigIntegerField(unique=True)
#     email = models.EmailField(unique=True)
#     username = models.CharField(unique=True,max_length=50)
#     password = models.CharField(max_length=30)

#     class Meta:
#             db_table = 'Customer'
    
#     def __str__(self):
#         return self.username