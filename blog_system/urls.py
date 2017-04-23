#-*- coding: UTF-8 -*-
"""
Created on 2017年4月16日

@author: nianshi
"""

from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from blog_system.view import login_views
from blog_system.view.user_viewset import UserViewSet



router = DefaultRouter()
router.register(r'users', UserViewSet)
urlpatterns = router.urls

urlpatterns += [
    url(r'^regist/$', login_views.get_valid_picture),
    url(r'^login/$', login_views.login),
    url(r'^obtain-auth-token/$', csrf_exempt(obtain_auth_token)),
]
