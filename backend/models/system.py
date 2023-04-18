from .user import *
class MkDelivery():
    def __init__(self):
        self.__user_list = []
        self.__category_list = []
        self.__location_list = []

    def add_user(self, user):
        self.__user_list.append(user)

    def add_category(self, category):
        self.__category_list.append(category)

    def add_location(self, location):
        self.__location_list.append(location)

    def search_location(self, locate):
        locations = []
        for location in self.__location_list:
            if locate in location:
                locations.append(location)
        return locations

    def get_all_category(self):
        return self.__category_list
    
    def get_all_user(self):
        return self.__user_list
    
    def get_category(self, name):
        for p in self.__category_list:
            if p.name == name:
                return p
    
    def get_user(self, name):
        if "@" in name:
            for u in self.__user_list:
                if u.get_account().get_email() == name:
                    return u
        else:
            for u in self.__user_list:
                if u.get_name() == name:
                    return u
        