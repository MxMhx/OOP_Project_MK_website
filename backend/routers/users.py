from typing import Annotated
from fastapi import APIRouter, Depends
from models.user import Customer, Admin, Account
import sys

sys.path.append('/backend/')
from data import mk

router = APIRouter(prefix="/user", tags=['user'])


mk.add_user(Customer("Ohm","0994448535", "19-09-2003", Account("ohm@gmail.com","123456"),"Japan"))
mk.add_user(Admin("admin","0945453453", "24-01-2002",Account("admin@gmail.com","1")))

@router.get("/list")
def read_user_list():
    return mk.get_all_user()

@router.get("/current")
async def get_current_user(name: str):
    return mk.get_user(name)
