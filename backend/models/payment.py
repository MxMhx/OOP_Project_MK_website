import enum
class payment :
    def __init__(self,Status,Date_time,Transaction_id, order):
        self.Status = Status
        self.Date_time = Date_time
        self.Transaction_id = Transaction_id
        self.total_cost = order._Total_Cost

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
