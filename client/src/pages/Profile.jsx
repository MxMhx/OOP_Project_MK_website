import React, { useEffect, useState, useContext } from "react";
import FilterBar from "../components/Filter";
import axios from "axios";
import AuthContext from "../context/auth";

export default function Profile() {
  // const { user } = useContext(AuthContext);
  const [user, setUser] = useState({});

  const handleLogOut = async () => {
    axios.delete("/auth/logout").then(() => {
      window.location.href = "/";
    });
  };

  useEffect(() => {
    axios
      .get("/user/verify")
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  console.log(user);

  return (
    <div className="font-kanit">
      <FilterBar title="โปรไฟล์" />
      <div className="flex w-full justify-center items-center my-9">
        <div>
          <h1>ชื่อ</h1>
          <p></p>
        </div>
        <div>
          <h1>เบอร์โทรศัพท์</h1>
          <p></p>
        </div>
        <div>
          <h1>อีเมลล์</h1>
          <p></p>
        </div>
      </div>
    </div>
  );
}
