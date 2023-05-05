from .user import *
class MkDelivery():
    def __init__(self):
        self.__user_list = []
        self.__category_list = []

    def add_user(self, user):
        self.__user_list.append(user)

    def add_category(self, category):
        self.__category_list.append(category)

    def get_all_category(self):
        return self.__category_list
    
    def get_all_user(self):
        return self.__user_list
    
    def get_category(self, name):
        for p in self.__category_list:
            if p.name == name:
                return p
    
    def get_user(self, name):
        for user in self.__user_list:
            if user.get_name() == name:
                return user
                
    def get_user_email(self, email):
        for user in self.__user_list:
            if user.get_account().get_email() == email:
                return user
            
    def remove_user(self, name):
        for user in self.__user_list:
            if user.get_name() == name:
                self.__user_list.remove(user)
        