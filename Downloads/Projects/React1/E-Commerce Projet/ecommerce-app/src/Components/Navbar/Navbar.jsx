import React, { useContext } from "react";
import "./Navbar.css";
import cart_icon from "../../assets/cart_icon.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const useCart = () => useContext(CartContext);
  const { cartItem } = useCart();

  const cartCount = Object.values(cartItem).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>SHOP.CO</p>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}>
          <Link to="/" style={{ textDecoration: "none", color: "#626262" }}>
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("products")}>
          <Link
            to="/products"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            Products
          </Link>
          {menu === "products" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("newArrivals")}>
          <Link
            to="/newArrivals"
            style={{ textDecoration: "none", color: "#626262" }}
          >
            New Arrivals
          </Link>
          {menu === "newArrivals" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-cart">
        <Link to="/cart">
          <img src={cart_icon} alt="" height="40px" />
        </Link>
        <div className="nav-cart-count">{cartCount}</div>
      </div>
    </div>
  );
};

export default Navbar;
