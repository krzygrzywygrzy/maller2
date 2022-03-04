import React from "react";
import useGetImageUrl from "../../utils/useGetImageUrl";
import useGetProduct from "../../utils/useGetProduct";
import "./cartCard.css";

const CartCard = ({ product, index }) => {
  const { data, loading, error } = useGetProduct(product.id);

  if (loading) return <div></div>;
  if (error) return <div></div>;

  return data ? (
    <div className="cart-card">
      <div></div>
      <div></div>
    </div>
  ) : (
    <></>
  );
};

export default CartCard;
