import React from "react";
import "./searchResultCard.css";
import ProductImage from "../../pages/product/ProductImage";
import { useLocation } from "wouter";

const SearchResultCard = ({ result, close }) => {
  const [, setLocation] = useLocation();
  const redirect = () => {
    setLocation(`/product/${result.objectID}`);
    close();
  };

  return (
    <div className="search-result-card" onClick={redirect}>
      <div className="search-result-image">
        <ProductImage image={result.image} />
      </div>
      <div className="search-result-card-info">
        <span>{result.name}</span>
      </div>
    </div>
  );
};

export default SearchResultCard;
