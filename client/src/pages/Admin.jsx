import React, { useState, useContext } from "react";
import FilterBar from "../components/Filter";
import AddCategoryForm from "../components/admin/addCategory";
import AddProductForm from "../components/admin/addProduct";
import ManageUser, { AddUser } from "../components/admin/ManageUser";
import AuthContext from "../context/auth";

const Admin = () => {
  const [select, setSelect] = useState(1);
  const [showAddUser, setShowAddUser] = useState(false);
  const { removeCookies, isAdmin } = useContext(AuthContext);

  const selectOption = (num) => {
    setSelect(num);
  };

  const handleLogOut = () => {
    removeCookies("token");
    window.location.replace("/");
  };

  return (
    <>
      {isAdmin ? (
        <div className="font-kanit justify-items-center">
          <FilterBar title="Admin" />
          <div className="flex justify-center m-5">
            <div className="w-1/2 flex justify-around bg-red p-4 rounded-t-xl text-white font-bold">
              <h1
                onClick={() => selectOption(1)}
                className={`p-3 rounded-t-xl cursor-pointer w-1/4 text-center ${
                  select === 1 && "bg-[#9C0010]"
                }`}
              >
                Add Category
              </h1>
              <h1
                onClick={() => selectOption(2)}
                className={`p-3 rounded-t-xl cursor-pointer w-1/4 text-center ${
                  select === 2 && "bg-[#9C0010]"
                }`}
              >
                Add Product
              </h1>
              <h1
                onClick={() => selectOption(3)}
                className={`p-3 rounded-t-xl cursor-pointer w-1/4 text-center ${
                  select === 3 && "bg-[#9C0010]"
                }`}
              >
                User
              </h1>
            </div>
          </div>
          {select === 1 && <AddCategoryForm />}
          {select === 2 && <AddProductForm />}
          {select === 3 && (
            <ManageUser adduser={!showAddUser} setshow={setShowAddUser} />
          )}
          {showAddUser && <AddUser close={setShowAddUser} />}
          <div className="flex justify-center m-5">
            <button
              className="w-1/4 px-4 py-2 mt-3 font-bold text-white bg-red rounded-lg"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Admin;
