import React, { useEffect, useState, useContext } from "react";
import FilterBar from "../components/Filter";
import axios from "axios";
import AuthContext from "../context/auth";

export default function Profile() {
  const { cookies, removeCookies } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [editProfile, setEditProfile] = useState(false);

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
        <div className="flex flex-col w-1/3 bg-gray rounded-xl">
          <div className="flex items-center w-full bg-red rounded-b-xl p-4 justify-between">
            <div className="flex items-center">
              <img src="/icon/user.png" alt="user" width={50} />
              <p className="font-bold mx-4">{user[0]?.["_name"]}</p>
            </div>
            <div className="flex">
              <button
                className="p-2 font-bold text-darkgray bg-gray rounded-lg border-red border-2 text-xs mr-3"
                onClick={() => setEditProfile(true)}
              >
                Edit Profile
              </button>
              <button
                className="p-2 font-bold text-white rounded-lg border-white border-2 text-xs"
                onClick={() => {
                  window.location.replace("/history");
                }}
              >
                History
              </button>
            </div>
          </div>
          <div className="p-4">
            <h1>Email</h1>
            <p className="text-red font-bold">{user[1]?.["_email"]}</p>
            <h1>Phone</h1>
            <p className="text-red font-bold">{user[0]?.["_phone"]}</p>
            <h1>Address</h1>
            <p className="text-red font-bold">
              {user[0]?.["address"] == null ? "-" : user[0]?.["address"]}
            </p>
            <h1>Birthday</h1>
            <p className="text-red font-bold">{user[0]?.["_birthday"]}</p>
          </div>
          <div className="flex justify-center w-full mb-4">
            <button
              className="w-4/5 px-4 py-2 mt-3 font-bold text-red bg-gray rounded-xl border-red border-2"
              onClick={handleLogOut}
            >
              ออกจากระบบ
            </button>
          </div>
        </div>
      </div>
      {editProfile && <EditProfile close={setEditProfile} />}
    </div>
  );
}

function EditProfile(props) {
  const { cookies, setCookies } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/user/edit", {
        username: cookies.token,
        name: name,
        phone: phone,
        birthday: birthday,
        address: address,
      })
      .then((res) => {
        setIsLoading(false);
        setName("");
        setPhone("");
        setBirthday("");
        setAddress("");
        props.close(false);
        setCookies("token", res.data);
        window.location.reload();
      });
  };

  return (
    <div
      className="fixed z-10 w-1/2 bg-white top-1/2 left-1/2 p-5 rounded-xl"
      style={{ transform: "translate(-50%,-50%)" }}
    >
      <div className="flex justify-between items-center font-bold">
        <h1>Edit your Profile</h1>
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
      <form onSubmit={(e) => handleEditProfile(e)}>
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
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
          placeholder="Birthday Ex. 19-09-2003"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <input
          className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button
          className="w-full px-4 py-2 mt-3 font-bold text-white bg-red rounded-lg"
          type="submit"
        >
          Apply
        </button>
      </form>
    </div>
  );
}
