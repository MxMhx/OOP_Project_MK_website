from typing import Annotated
from fastapi import APIRouter, Depends
from models.user import Customer, Admin, Account
import sys

sys.path.append('/backend/')
from data import mk

router = APIRouter(prefix="/user", tags=['user'])


mk.add_user(Customer("Ohm","0994448535",Account("ohm@gmail.com","123456"),"Japan"))
mk.add_user(Admin("Tar","0945453453",Account("tar@gmail.com","123456")))

@router.get("/list")
def read_user_list():
    return mk.get_all_user()

@router.get("/current")
async def get_current_user(name: str):
    return mk.get_user(name)
