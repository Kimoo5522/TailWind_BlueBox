import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState({});

  const addToCart = (product) => {
    setCartItem((prev) => {
      const currentQty = prev[product.id]?.quantity || 0;
      return {
        ...prev,
        [product.id]: {
          ...product,
          quantity: currentQty + 1,
        },
      };
    });
  };

  const removeFromCart = (productId) => {
    setCartItem((prev) => {
      const newCart = { ...prev };
      delete newCart[productId];
      return newCart;
    });
  };

  const updateQuantity = (productId, change) => {
    setCartItem((prev) => {
      const currentItem = prev[productId];
      if (!currentItem) return prev;

      const newQty = currentItem.quantity + change;

      if (newQty <= 0) {
        const newCart = { ...prev };
        delete newCart[productId];
        return newCart;
      }

      return {
        ...prev,
        [productId]: {
          ...currentItem,
          quantity: newQty,
        },
      };
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
