from fastapi import APIRouter
from models.user import Customer, Account, User
import sys

sys.path.append('/backend/')
from data import mk

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
def login(data: dict)->dict:
    email_d = data["email"]
    password_d = data["password"]
    user = mk.get_user(email_d)
    if user is None: return {"status":"Login Failed"}
    if user.get_account().get_password() != password_d: return {"status":"Login Failed"}
    else:
        mk.set_verify_user(user)
        return {"status":"Login success", "user":mk.get_verify_user()}

@router.delete("/logout")
def logout():
    mk.set_verify_user(User("","",Account("",""),""))
    return {"status":"Logout Success"}