import jsons
class ProductCategory():
    def __init__(self, name, image_url):
        self.name = name
        self.image_url = image_url
        self.product = []
    
    def add_product(self, product):
        self.product.append(product)

    def get_product(self, id):
        for product in self.product:
            if product.id == id:
                return product

class Product():
    id_count = 0
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
    def __init__(self,product,quantity):
        self.product = product
        self.quantity = quantity

class Cart():
    def __init__(self):
        self.cart_items = []
        self.total_cost = 0
        self.shipping_cost = 0
    
    def add_cart_item(self, product, quantity):
        cart_item = Cart_item(product, quantity)
        self.cart_items.append(cart_item)
        self.calculate_cost(cart_item)

    def remove_item(self):
        pass

    def calculate_cost(self, cart_item):
        self.total_cost += cart_item.product.price * cart_item.quantity