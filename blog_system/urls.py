#-*- coding: UTF-8 -*-
"""
Created on 2017年4月16日

@author: nianshi
"""

from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from blog_system.view import login_views
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    url(r'^regist/$', login_views.get_valid_picture),
    url(r'^obtain-auth-token/$', obtain_auth_token),
]

urlpatterns = format_suffix_patterns(urlpatterns)