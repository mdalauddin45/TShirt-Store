import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

function Home() {
  const tShirts = useLoaderData();
  const [cart, setCart] = useState([]);

  //   console.log(tShirts);
  const handleAddToCart = (tShirt) => {
    const exists = cart.find((ts) => ts._id === tShirt._id);
    if (exists) {
      alert("added");
    } else {
      const newCart = [...cart, tShirt];
      setCart(newCart);
      //   alert("added successfuly");
    }
  };
  const handleRemoveItem = (tshirt) => {
    const remaining = cart.filter((ts) => ts._id !== tshirt._id);
    setCart(remaining);
    // console.log(tshirt);
  };
  return (
    <div className="home-container">
      <div className="tShirts">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>
      </div>
    </div>
  );
}

export default Home;
