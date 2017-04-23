#-*- coding: UTF-8 -*-
"""
Created on 2017年4月23日

@author: wangzhe12
"""
from rest_framework import viewsets
from rest_framework.response import Response
from django.contrib.auth.models import User
from blog_system.manager.user_login_manager import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def retrieve(self, request, pk=None):
        if pk == 'i':
            return Response(UserSerializer(request.user,
                context={'request':request}).data)
        return super(UserViewSet, self).retrieve(request, pk)
