import React from "react";

const CategoryList = ({ close, categories }) => {
  return <div className="category-list">{JSON.stringify(categories)}</div>;
};

export default CategoryList;
