import Navbar from "/src/Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import Products from "./Pages/Products";
import Product from "./Pages/product";
import NewArrivals from "./Pages/NewArrivals";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/newArrivals" element={<NewArrivals />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/newArrivals" element={<NewArrivals />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
