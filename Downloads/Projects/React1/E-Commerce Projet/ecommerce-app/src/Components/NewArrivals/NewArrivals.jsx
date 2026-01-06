import NewArrivalsProducts from "../../assets/NewArrivalsProducts";
import Item from "../Item/Item";
import "./NewArrivals.css";

const NewArrivals = () => {
  return (
    <div className="new-arrivals">
      <h1>New Arrivals</h1>
      <div className="new-arrivals-item">
        {NewArrivalsProducts.map((item, i) => {
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

export default NewArrivals;
