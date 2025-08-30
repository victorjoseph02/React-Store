import React from "react";
import "./Products.css";
import { appContext } from "../App";
import { useContext } from "react";
export default function Products() {
  const { user, products, cart, setCart } = useContext(appContext);
  const addToCart = (id) => {
    !cart[id] && setCart({ ...cart, [id]: 1 });
  };
  const increment = (id) => {
    setCart({ ...cart, [id]: cart[id] + 1 });
  };
  const decrement = (id) => {
    setCart({ ...cart, [id]: cart[id] - 1 });
  };
  return (
    <>
      <div className="App-Products-Row">
        {products.map((value) => (
          <div key={value._id} className="App-Products-Box">
            <img src={value.url} />
            <h3>{value.name}</h3>
            <p>{value.desc}</p>
            <h4>{value.price}</h4>
            {cart[value._id] > 0 ? (
              <div>
                <button onClick={() => decrement(value._id)}>-</button>
                {cart[value._id]}
                <button onClick={() => increment(value._id)}>+</button>
              </div>
            ) : (
              <button onClick={() => addToCart(value._id)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
      ;
    </>
  );
}
