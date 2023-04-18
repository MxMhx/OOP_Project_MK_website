from fastapi import APIRouter, HTTPException
import sys
from models.order import Order
from models.product import Cart


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

@router.delete("/remove_cart_item/{product_name}")
async def remove_cart_item(product_name: str, name: str):
    mk.get_user(name).get_cart().remove_cart_item(product_name)

    return mk.get_user(name).get_cart()


@router.post("/create_order")
async def create_order(order: Order):
    cart_items = Cart.get_items()
    total_price = sum(item.price for item in cart_items) + 50
    order.total_price = total_price
    order.status = "Pending"
    return {"message": "Order created successfully!", "order_details": order.dict()}