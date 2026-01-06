import React from "react";
import "./Rating.css";
import star_icon from "../../assets/star_icon.jpg";
import half_star_icon from "../../assets/half_star_icon.png";

const Rating = (props) => {
  return (
    <div className="rating">
      <div className="rating-stars">
        <div className="rating-stars-imgs">
          <img src={star_icon} alt="" height="25px" />
          <img src={star_icon} alt="" height="25px" />
          <img src={star_icon} alt="" height="25px" />
          <img src={star_icon} alt="" height="25px" />
          <img
            src={half_star_icon}
            height="22px"
            style={{ paddingBottom: "3px", marginLeft: "2px" }}
          />
        </div>

        <div className="rating-stars-points">...</div>
      </div>

      <div className="rating-details">
        <h2>{props.personName}</h2>
        <p className="rating-details-comment">"{props.comment}"</p>
        <p className="rating-details-date">{props.date}</p>
      </div>
    </div>
  );
};

export default Rating;
