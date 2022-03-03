import React, { useState } from "react";
import { Link } from "wouter";
import "./navbar.css";
import { HiSearch, HiUserCircle, HiShoppingCart } from "react-icons/hi";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";

const Navbar = () => {
  const basket = useSelector((state) => state.basket);
  const [phrase, setPhrase] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleChange = (event) => {};
  const closeMenu = () => {};

  return (
    <div className="navbar unselectable">
      <div className="navbar-container">
        <div className="navbar-title ">
          <Link href="/">maller</Link>
        </div>
        <div className="search-box">
          <input
            type="text"
            onChange={handleChange}
            value={phrase}
            placeholder="BMTH, Neighbourhood..."
          />
          <HiSearch size={18} />
          {showSearchBox && <SearchBox />}
        </div>
        <div className="navbar-options">
          <div className="navbar-account">
            <span onClick={() => {}} className="navbar-icon-link">
              <HiUserCircle size={22} className="icon" />
              <div>Log in</div>
            </span>
          </div>
          <Link
            href="/basket"
            onClick={() => closeMenu()}
            className="navbar-icon-link"
          >
            <HiShoppingCart size={22} />
            <div>
              Cart <span className="goods-amount">{basket.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="category-container">
        <div className="categories">Categories</div>
      </div>
    </div>
  );
};

export default Navbar;
