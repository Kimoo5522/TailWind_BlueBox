import TopSellingProducts from "../../assets/TopSellingProducts";
import Item from "../Item/Item";
import "./MightLike.css";

const MightLike = () => {
  return (
    <div className="might-like">
      <hr />
      <h1>YOU MIGHT ALSO LIKE</h1>
      <div className="might-like-item">
        {TopSellingProducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default MightLike
