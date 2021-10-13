from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

class Hour(models.Model):
    value = models.IntegerField(null=True, validators=[MaxValueValidator(23), MinValueValidator(0)])

class Campaign(models.Model):
    name = models.TextField(null=True)
    activeTimes = models.ManyToManyField(Hour, related_name='hour', blank=True)

class Banner(models.Model):
    name = models.TextField(null=True)
    text = models.TextField(null=True)
    campaign = models.ManyToManyField(Campaign, related_name='campaign', blank=True)
