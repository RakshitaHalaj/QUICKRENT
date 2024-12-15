// import React from "react";
import "../styles/gadgetListing.css";

const gadgets = [
  { name: "Laptop", price: "$20/day", features: "Lightweight, Powerful, 16GB RAM" },
  { name: "Camera", price: "$15/day", features: "4K Video, 24MP, Compact Design" },
  { name: "Gaming Console", price: "$25/day", features: "4K HDR, Multiplayer Support" },
];
const GadgetListing = () => {
    return (
      <section id="gadgets" className="gadgets">
        <h2>Available Gadgets</h2>
        <div className="gadget-list">
          {gadgets.map((gadget, index) => (
            <div key={index} className="gadget-card">
              <h3>{gadget.name}</h3>
              <p>{gadget.features}</p>
              <div className="gadget-footer">
                <span>{gadget.price}</span>
                <button className="cta">Rent Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  export default GadgetListing;