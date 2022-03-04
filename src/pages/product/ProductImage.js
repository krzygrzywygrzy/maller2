import React from "react";
import useGetImageUrl from "../../utils/useGetImageUrl";
import "./product.css";

const ProductImage = ({ image }) => {
  const url = useGetImageUrl(image);

  return (
    <div className="mid-section-photos">
      {image && url ? <img alt="" src={url} /> : <div className="no-img"></div>}
    </div>
  );
};

export default ProductImage;
