import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import BredCrumbs from "../Components/BredCrums/BredCrumbs";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import RatingDisplay from "../Components/RatingDisplay/RatingDisplay";
import MightLike from "../Components/MightLike/MightLike";

const Product = () => {
  const { AllProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = AllProducts.find((e) => e.id === Number(productId));

  return (
    <div>
      <BredCrumbs product={product} />
      <ProductDisplay product={product} />
      <RatingDisplay />
      <MightLike />
    </div>
  );
};

export default Product;
