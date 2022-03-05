import React from "react";
import "./orderCard.css";

const OrderCard = ({ order }) => {
  console.log(order);
  return (
    <div className="order-card">
      <div>Order: {order.id}</div>
      <div></div>
    </div>
  );
};

export default OrderCard;
