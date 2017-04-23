#-*- coding: UTF-8 -*-
"""
Created on 2017年4月23日

@author: wangzhe12
"""
from rest_framework import viewsets
from rest_framework.response import Response
from blog_system.model.user_login_model import UserLogin
from blog_system.manager.user_login_manager import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = UserLogin.objects.all()
    serializer_class = UserSerializer

    def retrieve(self, request, pk=None):
        if pk == 'i':
            return Response(UserSerializer(request.user,
                context={'request':request}).data)
        return super(UserViewSet, self).retrieve(request, pk)
