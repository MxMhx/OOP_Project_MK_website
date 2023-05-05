from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import category, cart, users, auth, order
from models.user import *
from data import mk

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(category.router)
app.include_router(cart.router)
app.include_router(users.router)
app.include_router(auth.router)
app.include_router(order.router)


@app.get("/")
def read_root():
    return {"Hello": "MK delivery"}

@app.post("/search_location")
async def search_location(data: dict)->dict:
    locate_d = data["locateName"]
    dt = mk.search_location(locate_d)
    return {"Data": dt}

@app.post("/addcategory")
def add_category(data: dict):
    name_d = data["name"]
    imageUrl_d = data["imageUrl"]
    mk.add_category(ProductCategory(name_d,imageUrl_d))
    return mk.get_category(name_d)

@app.post("/addproduct")
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

@app.post("/adduser")
def add_user(data: dict):
    name_d = data["name"]
    email_d = data["email"]
    password_d = data["password"]
    phone_d = data["phone"]
    birthday_d = data["birthday"]
    mk.add_user(Customer(name_d, phone_d, birthday_d, Account(email_d, password_d)))
    return mk.get_user(name_d)

@app.delete("/removeuser")
def remove_user(name: str):
    mk.remove_user(name)
    return mk.get_all_user()