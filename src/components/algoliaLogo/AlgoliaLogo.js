import React from "react";
import algolia_logo from "../../assets/logo-algolia-nebula-blue-whitespaces.png";
import "./algoliaLogo.css";

const AlgoliaLogo = () => {
  return (
    <div className="algolia-logo">
      <span>powered by</span>
      <img alt="" src={algolia_logo} />
    </div>
  );
};

export default AlgoliaLogo;
