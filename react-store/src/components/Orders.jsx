import React, { useEffect } from "react";
import { appContext } from "../App";
import { useContext } from "react";
import axios from "axios";
export default function Orders() {
  const API = process.env.REACT_APP_API;
  const { orders, setOrders, cart, user } = useContext(appContext);
  const fetchOrders = async () => {
    const url = `${API}/api/order/showorder/${user.email}`;
    const result = await axios.get(url);
    setOrders(result.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h3>My Orders</h3>

      <ol>
        {orders.map((value) => (
          <li>
            {value.createdAt}-{value.email}-{Object.keys(value.items).length}-
            {value.total}
          </li>
        ))}
      </ol>
      <hr></hr>
    </div>
  );
}
