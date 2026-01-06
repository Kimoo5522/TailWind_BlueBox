import AllProducts from "../assets/AllProducts";
import { ShopContext } from "./ShopContext";

const ShopContextProvider = (props) => {
  const contextValue = { AllProducts };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
