import React from "react";
import { Link } from "wouter";
import ProductImage from "../../pages/product/ProductImage";
import "./homeCards.css";

const HomeSub = ({ item }) => {
  return (
    <Link href={`/product/${item.link}`} className="home-sub">
      <div className="home-sub-image">
        <ProductImage image={item.image} />
      </div>
      <div>{item.title}</div>
    </Link>
  );
};

export default HomeSub;
