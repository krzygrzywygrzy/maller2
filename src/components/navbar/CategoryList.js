import React from "react";
import { Link } from "wouter";

const CategoryList = ({ close, categories }) => {
  if (categories.loading)
    return <div className="category-list">Loading...</div>;

  if (categories.error)
    return <div className="category-list">Error: {categories.error}</div>;

  return categories.data ? (
    <div className="category-list cl-section">
      <ul>
        {categories.data.map((category) => (
          <Link href={`/results/${category.name}`} onClick={close}>
            <li key={category.name}>{category.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
};

export default CategoryList;
