import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { useCookies } from "react-cookie";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const [cookies, setCookies, removeCookies] = useCookies([""]);

  useEffect(() => {
    axios
      .get("/user/current", { params: { name: cookies.token } })
      .then((res) => {
        res.data._role === "customer" || res.data._role === "admin"
          ? setIsLogin(true)
          : setIsLogin(false);
        res.data._role === "admin" ? setIsAdmin(true) : setIsAdmin(false);
      });
  }, [cookies]);
  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        isLogin,
        cookies,
        setCookies,
        removeCookies,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
