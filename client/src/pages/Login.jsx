import React from "react";
import FilterBar from "../components/Filter";

export default function Login() {
  return (
    <div className="font-kanit">
      {/* <FilterBar title="เข้าสู่ระบบ" />
      <div className="flex justify-center mt-5">
        <div className="w-1/3 h-max p-5 rounded-lg">
          <h3 className="pt-4 text-2xl text-center">เข้าสู่ระบบ</h3>
          <form>
            <div className="w-full">
              <label className="block m-2 text-red">อีเมลล์</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md w-full"
                type="email"
                placeholder="Ex. test@email.com"
              />
            </div>
            <div className="w-full">
              <label className="block m-2 text-red">รหัสผ่าน</label>
              <input
                className="px-2 py-1 rounded-lg shadow-md w-full"
                type="password"
                placeholder="**********"
              />
            </div>
            <div>
              <button
                className="w-full px-4 py-2 mt-3 font-bold text-white bg-red rounded-full"
                type="submit"
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
      </div> */}
      <div className="flex justify-center w-1/2 h-1/2 shadow-xl rounded-md">
        <div className="flex flex-col">
          <h1>Title</h1>
          <h1>Author</h1>
          <p>Ohm</p>
          <h1>Level</h1>
        </div>
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}
