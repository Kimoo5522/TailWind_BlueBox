import React from "react";
import "./Hero.css";
import right_photo from "../../assets/right_photo.jpg";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <div className="shop_now_btn">
              <div>Shop Now</div>
          </div>
          <div className="hero-details">
              <div><span>200+</span><br />International Brands</div>
              <div><span>2,000+</span><br />High-Quality Products</div>
              <div className="last-div"><span>30,000+</span><br />Happy Customers</div>
          </div>
        </div>

        <div className="hero_right">
          <img src={right_photo} alt="" height="700px" width="600px"/>
        </div>
      </div>

      <div className="brands-div">
        <span style={{fontSize: "30px"}}>VERSACE</span>
        <span style={{fontSize: "30px", fontStyle: "italic"}}>ZARA</span>
        <span style={{fontSize: "30px"}}>GUCCI</span>
        <span style={{fontSize: "30px", fontWeight: "bolder"}}>PRADA</span>
        <span style={{fontSize: "30px", fontStyle: "initial"}}>Calvin Clein</span>
      </div>
    </>
  );
};

export default Hero;
