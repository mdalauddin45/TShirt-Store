import React from "react";
import { useLoaderData } from "react-router-dom";
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
        <h1>order summary</h1>
      </div>
    </div>
  );
}

export default Home;
