from .product import *
from enum import Enum
from .payment import *

class Account:
    def __init__(self, email, password):
        self.__email = email
        self.__password = password

    def get_email(self):
        return(self.__email)
    
    def get_password(self):
        return(self.__password)
        

class AccountStatus(Enum):
    ACTIVE = 1
    BLOCKED = 2
    BANNED = 3
    UNKNOWN = 4

class User:
    id_count = 0
    def __init__(self, name, phone, birthday, account, role):
        self.id = User.id_count
        self._name = name
        self._phone = phone
        self._accounts = account
        self._birthday = birthday
        self._role = role
        self.__cart = Cart()
        self.__order = []
        User.id_count += 1

    def get_name(self):
        return self._name
    
    def get_account(self):
        return self._accounts
    
    def edit_profile(self):
        pass

    def get_cart(self):
        return self.__cart
    
    def get_all_order(self):
        return self.__order
    
    def get_order(self, id):
        for order in self.__order:
            if order._Order__id == id:
                return order
    
    def create_order(self, order):
        self.__order.append(order)


class Customer(User):
    def __init__(self, name, phone, birthday, account, address = None, role = "customer"):
        super().__init__(name, phone, birthday, account, role)
        self._address = address

    def get_address(self):
        return self._address
    
    def edit_profile(self, name, phone, birthday, address):
        if name != "": self._name = name
        if phone != "": self._phone = phone
        if birthday != "": self._birthday = birthday
        if address != "": self._address = address

class Admin(User):
    def __init__(self, name, phone, birthday, account, role = "admin"):
        super().__init__(name, phone, birthday, account, role)