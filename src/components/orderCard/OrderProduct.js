import React from "react";
import useGetProduct from "../../utils/useGetProduct";
import "./orderCard.css";
import ProductImage from "../../pages/product/ProductImage";
import { useLocation } from "wouter";

const OrderProduct = ({ product }) => {
  const [, setLocation] = useLocation();
  const { data } = useGetProduct(product.id);

  return data ? (
    <div
      className="order-product"
      onClick={() => setLocation(`/product/${product.id}`)}
    >
      <div className="order-product-image">
        <ProductImage image={data.image} />
      </div>
      <div className="order-product-name">{data.name}</div>
      <div className="order-product-price">
        {product.price}$ x{product.amount}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default OrderProduct;
