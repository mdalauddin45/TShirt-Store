import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h1>order Summary</h1>
      <h2>order Quantity: {cart.length} </h2>
    </div>
  );
};

export default Cart;
