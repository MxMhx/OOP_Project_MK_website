import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Registor";
import Header from "./components/Header";
import SingleProduct from "./pages/SingleProduct";
import Category from "./pages/Category";
import Profile from "./pages/Profile";
import { AuthProvider } from "./context/auth";
import Admin from "./pages/Admin";
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registor" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:category/:name" element={<SingleProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;