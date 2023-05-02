from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import category, cart, users, auth, order, admin
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
app.include_router(admin.router)


@app.get("/")
def read_root():
    return {"Hello": "MK delivery"}

@app.post("/search_location")
async def search_location(data: dict)->dict:
    locate_d = data["locateName"]
    dt = mk.search_location(locate_d)
    return {"Data": dt}