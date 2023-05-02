import React, { useState, useContext } from "react";
import FilterBar from "../components/Filter";
import axios from "axios";
import AuthContext from "../context/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const { setCookies } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setIsLoading(false);
        setIsInvalid(false);
        setEmail("");
        setPassword("");
        if (res.data.status !== "Login Failed") {
          setCookies("token", res.data);
          window.location.replace("/");
        } else {
          setIsInvalid(true);
        }
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="font-kanit">
      <FilterBar title="เข้าสู่ระบบ" />
      <div className="flex justify-center mt-5">
        <div className="w-1/3 h-max p-5 rounded-lg">
          <h3 className="pt-4 text-2xl text-center">เข้าสู่ระบบ</h3>
          {isInvalid && (
            <div className="flex border-red border rounded-md bg-red bg-opacity-25 px-6 py-4 my-4">
              <img src="" alt="" />
              <p>invalid email or password</p>
            </div>
          )}
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="w-full">
              <label className="block m-2 text-red">อีเมลล์</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md w-full"
                type="email"
                placeholder="Ex. test@email.com"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full">
              <label className="block m-2 text-red">รหัสผ่าน</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md w-full"
                type="password"
                placeholder="**********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                className="w-full px-4 py-2 mt-3 font-bold text-white bg-red rounded-full"
                type="submit"
                disabled={isLoading}
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
          <div className="my-5 flex flex-col sm:flex-row justify-between">
            <a
              className="text-red hover:text-third-color text-sm float-left"
              href="/"
            >
              ลืมรหัสผ่าน?
            </a>
            <a
              className="text-red hover:text-third-color text-sm float-right"
              href="/registor"
            >
              สร้างบัญชี
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
