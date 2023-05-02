class Payment :
    def __init__(self, status, date_time, transaction_id, total_cost):
        self.__status = status
        self.__date_time = date_time
        self.__transaction_id = transaction_id
        self.__total_cost = total_cost

class Cash(Payment) :
    def __init__(self, status, date_time, transaction_id, total_cost):
        super().__init__(status, date_time, transaction_id, total_cost)

class Credit_card(Payment) :
    def __init__(self, status, date_time, transaction_id, total_cost, first_name, last_name, card_number, cvv, exp):
        super().__init__(status, date_time, transaction_id, total_cost)
        self.__first_name = first_name
        self.__last_name = last_name
        self.__card_number = card_number
        self.__cvv = cvv
        self.__exp = exp
