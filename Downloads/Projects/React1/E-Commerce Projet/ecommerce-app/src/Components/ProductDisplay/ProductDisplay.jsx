import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.jpg";
import half_star_icon from "../../assets/half_star_icon.png";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
// import CartContextProvider from "../../Context/CartContextProvider";

const ProductDisplay = (props) => {
  const { product } = props;
  const useCart = () => useContext(CartContext);
  const {addToCart} = useCart(); 

  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="img-list">
          <img src={product.image} alt="" height="133px" />
          <img src={product.image} alt="" height="133px" />
          <img src={product.image} alt="" height="133px" />
        </div>

        <div className="main-img">
          <img src={product.image} alt="" height="420px" />
        </div>
      </div>

      <div className="product-display-right">
        <h1>{product.name}</h1>

        <div className="product-stars">
          <img src={star_icon} alt="" height="25px" />
          <img src={star_icon} alt="" height="25px" />
          <img src={star_icon} alt="" height="25px" />
          <img src={star_icon} alt="" height="25px" />
          <img
            src={half_star_icon}
            alt=""
            height="22px"
            style={{ paddingBottom: "3px" , marginLeft: "2px"}}
          />
          <p className="product-stars-rate">4.5/5</p>
        </div>

        <div className="product-display-right-prices">
          <div className="product-display-right-price-new">
            ${product.new_price}
          </div>
          <div className="product-display-right-price-old">
            ${product.old_price}
          </div>
        </div>

        <div className="product-display-right-description">
          This graphic {product.name} which is perfect for any occasion. Crafted
          from a soft and breathable fabric, it offers superior comfort and
          style.
        </div>

        <hr />

        <div className="product-display-right-size">
          <p>Choose Size</p>
          <div className="choose-size">
            <div>SMALL</div>
            <div>MEDIUM</div>
            <div>LARGE</div>
            <div>X-LARGE</div>
          </div>
        </div>

        <hr />

        <div className="product-display-right-button">
          <button className="add-to-cart-button" onClick={() => addToCart(product)}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
