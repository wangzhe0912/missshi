# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.apps import AppConfig


class BlogSystemConfig(AppConfig):
    name = 'blog_system'
    def ready(self):
        from util import signals