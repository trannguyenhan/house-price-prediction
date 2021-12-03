# -*- coding: utf-8 -*-
import scrapy
from data_price.items import DataPriceItem
from datetime import date, timedelta
from bs4 import BeautifulSoup

class AlonhadatSpider(scrapy.Spider):
    name = 'alonhadat'
    allowed_domains = ['alonhadat.com.vn']
    start_urls = ['http://alonhadat.com.vn/']

    def start_requests(self):
        # urls = ["https://alonhadat.com.vn/can-ban-nha.htm"]

        pages = []
        # pages = ['https://alonhadat.com.vn/can-ban-nha.htm']
        for i in range(1, 501):
            domain = 'https://alonhadat.com.vn/can-ban-nha/trang-{}.htm'.format(i)
            pages.append(domain)

        for page in pages:
            yield scrapy.Request(url=page, callback=self.parse_link)

        # for url in urls:
        #     yield scrapy.Request(url=url, callback=self.parse_link)

    def parse_link(self, response):
        for i in range(1, 21):
            str = '#left > div.content-items > div:nth-child({}) > div:nth-child(1) > div.ct_title > a::attr(href)'.format(i)
            link = response.css(str).extract_first()
            link = 'https://alonhadat.com.vn/' + link

            yield scrapy.Request(url=link, callback=self.parse)

    def parse(self, response, **kwargs):
        item = DataPriceItem()
        item['price'] = self.extract(response, '#left > div.property > div.moreinfor > span.price > span.value')

        item['description'] = self.extract(response, '#left > div.property > div.detail.text-content')
        item['address'] = self.extract(response, '#left > div.property > div.address > span.value')
        item['area'] = self.extract(response, '#left > div.property > div.moreinfor > span.square > span.value')
        item['start_date'] = self.extract(response, '#left > div.property > div.title > span', 'start_date')
        item['end_date'] = None

        result_table = self.extract_table(response.css('table').get())
        item['floor_number'] = result_table[0]
        item['bedroom_number'] = result_table[1]
        item['is_dinning_room'] = result_table[2]
        item['is_kitchen'] = result_table[3]
        item['is_terrace'] = result_table[4]
        item['is_car_pack'] = result_table[5]
        item['is_owner'] = result_table[6]
        item['type'] = result_table[7]
        item['direction'] = result_table[8]
        item['street_in_front_of_house'] = result_table[9]
        item['width'] = result_table[10]
        item['height'] = result_table[11]
        item['law'] = result_table[12]

        yield item


    def extract(self, response, query, para=None):
        query += "::text"
        model = response.css(query).extract_first()

        if model is not None:
            # start_date and end_date, convert string => now datetime
            if para == 'start_date' or para == 'end_date':
                now = date.today().strftime("%d/%m/%Y")
                pre = (date.today() - timedelta(1)).strftime("%d/%m/%Y")
                return model.replace("Hôm qua", pre).replace("Hôm nay", now)

        return model

    def extract_table(self, data):
        soup = BeautifulSoup(data, 'lxml')
        result = soup.findAll('td')

        floor_number = result[21].text

        bedroom_number = result[27].text

        is_dinning_room = result[5].text
        if is_dinning_room == "---":
            is_dinning_room = False
        else:
            is_dinning_room = True

        is_kitchen = result[11].text
        if is_kitchen == "---":
            is_kitchen = False
        else:
            is_kitchen = True

        is_terrace = result[17].text
        if is_terrace == "---":
            is_terrace = False
        else:
            is_terrace = True

        is_car_pack = result[23].text
        if is_car_pack == "---":
            is_car_pack = False
        else:
            is_car_pack = True

        is_owner = result[29].text
        if is_owner == "---":
            is_owner = False
        else:
            is_owner = True

        type = result[13].text
        direction = result[3].text
        street_in_front_of_house = result[9].text
        width = result[19].text
        height = result[25].text
        law = result[15].text

        return [floor_number, bedroom_number, is_dinning_room, is_kitchen, is_terrace, is_car_pack,
                is_owner, type, direction, street_in_front_of_house, width, height, law]
