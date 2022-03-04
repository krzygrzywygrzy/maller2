import React from "react";
import useGetImageUrl from "../../utils/useGetImageUrl";
import "./product.css";

const ProductImage = ({ image }) => {
  const url = useGetImageUrl(image);

  return (
    <div className="mid-section-photos">
      {image && url ? (
        <img alt="" src={url} />
      ) : (
        <div className="no-img">No image provided</div>
      )}
    </div>
  );
};

export default ProductImage;
