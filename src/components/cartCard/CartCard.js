import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "wouter";
import ProductImage from "../../pages/product/ProductImage";
import { changeAmount, removeFromCart } from "../../store/actions/cartActions";
import useGetProduct from "../../utils/useGetProduct";
import "./cartCard.css";
import { HiX } from "react-icons/hi";

const CartCard = ({ product, index }) => {
  const { data, loading, error } = useGetProduct(product.id);
  const dispatch = useDispatch();
  if (loading) return <div></div>;
  if (error) return <div>Error: {error}</div>;

  return data ? (
    <div className="cart-card">
      <div className="cart-card-photo">
        <ProductImage image={data.image} />
      </div>
      <div className="cart-card-info">
        <div className="name">
          <Link href={`/product/${data.objectID}`}>{data.name}</Link>
        </div>
        <div className="price">{product.price}$</div>
        <div className="amount">
          <input
            type="number"
            value={product.amount}
            onChange={(e) =>
              dispatch(changeAmount(index, parseInt(e.target.value)))
            }
            min={1}
          />
        </div>
        <div
          className="delete"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          <HiX size={20} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default CartCard;
