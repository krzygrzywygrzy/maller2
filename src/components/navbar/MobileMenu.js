import React, { useState } from "react";
import "./navbar.css";
import { HiSearch, HiShoppingCart, HiUserCircle } from "react-icons/hi";
import { useLocation } from "wouter";
import { useSelector } from "react-redux";
import useFirebaseFetch from "../../utils/useFirebaseFetch";
import { db } from "../../firebase";
import { collection } from "firebase/firestore";

const MobileMenu = ({ close, loggedIn }) => {
  const cart = useSelector((state) => state.cart);
  const [, setLocation] = useLocation();
  const [phrase, setPhrase] = useState("");

  const categories = useFirebaseFetch(collection(db, "categories"));

  return (
    <div className="mobile-menu">
      <div className="mobile-menu-container">
        <div className="mobile-menu-item mobile-menu-search">
          <input
            type="text"
            placeholder="search..."
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
          />
          <HiSearch size={18} />
        </div>
        <div
          className="mobile-menu-item"
          onClick={() => {
            setLocation("/cart");
            close();
          }}
        >
          <HiShoppingCart size={18} />
          <div>
            Cart <span className="goods-amount">{cart.length}</span>
          </div>
        </div>
        <div
          className="mobile-menu-item"
          onClick={() => {
            setLocation(loggedIn ? "/profile" : "/login");
            close();
          }}
        >
          <HiUserCircle size={18} />{" "}
          <div>{loggedIn ? "Profile" : "Log in"}</div>
        </div>
        <div className="mobile-menu-category">Products</div>
        {categories.data &&
          categories.data.map((category) => (
            <div
              className="mobile-menu-item"
              key={category.name}
              onClick={() => {
                setLocation(`/results/${category.name}`);
                close();
              }}
            >
              {category.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MobileMenu;
