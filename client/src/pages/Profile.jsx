import React, { useEffect, useState, useContext } from "react";
import FilterBar from "../components/Filter";
import axios from "axios";
import AuthContext from "../context/auth";

export default function Profile() {
  const { cookies, removeCookies } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const handleLogOut = () => {
    removeCookies("token");
    window.location.replace("/");
  };

  useEffect(() => {
    axios
      .get("/user/current", { params: { name: cookies.token } })
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err.message));
  }, [cookies]);
  return (
    <div className="font-kanit">
      <FilterBar title="โปรไฟล์" />
      <div className="flex w-full justify-center my-9">
        <div className="flex flex-col w-1/4 justify-between h-[200px]">
          <div className="flex items-center w-1/3">
            <img src="/icon/user.png" alt="user" width={80} />
            <p className="mx-9">{user._name}</p>
          </div>
          <p>{user._phone}</p>
          <p>{user.address}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline-primary" onClick={handleLogOut}>
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
}
