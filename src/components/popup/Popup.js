import React from "react";
import "./popup.css";

const Popup = ({ children, trigger }) => {
  return trigger ? (
    <div className="popup">
      <div>{children}</div>
    </div>
  ) : (
    <></>
  );
};

export default Popup;
