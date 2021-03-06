#-*- coding: UTF-8 -*-
from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView

router = DefaultRouter()

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('blog_system.urls')),
    url(r'^', TemplateView.as_view(template_name='index.html')),
]
