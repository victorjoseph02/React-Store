import "./Header.css";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { appContext } from "../App";
export default function Header() {
  const { user, setUser, cart, products, orders } = useContext(appContext);
  const items = products.filter((value) => cart[value.id] > 0);
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    setMyOrder(orders.filter((value) => value.email === user.email));
  }, [orders, user]);
  return (
    <div className="App-Header-Row">
      <h2>React Store</h2>
      <div>
        <Link to={"/"}>Home</Link>-
        <Link to={"/cart"}>Cart({items.length})</Link>-
        <Link to={"/orders"}>Orders</Link>

        {user.email === "" || !user.email ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <Link
            to={"/login"}
            // onClick={() =>
            //   setUser({ ...user, name: "", email: "", password: "" })
            // }
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}
