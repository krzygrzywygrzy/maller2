import React from "react";
import ProductCard from "../../components/productCard/ProductCard";
import useAlgoliaPhraseSearch from "../../utils/useAlgoliaPhraseSearch";
import "./results.css";

const Results = ({ query }) => {
  const { data, loading, error } = useAlgoliaPhraseSearch(query);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error}</div>;

  return data ? (
    <div className="container">
      {data.length > 0 ? (
        <div className="product-grid">
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-list">
          <span>Nothing found...</span>
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};

export default Results;
