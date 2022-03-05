import React from "react";
import { Link } from "wouter";
import ProductImage from "../../pages/product/ProductImage";
import "./homeCards.css";

const HomeMain = ({ item }) => {
  return (
    <Link href={`/product/${item.link}`} className="home-main">
      <div className="home-main-image">
        <ProductImage image={item.image} />
      </div>
      <div className="home-main-info">{item.title}</div>
    </Link>
  );
};

export default HomeMain;
