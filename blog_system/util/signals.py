#-*- coding: UTF-8 -*-
"""
Created on 2017年4月23日

@author: wangzhe12
作用：添加一个post_save信号处理程序，只要创建一个新的用户对象就创建一个Token对象。 
"""

from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

@receiver(post_save, sender=User)
def init_new_user(sender, instance, signal, created, **kwargs):
    if created:
        Token.objects.create(user=instance)