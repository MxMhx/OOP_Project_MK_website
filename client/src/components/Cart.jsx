import axios from "axios";
import React, { useContext } from "react";
import AuthContext from "../context/auth";

export default function Cart(props) {
  const { cookies } = useContext(AuthContext);

  const handleRemoveItem = async (item) => {
    axios
      .delete(`/cart/remove_cart_item/${item.product.name}`, {
        params: { name: cookies.token },
      })
      .then(() => window.location.reload());
  };

  const handleEditItem = async (item, method) => {
    item.quantity > 1
      ? axios
          .put(`/cart/add_quantity_cart_item/${item.product.name}`, {
            name: cookies.token,
            quantity: method === "plus" ? 1 : -1,
          })
          .then(() => window.location.reload())
      : handleRemoveItem(item);
  };

  const handleCheckOut = () => {};
  return (
    <div className="cart text-darkgray w-[30%] shadow-slate-50 shadow-md fixed z-10 bg-white right-0 top-[140px]">
      <div className="flex bg-[#9C0010] px-3 py-3 text-white text-xl font-bold justify-between items-center">
        Your Order
        <button
          className="px-2 mx-3 cursor-pointer"
          onClick={props.handleClose}
        >
          &gt;
        </button>
      </div>
      {props.cart.cart_items.map((item, index) => {
        return (
          <div
            className="flex px-5 py-3 justify-between items-center"
            key={index}
          >
            <img
              src="https://www.mk1642.com/getattachment/f2af6d3f-b7aa-40bd-8de1-e2ee113575de/4131.aspx"
              width={70}
              alt="food"
            />
            <h1 className="w-1/4">{item.product.name}</h1>
            <div className="flex items-center">
              <button
                className="border px-2 mx-3 rounded-full"
                onClick={() => handleEditItem(item, "minus")}
              >
                -
              </button>
              <p id="quantity">{item.quantity}</p>
              <button
                className="border px-2 mx-3 rounded-full"
                onClick={() => handleEditItem(item, "plus")}
              >
                +
              </button>
            </div>
            <p>{item.sub_cost} .-</p>
          </div>
        );
      })}
      <div className="flex px-5 py-3 justify-between items-center font-semibold text-black">
        <h1>Total :</h1>
        <p>{props.cart.total_cost === null ? 0 : props.cart.total_cost} .-</p>
      </div>
      <div className="flex px-4 py-3 justify-center items-center">
        <button
          className="flex bg-red text-white px-4 py-2 rounded-md hover:shadow-md items-center justify-center"
          onClick={handleCheckOut}
        >
          ✓ Checkout
        </button>
      </div>
    </div>
  );
}
