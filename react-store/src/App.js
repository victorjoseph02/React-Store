import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./components/Cart";
import axios from "axios";
import Login from "./components/Login";
import Register from "./components/Register";
import Products from "./components/Products";
import Orders from "./components/Orders";
import { createContext, use, useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const appContext = createContext();
function App(props) {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState({});
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const API = process.env.REACT_APP_API;
  // const products = [
  //   { id: 1, name: "Product 1", price: 56,desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/1/350/350" },
  //   { id: 2, name: "Product 2", price: 40,desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/2/350/350" },
  //   { id: 3, name: "Product 3", price: 35,desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/3/350/350" },
  //   { id: 4, name: "Product 4", price: 25,desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/4/350/350" },
  //   { id: 5, name: "Product 5", price: 95,desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/5/350/350" },
  //   { id: 6, name: "Product 6", price: 85,desc:"This is a sample description of the product",imgUrl:"https://picsum.photos/id/6/350/350" },
  // ];

  const fetchProducts = async () => {
    try {
      const url = `${API}/api/product/showproducts`;
      const result = await axios.get(url);
      setProducts(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <BrowserRouter>
      <appContext.Provider
        value={{
          users,
          setUsers,
          user,
          setUser,
          products,
          cart,
          setCart,
          orders,
          setOrders,
        }}
      >
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path="/" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<Orders />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </appContext.Provider>
    </BrowserRouter>
  );
}
export default App;
