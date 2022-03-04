import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/cartCard/CartCard";
import "./cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const total = useCallback(() => {
    let t = 0;
    for (let product in cart) {
      t += product.amount * product.price;
    }
    return t;
  }, [cart]);

  return (
    <div className="container">
      {cart.length > 0 ? (
        <div className="cart-container">
          <div className="item-list">
            {cart.map((product, index) => (
              <CartCard product={product} index={index} key={index} />
            ))}
          </div>
          <div className="cart-summary">
            <span>Total: {total()}$</span>
            <br />
            <button>Checkout</button>
          </div>
        </div>
      ) : (
        <div className="empty-list">
          <span className="empty-list-title">Your bakset is empty!</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
