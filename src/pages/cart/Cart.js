import { doc, setDoc } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "wouter";
import CartCard from "../../components/cartCard/CartCard";
import Popup from "../../components/popup/Popup";
import { auth, db } from "../../firebase";
import "./cart.css";
import { v4 } from "uuid";
import { clearCart } from "../../store/actions/cartActions";

const Cart = () => {
  const [, setLocation] = useLocation();
  const cart = useSelector((state) => state.cart);
  const total = useCallback(() => {
    let t = 0;
    for (let product of cart) {
      t += product.amount * product.price;
    }
    return t;
  }, [cart]);

  useEffect(() => {
    document.title = "cart (" + cart.length + ") | maller";
  }, [cart]);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState();
  const [message, setMessage] = useState();
  const handleCheckout = async () => {
    try {
      setLoading(true);

      if (!auth.currentUser) throw Error("You must be logged in to check out!");

      const orderId = v4();
      const ref = doc(db, `users/${auth.currentUser.uid}/orders`, orderId);
      const order = { products: cart, id: orderId, ordered: Date.now() };
      setDoc(ref, order);

      setMessage("Check out process went successfully!");
      dispatch(clearCart());
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

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
            <button onClick={handleCheckout}>
              {loading ? "Loading..." : "Check out"}
            </button>
          </div>
        </div>
      ) : (
        <div className="empty-list">
          <span className="empty-list-title">Your bakset is empty!</span>
        </div>
      )}
      <Popup trigger={message !== undefined}>
        <div className="checkout-popup">
          <div>{message}</div>
          <div className="checkout-clickable">
            <span
              onClick={() => {
                if (message === "Check out process went successfully!")
                  setLocation("/");

                setMessage(undefined);
              }}
            >
              close
            </span>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default Cart;
