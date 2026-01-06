import "./TopSelling.css";
import TopSellingProducts from "../../assets/TopSellingProducts";
import Item from "../Item/Item";

const TopSelling = () => {
  return (
    <div className="top-selling">
      <hr />
      <h1>Top Selling</h1>
      <div className="top-selling-item">
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
  );
};

export default TopSelling;
