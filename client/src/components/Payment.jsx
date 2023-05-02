import axios from "axios";
import React, { useState, useContext } from "react";
import AuthContext from "../context/auth";

export default function Payment(props) {
  const [cash, setCash] = useState(false);
  const [credit, setCredit] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [exp, setExp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { cookies } = useContext(AuthContext);

  const selectCash = () => {
    setCash(true);
    setCredit(false);
  };

  const selectCredit = () => {
    setCredit(true);
    setCash(false);
  };

  const handleCash = () => {
    setIsLoading(true);
    axios
      .post("/order/cash", {
        username: cookies.token,
        orderid: props.order._Order__id,
        totalCost: props.order._total_Cost,
      })
      .then(() => {
        setIsLoading(false);
        window.location.replace("/");
      })
      .catch(() => setIsLoading(false));
  };

  const handleCredit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/order/credit", {
        username: cookies.token,
        orderid: props.order._Order__id,
        totalCost: props.order._total_Cost,
        firstname: firstname,
        lastname: lastname,
        cardNumber: cardNumber,
        cvv: cvv,
        exp: exp,
      })
      .then(() => {
        setIsLoading(false);
        window.location.replace("/");
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      className="fixed z-10 w-1/2 bg-gray text-black top-1/2 left-1/2 p-5 rounded-xl shadow-xl"
      style={{ transform: "translate(-50%,-50%)" }}
    >
      <div className="flex justify-between w-1/3">
        <h1 className="">Transaction ID</h1>
        <p>{props.order._Order__id}</p>
      </div>
      <div className="flex justify-between w-1/3">
        <h1>Cost</h1>
        <p>{props.order._total_Cost - 50} .-</p>
      </div>
      <div className="flex justify-between w-1/3">
        <h1>Shipping Cost</h1>
        <p>50 .-</p>
      </div>
      <div className="border w-1/3 my-3"></div>
      <div className="flex justify-between w-1/3 font-bold">
        <h1>Total Cost</h1>
        <p>{props.order._total_Cost} .-</p>
      </div>
      <h1 className="mt-4 font-bold text-2xl">Choose Yout Method</h1>
      <div className="flex">
        <button
          className={`px-4 py-2 mt-3 mr-4 font-bold text-black rounded-lg border-2 ${
            cash && "bg-green"
          }`}
          onClick={() => selectCash()}
        >
          Cash
        </button>
        <button
          className={`px-4 py-2 mt-3 mr-4 font-bold text-black rounded-lg border-2 ${
            credit && "bg-green"
          }`}
          onClick={() => selectCredit()}
        >
          Credit Card
        </button>
      </div>
      {cash && (
        <div className="w-full">
          <button
            className="w-full px-4 py-2 mt-3 mr-4 font-bold text-white text-xl rounded-xl bg-green"
            onClick={handleCash}
            disabled={isLoading}
          >
            <p className="drop-shadow-lg">SUBMIT PAYMENT</p>
          </button>
        </div>
      )}
      {credit && (
        <form onSubmit={(e) => handleCredit(e)}>
          <div className="flex justify-between">
            <input
              className="px-5 py-2 rounded-lg border w-[48%] my-3"
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className="px-5 py-2 rounded-lg border w-[48%] my-3"
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="flex">
            <input
              className="px-5 py-2 rounded-lg border w-1/2 my-3 mr-3"
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              className="px-5 py-2 rounded-lg border w-1/6 my-3 mr-3"
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
            <input
              className="px-5 py-2 rounded-lg border my-3 mr-3"
              type="text"
              placeholder="Expiration date 19-05-2028"
              value={exp}
              onChange={(e) => setExp(e.target.value)}
            />
          </div>
          <button
            className="w-full px-4 py-2 mt-3 mr-4 font-bold text-white text-xl rounded-xl bg-green"
            type="sumbit"
            disabled={isLoading}
          >
            <p className="drop-shadow-lg">SUBMIT PAYMENT</p>
          </button>
        </form>
      )}
    </div>
  );
}
