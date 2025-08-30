import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { appContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Cart() {
  const { products, cart, setCart, orders, setOrders, user } =
    useContext(appContext);
  const Navigate = useNavigate();
  const [orderValue, setOrderValue] = useState(0);
  const API = process.env.REACT_APP_API;
  const handleDelete = (id) => {
    setCart({ ...cart, [id]: 0 });
  };
  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  const placeOrder = async () => {
    const order = {
      email: user.email,
      items: cart,
      total: orderValue,
    };
    const url = `${API}/api/order/neworder`;
    const result = await axios.post(url,order);
    // setOrders(result.data);

    // setOrders([
    //   ...orders,
    //   {
    //     email: user.email,
    //     items: cart,
    //     total: orderValue,
    //   },
    // ]);

    setCart({});
    Navigate("/orders");
  };
  useEffect(() => {
    setOrderValue(
      products.reduce((sum, value) => {
        return sum + value.price * (cart[value._id] ?? 0);
      }, 0)
    );
  }, [cart]);
  return (
    <div>
      <h2>My Cart</h2>
      {Object.keys(cart).length > 0 ? (
        <>
          {products.map(
            (value) =>
              cart[value._id] > 0 && (
                <div>
                  {value.name}-{value.price}-
                  <button onClick={() => decrement(value._id)}>-</button>
                  {cart[value._id]}
                  <button onClick={() => increment(value._id)}>+</button>-
                  {value.price * cart[value._id]}-
                  <button onClick={() => handleDelete(value._id)}>
                    Delete
                  </button>
                </div>
              )
          )}
          <h3>Order Value:{orderValue}</h3>
          <p>
            {user.email ? (
              <button onClick={placeOrder}>Place Order</button>
            ) : (
              <button onClick={() => Navigate("/login")}>Login to Order</button>
            )}
          </p>
        </>
      ) : (
        <h5>Your cart is Empty</h5>
      )}
    </div>
  );
}
