import React from "react";
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one item!!!</p>;
  }
  return (
    <div>
      <h1>order Summary</h1>
      <h2>order Quantity: {cart.length} </h2>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {message}
    </div>
  );
};

export default Cart;
