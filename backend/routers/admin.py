from fastapi import APIRouter
from models.product import ProductCategory, Product
from models.user import Customer,  Account
import sys

sys.path.append('/backend/')
from data import mk

router = APIRouter(prefix="/admin", tags=['admin'])

@router.post("/addcategory")
def add_category(data: dict):
    name_d = data["name"]
    imageUrl_d = data["imageUrl"]
    mk.add_category(ProductCategory(name_d,imageUrl_d))
    return mk.get_category(name_d)

@router.post("/addproduct")
def add_product(data: dict):
    category_d = data["category"]
    name_d = data["name"]
    imageUrl_d = data["imageUrl"]
    price_d = data["price"]
    description_d = data["description"]
    calories_d = data["calories"]
    type_d = data["type"]
    mk.get_category(category_d).add_product(Product(name_d, imageUrl_d, price_d, description_d, calories_d, type_d))
    return mk.get_category(category_d).get_product(name_d)

@router.post("/adduser")
def add_user(data: dict):
    name_d = data["name"]
    email_d = data["email"]
    password_d = data["password"]
    phone_d = data["phone"]
    birthday_d = data["birthday"]
    mk.add_user(Customer(name_d, phone_d, birthday_d, Account(email_d, password_d)))
    return mk.get_user(name_d)