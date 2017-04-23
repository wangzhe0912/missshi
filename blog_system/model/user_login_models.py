# -*- coding: utf-8 -*-
"""
#该文件主要表示用户信息登录表
"""

from django.db import models
import datetime

class SignupValid(models.Model):
    """
    #注册时验证码信息
    """
    picture_route = models.CharField(max_length=200)
    true_value = models.CharField(max_length=10)
    create_time = models.DateTimeField(default=datetime.datetime.now())
    class Meta:
        ordering = ('create_time',)
    
    
    
    