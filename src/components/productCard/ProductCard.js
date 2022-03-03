import React from "react";
import useGetImageUrl from "../../utils/useGetImageUrl";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const url = useGetImageUrl(product.image);

  return <div className="product-card">{product.name}</div>;
};

export default ProductCard;
