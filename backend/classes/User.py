from classes.product import *
from enum import Enum

class Account:
    def __init__(self, email, password, status = "ACTIVE"):
        self._email = email
        self._password = password
        self._status = status

    def get_email(self):
        return(self._email)
    
    def get_password(self):
        return(self._password)
        

class AccountStatus(Enum):
    ACTIVE = 1
    BLOCKED = 2
    BANNED = 3
    UNKNOWN = 4

class User:
    id_count = 0
    def __init__(self, name, phone, account, role):
        self.id = User.id_count
        self._name = name
        self._phone = phone
        self._accounts = account
        self._role = role
        User.id_count += 1

    def get_name(self):
        return self._name
    
    def get_account(self):
        return self._accounts
    
    def edit_profile(self):
        pass

class Customer(User):
    def __init__(self, name, phone, account, address = None, role = "customer"):
        super().__init__(name, phone, account, role)
        self.address = address
        self.__cart = Cart()

    def create_cart_item(self, product, quantity):
        self.__cart.add_cart_item(product, quantity)

    def get_cart(self):
        return self.__cart

class Admin(User):
    def __init__(self, name, phone, account, role = "admin"):
        super().__init__(name, phone, account, role)

    def add_product():
        pass

    def delete_product():
        pass

    
