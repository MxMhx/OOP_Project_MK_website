from fastapi import APIRouter
from models.user import Customer, Account
import sys
import jsons
sys.path.append('/backend/')
from data import mk

SECRET_KEY = "fUjXnZr4u7x!A%D*G-KaPdSgVkYp3s5v"
ALGORITHM = "HS256"

router = APIRouter(prefix="/auth", tags=['auth'])

@router.post("/register")
async def register(data: dict)->dict:
    name_d = data["name"]
    email_d = data["email"]
    password_d = data["password"]
    phone_d = data["phone"]
    mk.add_user(Customer(name_d, phone_d, Account(email_d, password_d)))
    user = mk.get_user(name_d)
    dt = {}
    dt[user.id] = user
    return {"Data": dt}

@router.post("/login")
def login(data: dict):
    email_d = data["email"]
    password_d = data["password"]
    user = mk.get_user(email_d)
    if user is None: return {"status":"Login Failed"}
    if user.get_account().get_password() != password_d: return {"status":"Login Failed"}
    else:
        return user._name