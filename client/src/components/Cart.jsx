import React from "react";

export default function Cart(props) {
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
      {props.cart.cart_items.map((item) => {
        return (
          <div className="flex px-5 py-3 justify-between items-center">
            <img
              src="https://www.mk1642.com/getattachment/f2af6d3f-b7aa-40bd-8de1-e2ee113575de/4131.aspx"
              width={70}
              alt="food"
            />
            <h1 className="w-1/4">{item.product.name}</h1>
            <div className="flex items-center">
              <button className="border px-2 mx-3 rounded-full" onClick={minus}>
                -
              </button>
              <p id="quantity">{item.quantity}</p>
              <button className="border px-2 mx-3 rounded-full" onClick={plus}>
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
          onClick={checkout}
        >
          ✓ Checkout
        </button>
      </div>
    </div>
  );
}

//create checkout funcion with api
function checkout() {
  console.log("checkout");
  // console.log("cart");
}
function plus() {
  var quantity = parseInt(document.getElementById("quantity").innerHTML);
  quantity += 1;
  document.getElementById("quantity").innerHTML = quantity;
}

function minus() {
  var quantity = parseInt(document.getElementById("quantity").innerHTML);
  quantity -= 1;
  document.getElementById("quantity").innerHTML = quantity <= 1 ? 1 : quantity;
}
