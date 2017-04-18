# -*- coding: utf-8 -*-
"""
#该文件主要表示用户信息登录表
"""

from django.db import models
import datetime

class UserLogin(models.Model):
    """
    #UserLogin表存放的是用户登录信息
    """
    is_valid_choice = ((item, item) for item in ("T", "F"))
    role_choice = ((item, item) for item in ("ADMIN", "NORMAL"))
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    create_time = models.DateTimeField()
    last_login = models.DateTimeField(default=None)
    email = models.EmailField()
    message = models.CharField(max_length=20)
    is_valid = models.CharField(choices=is_valid_choice, default="T", max_length=10)
    role = models.CharField(choices=role_choice, default="NORMAL", max_length=10)
    class Meta:
        ordering = ('create_time',)


class SignupValid(models.Model):
    """
    #注册时验证码信息
    """
    picture_route = models.CharField(max_length=200)
    true_value = models.CharField(max_length=10)
    create_time = models.DateTimeField(default=datetime.datetime.now())
    class Meta:
        ordering = ('create_time',)
    
    
    
    