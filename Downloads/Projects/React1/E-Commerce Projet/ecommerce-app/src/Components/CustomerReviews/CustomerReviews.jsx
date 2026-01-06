import React from "react";
import "./CustomerReviews.css";
import Reviews from "../../assets/Reviews";
import Rating from "../Rating/Rating";

const CustomerReviews = () => {
  return (
    <div className="customer-reviews">
      <h2 className="customer-reviews-header">OUR HAPPY CUSTOMERS</h2>
      <div className="customer-reviews-item">
        {Reviews.map((item, i) => {
          return (
            <Rating
              key={i}
              id={item.id}
              personName={item.personName}
              comment={item.comment}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  )
}

export default CustomerReviews
