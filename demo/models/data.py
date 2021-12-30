class Data: 
    def __init__(self,
        price, 
        area, 
        floor_number, 
        bedroom_number, 
        is_dinning_room,
        is_kitchen,
        is_terrace,
        is_car_park,
        type,
        direction,
        street_in_front_of_house,
        width,
        height,
        city,
        district):
        
        self.price = price
        self.area = area
        self.floor_number = floor_number
        self.bedroom_number = bedroom_number
        self.is_dinning_room = is_dinning_room
        self.is_kitchen = is_kitchen
        self.is_terrace = is_terrace
        self.is_car_park = is_car_park
        self.type = type
        self.direction = direction
        self.street_in_front_of_house = street_in_front_of_house
        self.width = width
        self.height = height
        self.city = city
        self.district = district
    
    def to_string(self):
        return "Home in" + self.city + ", " + self.district + " have area " + self.area + "is price" + str(self.price)