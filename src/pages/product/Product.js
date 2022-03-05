import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "wouter";
import Popup from "../../components/popup/Popup";
import { addToCart } from "../../store/actions/cartActions";
import useGetProduct from "../../utils/useGetProduct";
import "./product.css";
import ProductImage from "./ProductImage";

const Product = ({ id }) => {
  const [, setLocation] = useLocation();
  const dispatch = useDispatch();

  const { data, loading, error } = useGetProduct(id);
  const [amount, setAmount] = useState(1);
  const [cartPopup, setCartPopup] = useState(false);

  const handleBasket = () => {
    dispatch(addToCart({ id, amount, price: data.price }));
    setCartPopup(true);
  };

  useEffect(() => {
    if (data) document.title = data.name + " | maller";
    else document.title = "loading... | maller";
  }, [data]);

  if (loading) return <div className="container mobile-margin">Loading...</div>;
  if (error)
    return <div className="container mobile-margin">Error: {error}</div>;

  return data ? (
    <div className="container product-display">
      <div className="product-name">{data.name}</div>
      <div className="mid-section">
        <div className="mid-section-photos">
          <ProductImage image={data.image} />
        </div>

        <div className="mid-section-buy">
          <div className="buy-price">{data.price}$</div>
          <div className="buy-form">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              min={1}
            />
            <button onClick={() => handleBasket()}>Add to cart</button>
          </div>
          <span>in stock: {data.inStock}</span>
          <div className="buy-form-additional">
            <span>Order in 2 hours to collect on Moneday</span>
            <br></br>
          </div>
        </div>

        <div className="description">
          <div className="section-title">
            <span>Description</span>
          </div>
          {data.description ? (
            <div
              className="desctipion-content"
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></div>
          ) : (
            <span>Description for this product is not provided yet!</span>
          )}
        </div>
      </div>
      <Popup trigger={cartPopup}>
        <div className="cart-popup">
          <div>This item was added to your cart!!!</div>
          <div className="cart-popup-clickable">
            <span className="close" onClick={() => setCartPopup(false)}>
              close
            </span>
            <span className="cart" onClick={() => setLocation("/cart")}>
              go to cart
            </span>
          </div>
        </div>
      </Popup>
    </div>
  ) : (
    <></>
  );
};

export default Product;
