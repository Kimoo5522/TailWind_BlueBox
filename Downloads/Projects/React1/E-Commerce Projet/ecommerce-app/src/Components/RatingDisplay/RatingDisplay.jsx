import "./RatingDisplay.css";
import Reviews from "../../assets/Reviews";
import Rating from "../Rating/Rating";

const RatingDisplay = () => {
  return (
    <div>
      <p className="all-reviews-word">All Reviews</p>
      <div className="rating-display">
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
  );
};

export default RatingDisplay;
