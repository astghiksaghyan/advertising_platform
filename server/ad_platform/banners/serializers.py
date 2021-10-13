from rest_framework import serializers, generics
from .models import (Banner, Campaign, Hour)

class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"

class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = "__all__"

class HourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hour
        fields = "__all__"
