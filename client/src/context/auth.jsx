import axios from "axios";
import { useState, useEffect, createContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("/user/verify").then((res) => {
      res.data._role === "customer" || res.data._role === "admin"
        ? setIsLogin(true)
        : setIsLogin(false);
      res.data._role === "admin" ? setIsAdmin(true) : setIsAdmin(false);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        isLogin,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
