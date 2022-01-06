import csv

from models.data import Data

class DataFunction:
    def __init__(self):
        self._list_data = []
        
        # read all data from csv file
        file = open('../src/clean data/visualize_data.csv', 'r')
        csvreader = csv.reader(file)
        self._header = next(csvreader)
        
        cnt = 0
        for row in csvreader: 
            data = Data(
                row[0],
                row[1],
                row[2],
                row[3],
                row[4],
                row[5],
                row[6],
                row[7],
                row[8],
                row[9],
                row[10],
                row[11],
                row[12],
                row[13],
                # row[14]
            )

            self._list_data.append(data)
            cnt += 1

        self._total = cnt
        self._dict = {
            "price": 0, 
            "area": 1, 
            "floor_number": 2, 
            "bedroom_number": 3, 
            "is_dinning_room": 4,
            "is_kitchen": 5,
            "is_terrace": 6,
            "is_car_park": 7,
            "type": 8,
            "direction": 9,
            "street_in_front_of_house": 10,
            "width": 11,
            # "height": 12,
            "city": 12,
            "district": 13
        }

    def get_all(self):
        return self._list_data
    
    # mean of list value
    # ex [1,2,3,4] => mean = (1 + 2 + 3 + 4) / 4 = 2.5
    def get_mean(self, prop):
        prop = self.check_prop(self, prop)
        i = self._dict[prop]
        
        sum = 0
        for item in self._list_data: 
            res = getattr(item, prop)
            
            try: 
                num = float(res)
            except: 
                return 0
            
            sum += num
        
        return sum / self._total
    
    # return list
    # [1,2,3,4]
    def get_list(self, prop, limit):
        prop = self.check_prop(prop)
        list = []

        if limit > self._total: 
            limit = self._total
        
        for i in range(0, limit): 
            item = self._list_data[i]
            res = getattr(item, prop)

            list.append(res)
        
        return list
    
    # return list with condition
    # [1,2,3,4] => return [1,2] (condition: prop_if = value_if)
    def get_mean_if(self, prop_target, prop_if, value_if):
        prop_target = self.check_prop(prop_target)

        sum = 0.0
        cnt = 0
        for item in self._list_data:    
            if(value_if in getattr(item, prop_if)):
                sum += float(getattr(item, prop_target))
                cnt += 1
        
        if cnt == 0: 
            return 0
        return sum / cnt

    # return list group by one prop
    def get_mean_group_by(self, prop_target, prop_group):
        prop_target = self.check_prop(prop_target)

        dict = {}
        dict_cnt = {}
        for item in self._list_data: 
            key = getattr(item, prop_group)
            
            if key.isnumeric(): 
                key = int(key)

            value = float(getattr(item, prop_target))

            if key not in dict: 
                dict[key] = value
                dict_cnt[key] = 1
            else: 
                dict[key] += value
                dict_cnt[key] += 1

        result = []
        for key in dict.keys(): 
            item = []
            item.append(key)
            item.append(dict[key] / dict_cnt[key])
            result.append(item)

        return result

    def get_mean_if_range(self, prop_target, prop_if, min_value, max_value):
        prop_target = self.check_prop(prop_target)

        sum = 0.0
        cnt = 0
        for item in self._list_data:    
            value = float(getattr(item, prop_if))
            if(value >= float(min_value) and value < float(max_value)):
                sum += float(getattr(item, prop_target))
                cnt += 1

        if cnt == 0: 
            return 0
        return sum / cnt


    # if prop not in dict return first prop is "price"
    def check_prop(self, prop):
        if prop not in self._dict: 
            prop = 'price'
        
        return prop
