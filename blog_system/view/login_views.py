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
from blog_system.manager.user_login_manager import SignUpValidSerializer, UserSerializer
from blog_system.model.user_login_models import UserLogin

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

@api_view(['POST'])
def login(request):
    """
    #登录
    """
    if request.method == 'POST':
        user_name = request.data["userName"]
        pwd = request.data["password"]
        password = []
        try:
            users = UserLogin.objects.get(name=user_name)
            password.append({"user":user_name, "password": users.password, "id": users.id})
        except:
            pass
        try:
            users = UserLogin.objects.get(email=user_name)
            password.append({"email":user_name, "password": users.password, "id": users.id})
        except:
            pass
        label = 0
        result = ''
        print password
        if password == []:
            print "123"
            result = 'no username'
        else:
            for element in password:
                if element["password"] == pwd:
                    label = 1
                    break
        if result != 'no username':
            if label == 0:
                result = "not match"
            else:
                result = 'correct'
        if result == 'correct':
            return Response(data={"message":"success"}, status=status.HTTP_200_OK)
        elif result == 'no username':
            return Response(data={"message":u"用户名不存在"}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response(data={"message":u"用户名和密码不匹配"}, status=status.HTTP_403_FORBIDDEN)