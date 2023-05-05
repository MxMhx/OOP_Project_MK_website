import axios from "axios";
import React, { useContext, useState } from "react";
import AuthContext from "../context/auth";

export default function Cart(props) {
  const { cookies } = useContext(AuthContext);

  const handleEditItem = async (item, method) => {
    props.setIsEdit(true);
    item.quantity > 1 || method === "plus"
      ? axios
          .put("/cart/edit_quantity_cart_item", {
            name: cookies.token,
            product: item.product.name,
            quantity: method === "plus" ? 1 : -1,
          })
          .then(() => props.setIsEdit(false))
      : axios
          .post("/cart/remove_cart_item", {
            name: cookies.token,
            product: item.product.name,
          })
          .then(() => props.setIsEdit(false));
  };

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
            <img src={item.product.image_url} width={70} alt="food" />
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
        {props.cart.amount > 0 && (
          <button
            className="flex bg-red text-white px-4 py-2 rounded-md hover:shadow-md items-center justify-center"
            onClick={props.handleCheckOut}
            disabled={props.isLoading}
          >
            ✓ Checkout
          </button>
        )}
      </div>
    </div>
  );
}
