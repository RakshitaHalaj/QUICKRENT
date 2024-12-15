// import React from "react";
import "../styles/features.css";

const features = [
  { icon: "📱", title: "Wide Variety of Gadgets", description: "From laptops to cameras to gaming consoles." },
  { icon: "💰", title: "Affordable Pricing", description: "Get the best value for your money." },
  { icon: "🚚", title: "Quick Delivery", description: "Fast and reliable doorstep delivery." },
];
const Features = () => {
    return (
      <section id="features" className="features">
        <h2>Why Choose QuickRent?</h2>
        <div className="feature-cards">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Features;