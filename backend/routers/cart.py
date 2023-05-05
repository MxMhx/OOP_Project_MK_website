from fastapi import APIRouter, HTTPException
from models.order import Order
import sys

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
    cart = mk.get_user(name_d).get_cart()
    if cart.get_cart_item(product_d) != None:
        cart.edit_quantity(product_d, quantity_d)
    else:
        cart.add_cart_item(mk.get_category(category_d).get_product(product_d), quantity_d)
    return cart.get_cart_item(product_d)

@router.put("/edit_quantity_cart_item")
async def edit_quantity_product(data: dict):
    name_d = data["name"]
    product_d = data["product"]
    quantity_d = data["quantity"]
    mk.get_user(name_d).get_cart().edit_quantity(product_d, quantity_d)

    return mk.get_user(name_d).get_cart()

@router.post("/remove_cart_item")
async def remove_cart_item(data: dict):
    name_d = data["name"]
    product_d = data["product"]
    mk.get_user(name_d).get_cart().remove_cart_item(product_d)

    return mk.get_user(name_d).get_cart()
