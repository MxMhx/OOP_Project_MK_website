import enum
class payment :
    def __init__(self,Status,Date_time,Transaction_id):
        self.Status = Status
        self.Date_time = Date_time
        self.Transaction_id = Transaction_id
    def return_transaction_id() :
        pass
    pass

class payment_method :
    pass

class cash(payment) :
    def __init__(self,Cash_Tendered) :
        self.Cash_Tendered = Cash_Tendered
    pass

class credit_debit_card(payment) :
    def __init__(self,Card_number,Name,Cvv) :
        self.Card_number = Card_number
        self.Name = Name
        self.Cvv = Cvv
    pass

class PaymentStatus(enum) :
    UNPAID, COMPLETED, DECLINED, CANCELLED \
    = 1, 2, 3, 4