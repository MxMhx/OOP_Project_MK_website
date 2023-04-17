<<<<<<< HEAD
function Header() {
  var delivery = true;
  return (
    <div className="text-white font-kanit">
      <div className="bg-red flex justify-center">
        <div className="items-center flex w-full justify-between my-1 mx-6">
          <div className="lg:hidden item-center">
            <img
              src="https://www.mk1642.com/App_Themes/Source/images/ico/Group-2149.png"
              alt="menu"
            />
          </div>
          <div className="">
            <a href="/">
              <img src="/logo.png" alt="logo" className="h-12" />
            </a>
            <p className="hidden lg:block text-sm">
              สามารถสั่งอาหารได้ <strong>10:00 - 19:45 น.</strong>
            </p>
          </div>
          <div className="hidden lg:grid font-semibold w-1/3 place-items-center py-4 space-y-3">
            <h1 className="text-3xl">
              Welcome to <strong>MK Online Delivery</strong>
            </h1>
            <div className="flex">
              <div className="button-box flex">
                <div id="btnn" className="left-0"></div>
                <button
                  className="flex toggle-button text-sm justify-center"
                  onClick={leftClick}
                >
                  <img
                    src="../icon/delivery.png"
                    width={20}
                    className="mr-3"
                    alt="delivery-icon"
                  />
                  เดลิเวอรี่
                </button>
                <button
                  className="flex toggle-button text-sm justify-center"
                  onClick={rightClick}
                >
                  <img
                    src="../icon/shop.png"
                    width={20}
                    className="mr-3"
                    alt="shop-icon"
                  />
                  รับสินค้าที่ร้าน
                </button>
              </div>
            </div>
            {delivery ? (
              <div className="search-box flex w-full justify-between">
                <input
                  className="p-3 h-4 text-xs font-light w-full rounded-l-md"
                  type="text"
                  placeholder="ค้นหาสถานที่เพื่อตรวจสอบพื้นที่จัดส่ง"
                  autoComplete="off"
                />
                <div className="search-icon grid bg-gray rounded-r-md place-items-center w-8">
                  <a href="/">
                    <img src="/crosshair.png" alt="crosshair logo" width="13" />
                  </a>
                </div>
              </div>
            ) : (
              <select
                name="โปรดเลือกสาขา"
                className="bg-[#9C0010] w-1/3 text-xs"
              >
                <option value="01">ลาดกระบัง</option>
              </select>
            )}
          </div>
          <div className="">
            <a href="/login" className="hidden lg:block text-sm">
              เข้าสู่ระบบ/ลงทะเบียน
            </a>
            <div className="lg:flex items-center justify-end mt-1">
              <div className="relative">
                <img
                  src="https://www.mk1642.com/App_Themes/Source/images/ico/Group-1610.png"
                  alt="cart_logo"
                />
                <p className="absolute left-6 top-4 text-sm">0</p>
              </div>
              <p className="ml-5 font-semibold">0 .-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function leftClick() {
    var btn = document.getElementById("btnn");
    btn.style.left = "0";
    delivery = true;
    console.log(delivery);
  }

  function rightClick() {
    var btn = document.getElementById("btnn");
    btn.style.left = "50%";
    delivery = false;
    console.log(delivery);
  }
}

export default Header;
=======
import React, { useState, useEffect, useContext } from "react";
import Cart from "../components/Cart";
import axios from "axios";
import AuthContext from "../context/auth";

function Header() {
  var delivery = true;
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const showCart = () => setShow(true);
  const hideCart = () => setShow(false);
  const { isLogin } = useContext(AuthContext);

  useEffect(() => {
    axios.get("/cart/get").then((res) => setCart(res.data));
  }, []);

  return (
    <div className="text-white font-kanit">
      <div className="bg-red flex justify-center">
        <div className="items-center flex w-full justify-between my-1 mx-6">
          <div className="lg:hidden item-center">
            <img
              src="https://www.mk1642.com/App_Themes/Source/images/ico/Group-2149.png"
              alt="menu"
            />
          </div>
          <div className="">
            <a href="/">
              <img src="/logo.png" alt="logo" className="h-12" />
            </a>
            <p className="hidden lg:block text-sm">
              สามารถสั่งอาหารได้ <strong>10:00 - 19:45 น.</strong>
            </p>
          </div>
          <div className="hidden lg:grid font-semibold w-1/3 place-items-center py-4 space-y-3">
            <h1 className="text-3xl">
              Welcome to <strong>MK Online Delivery</strong>
            </h1>
            <div className="flex">
              <div className="button-box flex">
                <div id="btnn" className="left-0"></div>
                <button
                  className="flex toggle-button text-sm justify-center"
                  onClick={leftClick}
                >
                  <img
                    src="../icon/delivery.png"
                    width={20}
                    className="mr-3"
                    alt="delivery-icon"
                  />
                  เดลิเวอรี่
                </button>
                <button
                  className="flex toggle-button text-sm justify-center"
                  onClick={rightClick}
                >
                  <img
                    src="../icon/shop.png"
                    width={20}
                    className="mr-3"
                    alt="shop-icon"
                  />
                  รับสินค้าที่ร้าน
                </button>
              </div>
            </div>
            {delivery ? (
              <div className="search-box flex w-full justify-between">
                <input
                  className="p-3 h-4 text-xs font-light w-full rounded-l-md"
                  type="text"
                  placeholder="ค้นหาสถานที่เพื่อตรวจสอบพื้นที่จัดส่ง"
                  autoComplete="off"
                />
                <div className="search-icon grid bg-gray rounded-r-md place-items-center w-8">
                  <a href="/">
                    <img src="/crosshair.png" alt="crosshair logo" width="13" />
                  </a>
                </div>
              </div>
            ) : (
              <select
                name="โปรดเลือกสาขา"
                className="bg-[#9C0010] w-1/3 text-xs"
              >
                <option value="01">ลาดกระบัง</option>
              </select>
            )}
          </div>
          <div className="">
            {isLogin ? (
              <a href="/profile">profile</a>
            ) : (
              <a href="/login" className="hidden lg:block text-sm">
                เข้าสู่ระบบ/ลงทะเบียน
              </a>
            )}
            <div
              className="lg:flex items-center justify-end mt-1 hover:cursor-pointer"
              onClick={(e) => {
                showCart();
              }}
            >
              <div className="relative">
                <img
                  src="https://www.mk1642.com/App_Themes/Source/images/ico/Group-1610.png"
                  alt="cart_logo"
                />
                <p className="absolute left-6 top-4 text-sm">
                  {cart.amount === null ? 0 : cart.amount}
                </p>
              </div>
              <p className="ml-5 font-semibold">
                {cart.total_cost === null ? 0 : cart.total_cost} .-
              </p>
            </div>
          </div>
        </div>
      </div>
      {show && <Cart show={show} handleClose={hideCart} cart={cart} />}
    </div>
  );

  function leftClick() {
    var btn = document.getElementById("btnn");
    btn.style.left = "0";
    delivery = true;
  }

  function rightClick() {
    var btn = document.getElementById("btnn");
    btn.style.left = "50%";
    delivery = false;
  }
}

export default Header;
>>>>>>> dev
