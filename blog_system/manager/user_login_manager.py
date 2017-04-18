#-*- coding: UTF-8 -*-
"""
#用户登录信息相关的Serializers
"""
from rest_framework import serializers
from blog_system.model.user_login_models import SignupValid
        
        
class SignUpValidSerializer(serializers.Serializer):
    """
    #涉及到注册相关的序列化
    """
    id = serializers.IntegerField(read_only=True)
    picture_route = serializers.CharField(max_length=200)
    true_value = serializers.CharField(max_length=10)
    create_time = serializers.DateTimeField(required=False)
    
    def create(self, validated_data):
        """
        #将数据保存为一条记录
        """
        return SignupValid.objects.create(**validated_data)
        