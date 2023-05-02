class Order:
    id_count = 0
    def __init__(self, address , total_cost, Status):
        self.__id = Order.id_count
        self._shipping_Address = address
        self._total_Cost = total_cost
        self._status = Status
        self._payment = None
        Order.id_count += 1

    def make_payment(self, payment):
        self._payment = payment

    def get_payment(self):
        return self._payment