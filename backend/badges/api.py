from rest_framework import viewsets
from .models import Badge
from .serializers import BadgeSerializer

class BadgesViewSet(viewsets.ModelViewSet):
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer