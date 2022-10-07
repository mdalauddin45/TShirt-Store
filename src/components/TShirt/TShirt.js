import React from "react";
import "./TShirt.css";

const TShirt = ({ tShirt, handleAddToCart }) => {
  const { name, picture, price } = tShirt;
  return (
    <div className="card-container">
      <img src={picture} alt="" />
      <h4>{name}</h4>
      <h6>Price: ${price}</h6>
      <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
    </div>
  );
};

export default TShirt;
