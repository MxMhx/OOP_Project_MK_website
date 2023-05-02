import jsons
class ProductCategory():
    def __init__(self, name, image_url):
        self.name = name
        self.image_url = image_url
        self.products = []
    
    def add_product(self, product):
        self.products.append(product)

    def get_product(self, name):
        for product in self.products:
            if product.name == name:
                return product

class Product():
    id_count = 1
    def __init__(self, name, image_url, price, description, calories, type):
        self.id = Product.id_count
        self.name = name
        self.image_url = image_url
        self.price = price
        self.description = description
        self.calories = calories
        self.type = type
        self.option = []
        Product.id_count += 1
    
    def add_product_option(self, option_product):
        self.option_production.append(option_product)

class Product_Option():
    def __init__(self, name, image_url):
        self.name = name
        self.image_url = image_url

class Cart_item():
    def __init__(self, product, quantity, sub_cost):
        self.product = product
        self.quantity = quantity
        self.sub_cost = sub_cost

class Cart():
    def __init__(self):
        self.amount = 0
        self.cart_items = []
        self.total_cost = 0
    
    def add_cart_item(self, product, quantity):
        cart_item = Cart_item(product, quantity, product.price * quantity)
        self.cart_items.append(cart_item)
        self.calculate_cost()
        self.amount = len(self.cart_items)

    def get_cart_item(self, name):
        for item in self.cart_items:
            if item.product.name == name:
                return item

    def calculate_cost(self):
        self.total_cost = 0
        for item in self.cart_items:
            self.total_cost += item.sub_cost

    def increase_quantity(self, name, quantity):
        for item in self.cart_items:
            if item.product.name == name:
                item.quantity += quantity
                item.sub_cost += quantity * item.product.price
                self.calculate_cost()
    
    def remove_cart_item(self, name):
        for item in self.cart_items:
            if item.product.name == name:
                self.cart_items.remove(item)
        self.calculate_cost()
        self.amount = len(self.cart_items)

    def clear_cart(self):
        self.amount = 0
        self.cart_items = []
        self.total_cost = 0