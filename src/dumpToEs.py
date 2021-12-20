from elasticsearch import Elasticsearch
import time
from datetime import datetime
import pandas as pd
import glob
import json



class Elastic:

    def __init__(self,
                 host = "localhost",
                 port = 9200,
                 es = None,
                 index = "house-price"):
        self.host = host
        self.port = port
        self.es = es
        self.connect()
        self.index = index
        
    def connect(self):
        self.es = Elasticsearch([{'host': self.host, 'port': self.port}])
        if self.es.ping():
            print("ES connected successfully")
        else:
            print("Not connected")

    def create_index(self):
        if self.es.indices.exists(self.index):
            print("deleting '%s' index..." % (self.index))
            res = self.es.indices.delete(index=self.index)
            print(" response: '%s'" % (res))
            request_body = {
                "settings": {
                    "number_of_shards": 1,
                    "number_of_replicas": 0
                }
            }
            print("creating '%s' index..." % (self.index))
            res = self.es.indices.create(index=self.index, body=request_body, ignore=400)
            print(" response: '%s'" % (res))

    def push_to_index(self, message):
        try:
            response = self.es.index(
                index=index,
                doc_type="log",
                body=message
            )
            print("Write response is :: {}\n\n".format(response))
        except Exception as e:
            print("Exception is :: {}".format(str(e)))




if __name__ == '__main__':
    es_obj = Elastic()
    es_obj.create_index()
    for f in glob.glob('clean data/full.csv'):
        data = json.loads(pd.read_csv(f).to_json(orient='records'))
        for record in data:
            es_obj.push_to_index(record)
