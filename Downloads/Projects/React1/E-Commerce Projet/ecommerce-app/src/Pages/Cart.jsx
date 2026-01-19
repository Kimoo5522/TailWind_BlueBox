import React, { useContext } from "react";
import "../CSS/Cart.css";
import { CartContext } from "../Context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";

function Cart() {
  const useCart = () => useContext(CartContext);
  const { cartItem, removeFromCart, updateQuantity } = useCart();

  const cartItemsArray = Object.values(cartItem);
  const totalItems = cartItemsArray.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItemsArray.reduce(
    (total, item) => total + item.new_price * item.quantity,
    0
  );
  const deliveryFee = 15;
 
  return (
    <div className="cart-page">
      {cartItemsArray.length > 0 ? (
        <>
          <h1>YOUR CART ({totalItems})</h1>
          <div className="cart-main">
            <div className="cart-container">
              <div className="cart-left-side-container">
                {cartItemsArray.map((item, i) => {
                  return (
                    <React.Fragment key={item.id}>
                      <div className="product-details-container">
                        <div className="product-details">
                          <img
                            src={item.image}
                            className="cart-image"
                            height="130px"
                            width="130px"
                          />

                          <div className="item-price-name">
                            <p className="item-name">{item.name}</p>
                            <p className="item-price">${item.new_price}</p>
                          </div>
                        </div>

                        <div className="product-action">
                          <div className="trash-icon-wrapper">
                            <FaRegTrashAlt
                              className="delete-icon"
                              onClick={() => removeFromCart(item.id)}
                            />
                          </div>
                          <div className="add-delete-div">
                            <button onClick={() => updateQuantity(item.id, -1)}>
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)}>
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {i !== cartItemsArray.length - 1 && (
                        <hr className="cart-item-separator" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            {/* Right Side */}

            <div className="cart-right-side">
              <h3>Order Summary</h3>

              <div className="cart-right-side-details">
                <p>Subtotal</p>
                <p className="salaries">${totalPrice}</p>
              </div>

              <div className="cart-right-side-details">
                <p>Delivery Fee</p>
                <p className="salaries">${deliveryFee}</p>
              </div>

              <hr />

              <div className="cart-right-side-details">
                <p>Total</p>
                <p className="salaries">${totalPrice + deliveryFee}</p>
              </div>

              <div className="cart-right-side-apply">
                <input
                  type="text"
                  placeholder="Add promo code"
                  className="apply-input"
                />
                <button className="apply-btn">Apply</button>
              </div>

              <div>
                <button className="checkout-btn">Go To Checkout</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="empty-cart-message">Your Cart is Empty</div>
      )}
    </div>
  );
}

export default Cart;
