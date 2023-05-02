import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ManageUser(props) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("/user/list").then((res) => setUserList(res.data));
  }, []);

  return (
    <div className="flex justify-center m-5">
      <div className="w-1/2 bg-gray rounded-b-xl p-4">
        <h1 className="font-bold">User List</h1>
        {userList.map((user) => {
          return (
            user._role === "customer" && (
              <div className="flex my-5 items-center justify-between bg-darkgray bg-opacity-25 p-4 rounded-lg">
                <div className="flex items-center">
                  <img src="/icon/user.png" alt="user" width={30} />
                  <h1 className="mx-5">{user._name}</h1>
                </div>
                <div>
                  <button
                    className="px-3 py-1 font-bold text-white bg-red rounded-full"
                    type="submit"
                  >
                    Remove
                  </button>
                </div>
              </div>
            )
          );
        })}
        {props.adduser && (
          <button
            className="w-full px-4 py-2 mt-3 font-bold text-red bg-white rounded-lg border-red border-2"
            type="submit"
            onClick={() => {
              props.setshow(true);
            }}
          >
            Add new user
          </button>
        )}
      </div>
    </div>
  );
}

export function AddUser(props) {
  return (
    <div
      className="fixed z-10 w-1/2 bg-white top-1/2 left-1/2 p-5 rounded-xl"
      style={{ transform: "translate(-50%,-50%)" }}
    >
      <div className="flex justify-between items-center font-bold">
        <h1>Add New User</h1>
        <h1
          onClick={() => {
            props.close(false);
          }}
          className="cursor-pointer"
        >
          x
        </h1>
      </div>
      <div className="w-full border border-gray rounded-lg my-2"></div>
      <form>
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Username"
          autoFocus
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Phone"
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Birthday"
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="email"
          placeholder="Email"
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Password"
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Address"
        />
        <button
          className="w-full px-4 py-2 mt-3 font-bold text-white bg-red rounded-lg"
          type="submit"
        >
          Add New User
        </button>
      </form>
    </div>
  );
}
