import React from "react";
import "./NewArrivalsProductsDisplay.css";
import Item from "../Item/Item";

const NewArrivalsProductsDisplay = ({ currentPosts }) => {
  return (
    <div className="New-arrivals-products-display-container">
      <h1>OUR NEW ARRIVALS PRODUCTS</h1>
      <div className="New-arrivals-products-display">
        {currentPosts.map((product, i) => {
          return (
            <Item
              key={i}
              id={product.id}
              image={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivalsProductsDisplay;
