class Order:
    def __init__(self, address , Total_Cost, Status, Payment_Status, name):
        self._Shipping_Address = address
        self._Total_Cost = Total_Cost
        self._Status = Status
        self._Payment_Status = Payment_Status
        self._Username = name

    def __str__(self):
        return self._User_Id