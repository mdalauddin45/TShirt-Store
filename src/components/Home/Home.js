import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";
function Home() {
  const tShirts = useLoaderData();
  console.log(tShirts);
  return (
    <div className="home-container">
      <div className="tShirts">
        {tShirts.map((tShirt) => (
          <TShirt key={tShirt._id} tShirt={tShirt}></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart></Cart>
      </div>
    </div>
  );
}

export default Home;
