from django.urls import include, path
from rest_framework import routers
from banners import views

router = routers.DefaultRouter()
router.register(r'banners', views.BannerViewSet)
router.register(r'campaign', views.CampaignViewSet)
router.register(r'hours', views.HourViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]