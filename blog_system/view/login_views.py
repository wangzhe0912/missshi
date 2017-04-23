# -*- coding: utf-8 -*-
"""
#关于用户注册、登录的相关views
"""
from rest_framework import status
from rest_framework import  renderers
from rest_framework.decorators import api_view
# from rest_framework.decorators import detail_route
from rest_framework.response import Response
from rest_framework.reverse import reverse

from blog_system.util import get_valid_picure
from blog_system.manager.user_login_manager import SignUpValidSerializer

@api_view(['GET'])
def get_valid_picture(request):
    """
    #获取验证码
    """
    if request.method == 'GET':
        text, filename = get_valid_picure.gene_code(6)
        dict_data = {"true_value": text, "picture_route": filename}
        serializer = SignUpValidSerializer(data=dict_data)
        if serializer.is_valid():
            serializer.save()
        else:
            return Response(data=serializer.data, status=status.HTTP_404_NOT_FOUND)
    return Response(data=serializer.data, status=status.HTTP_200_OK)
