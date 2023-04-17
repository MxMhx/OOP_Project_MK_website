from fastapi import APIRouter
import sys

sys.path.append('/backend/')
from data import mk

router = APIRouter(prefix="/cart", tags=['cart'])

@router.get("/get")
def read_cart():
    return mk.get_verify_user().get_cart()

@router.post("/add")
async def add_to_cart(data: dict):
    category_d = data["category"]
    product_d = data["product"]
    quantity_d = data["quantity"]
    mk.get_verify_user().get_cart().add_cart_item(mk.get_category(category_d).get_product(product_d), quantity_d)
    return mk.get_verify_user().get_cart().get_cart_item(product_d)

@router.put("/add_quantity_cart_item/{product_name}")
async def add_quantity_product(product_name: str, data: dict):
    quantity_d = data["quantity"]
    mk.get_verify_user().get_cart().increase_quantity(product_name, quantity_d)

    return mk.get_verify_user().get_cart()

@router.delete("/remove_cart_item/{product_name}")
async def remove_cart_item(product_name: str):
    mk.get_verify_user().get_cart().remove_cart_item(product_name)

    return mk.get_verify_user().get_cart()