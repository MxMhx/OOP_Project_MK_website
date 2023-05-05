class Order:
    id_count = 0
    def __init__(self, address , total_cost, Status):
        self.__id = Order.id_count
        self.__shipping_Address = address
        self.__total_Cost = total_cost
        self.__status = Status
        self.__payment = None
        Order.id_count += 1

    def make_payment(self, payment):
        self.__payment = payment

    def get_payment(self):
        return self.__payment