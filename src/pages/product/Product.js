import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useGetProduct from "../../utils/useGetProduct";
import "./product.css";
import ProductImage from "./ProductImage";

const Product = ({ id }) => {
  const dispatch = useDispatch();

  const { data, loading, error } = useGetProduct(id);
  const [amount, setAmount] = useState(1);

  const handleBasket = () => dispatch();

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error}</div>;

  return data ? (
    <div className="container product-display">
      <div className="product-name">{data.name}</div>
      <div className="mid-section">
        <ProductImage image={data.image} />
        <div className="mid-section-buy">
          <div className="buy-price">{data.price}$</div>
          <div className="buy-form">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              min={1}
            />
            <button onClick={() => handleBasket()}>Add to basket</button>
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
    </div>
  ) : (
    <></>
  );
};

export default Product;
