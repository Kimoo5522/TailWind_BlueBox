// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ShopContextProvider from "./Context/ShopContextProvider.jsx";
import { CartContextProvider } from "./Context/CartContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <ShopContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </ShopContextProvider>
  // </StrictMode>,
);
