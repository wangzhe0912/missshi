#-*- coding: UTF-8 -*-
"""
Created on 2017年4月18日

@author: nianshi
"""
import random
import string
import sys
import math
import time
from PIL import Image, ImageDraw, ImageFont, ImageFilter


def gene_text(number):
    """
    #获取随机数
    """
    source = list(string.letters)
    for index in range(0,10):
        source.append(str(index))
    return ''.join(random.sample(source, number))


def gene_line(draw, width, height):
    begin = (random.randint(0, width), random.randint(0, height))
    end = (random.randint(0, width), random.randint(0, height))
    linecolor = (255,0,0)
    draw.line([begin, end], fill = linecolor)


def gene_code(number=6, width=100, height=30):
    """
    #总函数
    """
    #获取随机数
    text = gene_text(number)
    #生成空图片
    bgcolor = (255,255,255)
    image = Image.new('RGBA', (width, height), bgcolor)
    draw = ImageDraw.Draw(image)
    font_path = './missshi/blog_system/util/TimesNewRoman.ttf'
    font = ImageFont.truetype(font_path, 25)
    #填充自付出啊
    font_width, font_height = font.getsize(text)
    fontcolor = (0,0,255)
    size = ((width - font_width) / number, (height - font_height) / number)
    draw.text(size, text, font= font, fill=fontcolor)
    #添加划线
    gene_line(draw, width, height)
    #进行扭曲
    new_size = (width + 20, height + 10)
    image = image.transform(new_size, Image.AFFINE, (1, -0.3, 0, -0.1 , 1, 0), Image.BILINEAR) 
    image = image.filter(ImageFilter.EDGE_ENHANCE_MORE)
    filename = str(time.time()).replace(".", "") + ".png"
    image.save('./missshi/blog_system/valid_picture/' + filename)
    return text, filename


if __name__ == "__main__":
    print gene_code()
    
    