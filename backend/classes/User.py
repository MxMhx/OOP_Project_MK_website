from classes.product import Cart

class Account:
    def __init__(self, id, email, password):
        self.id = id
        self.email = email
        self.password = password

class User:
    def __init__(self, name, phone, email, password):
        self.name = name
        self.phone = phone
        self.email = email
        self.password = password

class Customer(User):
    def __init__(self, name, phone, email, password, address):
        super().__init__(name, phone, email, password)
        self.address = address
        self.cart = Cart()

    def create_cart_item(self, product, quantity):
        self.cart.add_cart_item(product, quantity)

class Admin(User):
    def __init__(self, name, phone, email, password):
        super().__init__(name, phone, email, password)

    def add_product():
        pass

    
