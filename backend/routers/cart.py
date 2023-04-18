from fastapi import APIRouter, HTTPException
import sys
from models.order import Order

sys.path.append('/backend/')
from data import mk

router = APIRouter(prefix="/cart", tags=['cart'])

@router.get("/get")
def read_cart(name: str):
    if not name:
        raise HTTPException(status_code=422, detail="not found")
    
    return mk.get_user(name).get_cart()

@router.post("/add")
async def add_to_cart(data: dict):
    name_d = data["name"]
    category_d = data["category"]
    product_d = data["product"]
    quantity_d = data["quantity"]
    mk.get_user(name_d).get_cart().add_cart_item(mk.get_category(category_d).get_product(product_d), quantity_d)
    return mk.get_user(name_d).get_cart().get_cart_item(product_d)

@router.put("/add_quantity_cart_item/{product_name}")
async def add_quantity_product(product_name: str, data: dict):
    name_d = data["name"]
    quantity_d = data["quantity"]
    mk.get_user(name_d).get_cart().increase_quantity(product_name, quantity_d)

    return mk.get_user(name_d).get_cart()

@router.post("/remove_cart_item/{product_name}")
async def remove_cart_item(product_name: str, name: str):
    mk.get_user(name).get_cart().remove_cart_item(product_name)

    return mk.get_user(name).get_cart()


@router.post("/create_order")
async def create_order(data: dict) -> dict:
    username_d = data["username"]

    user = mk.get_user(username_d)
    address = user.get_address()
    cart = user.get_cart()

    total_cost = cart.total_cost
    total_cost += 50 # add shipping cost

    order = Order(address, total_cost, "Pending","Unpaid",username_d)
    user.add_order(order)

    return {"message": "Order created successfully!"}