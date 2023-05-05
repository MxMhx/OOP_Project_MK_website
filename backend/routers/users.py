from fastapi import APIRouter, Depends
from models.user import Customer, Admin, Account
import sys

sys.path.append('/backend/')
from data import mk

router = APIRouter(prefix="/user", tags=['user'])


mk.add_user(Customer("Kantinan","0994448535", "19-09-2003", Account("ohm@gmail.com","123456")))
mk.add_user(Customer("Aom","0656548954", "07-08-2000", Account("aom@gmail.com","123456"),"Thailand"))
mk.add_user(Admin("admin","0945453453", "24-01-2002",Account("admin@gmail.com","1")))

@router.get("/list")
def read_user_list():
    return mk.get_all_user()

@router.get("/current")
def get_current_user(name: str):
    return [mk.get_user(name), mk.get_user(name).get_account()]

@router.post("/edit")
def edit_profile(data: dict):
    username_d = data["username"]
    name_d = data["name"]
    phone_d = data["phone"]
    birthday_d = data["birthday"]
    address_d = data["address"]
    mk.get_user(username_d).edit_profile(name_d, phone_d, birthday_d, address_d)
    return mk.get_user(username_d)._name if name_d == ""  else mk.get_user(name_d)._name
