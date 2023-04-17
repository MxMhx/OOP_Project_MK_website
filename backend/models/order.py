class Order:
    def __init__(self, Total_Cost, Status, Payment_Status, account):
        self._Shipping_Address = account._Shipping_Address
        self._Total_Cost = Total_Cost
        self._Status = Status
        self._Payment_Status = Payment_Status
        self._User_Id = account._Id

    def __str__(self):
        return self._User_Id