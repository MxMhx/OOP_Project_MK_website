import sys
sys.path.append('/backend/')

from fastapi import APIRouter
from models.order import Order 
from models.payment import Cash, Credit_card
import datetime
from data import mk

router = APIRouter(prefix="/order", tags=['order'])

@router.get("/")
def get_order(name: str, id: int):
    return mk.get_user(name).get_order(id)

@router.get("/all_order")
def get_all_order(name: str):
    return mk.get_user(name).get_all_order()

@router.post("/create_order")
async def create_order(data: dict):
    username_d = data["username"]
    user = mk.get_user(username_d)
    address = user.get_address()
    cart = user.get_cart()
    total_cost = cart.total_cost
    total_cost += 50 # add shipping cost

    order = Order(address, total_cost, "Pending")
    user.create_order(order)
    cart.clear_cart()

    return order

@router.post("/cash")
async def cash_make_payment(data: dict):
    username_d = data["username"]
    orderid_d = data["orderid"]
    total_cost_d = data["totalCost"]
    print(orderid_d)
    mk.get_user(username_d).get_order(orderid_d).make_payment(Cash("PAID", datetime.datetime.now().strftime("%x"), orderid_d, total_cost_d))
    return mk.get_user(username_d).get_order(orderid_d).get_payment()

@router.post("/credit")
async def credit_make_payment(data: dict):
    username_d = data["username"]
    orderid_d = data["orderid"]
    total_cost_d = data["totalCost"]
    first_name_d = data["firstname"]
    last_name_d = data["lastname"]
    card_number_d = data["cardNumber"]
    cvv_d = data["cvv"]
    exp_d = data["exp"]
    mk.get_user(username_d).get_order(orderid_d).make_payment(Credit_card("PAID", datetime.datetime.now().strftime("%x"), orderid_d, total_cost_d, first_name_d, last_name_d, card_number_d, cvv_d, exp_d))
    return mk.get_user(username_d).get_order(orderid_d).get_payment()