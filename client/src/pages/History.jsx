import React, { useEffect, useState, useContext } from "react";
import FilterBar from "../components/Filter";
import axios from "axios";
import AuthContext from "../context/auth";

export default function History() {
  const { cookies } = useContext(AuthContext);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    axios
      .get("/order/all_order", { params: { name: cookies.token } })
      .then((res) => setOrderList(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="font-kanit">
      <FilterBar title="รายการ" />
      <div className="flex w-full justify-center my-9">
        <div className="bg-darkgray rounded-b-xl p-4 w-1/2">
          <h1 className="font-bold text-2xl">Order List</h1>
          {orderList.map((order) => {
            return (
              <div className="flex justify-between bg-gray rounded-xl my-4 p-4">
                <div>
                  <h1 className="font-bold">Order ID</h1>
                  <p>{order._Order__id}</p>
                </div>
                <div>
                  <h1 className="font-bold">Total Cost</h1>
                  <p>{order._total_Cost} .-</p>
                </div>
                <div>
                  <h1 className="font-bold">Date</h1>
                  <p>{order._payment?.["_Payment__date_time"]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
