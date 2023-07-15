import React from "react";
import Product from "./Product";


export default function Home() {
  return (
    <div>
      <div className="card bg-dark text-white">
        <img className="card-img" src="/assets/sample1.jpg" alt="Card image" />
       
      </div>
      <Product></Product>
    </div>
  );
}
