import React from "react";
import arrow_icon from "../../assets/arrow_icon.png";
import "./BredCrumbs.css";

const BredCrumbs = (props) => {
  const { product } = props;
  
  return (
    <div className="bredscrumbs">
      Home <img src={arrow_icon} height="15px" />
      Shop <img src={arrow_icon} height="15px" />
      Product <img src={arrow_icon} height="15px" />
      {product.name} 
    </div>
  );
};

export default BredCrumbs;
