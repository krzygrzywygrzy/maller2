import React from "react";
import dateFormat from "../../utils/dateFomat";
import "./orderCard.css";
import OrderProduct from "./OrderProduct";

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <div className="order-card-section">{order.id}</div>
      <div>{dateFormat(order.ordered)}</div>
      <div className="order-card-products">
        {order.products.map((product) => (
          <OrderProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
