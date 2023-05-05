import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ManageUser(props) {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios.get("/user/list").then((res) => setUserList(res.data));
  }, []);

  const handleRemoveUser = (username) => {
    axios.delete("/removeuser", { params: { name: username } }).then((res) => {
      window.location.reload();
    });
  };

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
                    onClick={() => handleRemoveUser(user._name)}
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/adduser", {
        name: name,
        email: email,
        password: password,
        phone: phone,
        birthday: birthday,
      })
      .then(() => {
        props.close(false);
        setIsLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setPhone("");
        setBirthday("");
      })
      .catch(() => setIsLoading(false));
  };
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
      <form onSubmit={(e) => handleAddUser(e)}>
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Username"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full px-4 py-2 mt-3 font-bold text-white bg-red rounded-lg"
          type="submit"
          disabled={isLoading}
        >
          Add New User
        </button>
      </form>
    </div>
  );
}
