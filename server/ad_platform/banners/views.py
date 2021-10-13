from django.shortcuts import render

from django_filters import rest_framework as filters
from rest_framework import viewsets, generics

from rest_framework import permissions

from .models import (Banner, Campaign, Hour)

from .serializers import (BannerSerializer, CampaignSerializer,
                          HourSerializer)

class BannerViewSet(viewsets.ModelViewSet):
    """
    The class is responsible for all the CRUD operations for Banners
    """
    queryset = Banner.objects.all().order_by('name')
    serializer_class = BannerSerializer

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        """
        queryset = Banner.objects.all()
        campaignId = self.request.query_params.get('campaign')
        if campaignId is not None:
            queryset = queryset.filter(campaign=campaignId)
        return queryset

class CampaignViewSet(viewsets.ModelViewSet):
    """
    The class is responsible for all the CRUD operations for Campaign
    """
    queryset = Campaign.objects.all().order_by('name')
    serializer_class = CampaignSerializer

class HourViewSet(viewsets.ModelViewSet):
    """
    The class is responsible for all the CRUD operations for Hour
    """
    queryset = Hour.objects.all().order_by('value')
    serializer_class = HourSerializer
