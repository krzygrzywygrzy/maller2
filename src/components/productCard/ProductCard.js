import React from "react";
import { Link } from "wouter";
import useGetImageUrl from "../../utils/useGetImageUrl";
import "./productCard.css";

const ProductCard = ({ product }) => {
  const url = useGetImageUrl(product.image);
  console.log(product);

  return (
    <div className="product-card">
      <Link href={`/product/${product.objectID}`}>
        <div className="product-img">
          {product.image && url ? (
            <img alt="" src={url} />
          ) : (
            <div className="no-product-img"></div>
          )}
        </div>
        <div className="product-info">
          <div className="product-title">{product.name}</div>
          <div>{product.price}$</div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
