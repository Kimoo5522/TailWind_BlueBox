import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo({top:0, left:0})} src={props.image} alt="" />
      </Link>

      <p>{props.name}</p>

      <div className="item-prices">
        <div className="item-new-price">$ {props.new_price}</div>
        <div className="item-old-price">$ {props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
