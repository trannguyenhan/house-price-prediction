from flask import Flask
from flask_restful import Resource, Api

from data_function import DataFunction
from models.data import Data

app = Flask(__name__)
api = Api(app)

@app.route("/get-data")
def get_data():
    data_func = DataFunction()
    
    return {
        "is_dinning_room": {
            "True": data_func.get_mean_if('price', 'is_dinning_room', "True"),
            "False": data_func.get_mean_if('price', 'is_dinning_room', "False")
        },
        "is_kitchen": {
            "True": data_func.get_mean_if('price', 'is_kitchen', "True"),
            "False": data_func.get_mean_if('price', 'is_kitchen', "False")
        },
        "is_terrace": {
            "True": data_func.get_mean_if('price', 'is_terrace', "True"),
            "False": data_func.get_mean_if('price', 'is_terrace', "False")
        },
        "is_car_park": {
            "True": data_func.get_mean_if('price', 'is_car_park', "True"),
            "False": data_func.get_mean_if('price', 'is_car_park', "False")
        },
        "type": {
            "Nhà mặt tiền": data_func.get_mean_if('price', 'type', "Nhà mặt tiền"),
            "Nhà trong hẻm": data_func.get_mean_if('price', 'type', "Nhà trong hẻm")
        },
        "city": {
            "Hà Nội": data_func.get_mean_if('price', 'city', "Hà Nội"),
            "Hồ Chí Minh": data_func.get_mean_if('price', 'city', "Hồ Chí Minh")
        },
        "district": {
            "Ngoại thành": data_func.get_mean_if('price', 'district', "Ngoại thành"),
            "Nội thành": data_func.get_mean_if('price', 'district', "Nội thành")
        },
        "bedroom_number": data_func.get_mean_group_by('price', 'bedroom_number'),
        "floor_number": data_func.get_mean_group_by('price', 'floor_number'),
        "area": {
            "20-30": data_func.get_mean_if_range('price', 'area', 20, 30),
            "30-40": data_func.get_mean_if_range('price', 'area', 30, 40),
            "40-50": data_func.get_mean_if_range('price', 'area', 40, 50),
            "50-60": data_func.get_mean_if_range('price', 'area', 50, 60),
            "60-70": data_func.get_mean_if_range('price', 'area', 60, 70),
            "70-80": data_func.get_mean_if_range('price', 'area', 70, 80),
            "80-90": data_func.get_mean_if_range('price', 'area', 80, 90),
            "90-100": data_func.get_mean_if_range('price', 'area', 90, 100),
            "100-200": data_func.get_mean_if_range('price', 'area', 100, 200)
        }
    }

@app.route("/predict")
def home():
    pass

if __name__ == '__main__':
    app.run(debug=True)