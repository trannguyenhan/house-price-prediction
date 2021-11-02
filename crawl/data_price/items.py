# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class DataPriceItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    area = scrapy.Field()  # dien_tich \ double
    address = scrapy.Field()  # dia_chi \ string
    description = scrapy.Field()  # mo_ta \ string
    floor_number = scrapy.Field()  # so_lau (so_tang) \ int
    bedroom_number = scrapy.Field()  # so_phong_ngu \ int
    is_dinning_room = scrapy.Field()  # co_phong_an? \ boolean
    is_kitchen = scrapy.Field()  # co_bep? \ boolean
    is_terrace = scrapy.Field()  # co_san_thuong? \ boolean
    is_car_pack = scrapy.Field()  # co_cho_de_xe_hoi? \ boolean
    is_owner = scrapy.Field()  # chinh_chu? \ boolean
    start_date = scrapy.Field()  # ngay_dang_tin \ date || string
    end_date = scrapy.Field()  # ngay_ket_thuc \ date || string
    type = scrapy.Field()  # in('nha_mat_tien', 'nha_trong_hem') \ string
    direction = scrapy.Field()  # phuong_huong_nha (nam, bac, dong, tay) \ string
    street_in_front_of_house = scrapy.Field()  # do_rong_duong_truoc_nha \ int
    width = scrapy.Field()  # chieu_dai \ string
    height = scrapy.Field()  # chieu_rong \ string
    law = scrapy.Field()  # phap_ly \ string

    price = scrapy.Field()  # gia_nha \ double