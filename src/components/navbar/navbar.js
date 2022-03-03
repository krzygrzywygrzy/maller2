import React, { useState } from "react";
import { Link } from "wouter";
import "./navbar.css";
import { HiSearch, HiUserCircle, HiShoppingCart } from "react-icons/hi";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import useFirebaseFetch from "../../utils/useFirebaseFetch";
import { collection } from "firebase/firestore/lite";
import { db } from "../../firebase";

const Navbar = () => {
  const basket = useSelector((state) => state.basket);
  const [phrase, setPhrase] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const categories = useFirebaseFetch(collection(db, "categories"));

  const handleChange = (event) => {};
  const closeMenu = () => setShowCategories(false);

  return (
    <div className="navbar">
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
        <div className="categories" onClick={() => setShowCategories(true)}>
          Categories
        </div>
      </div>
      {showCategories && (
        <CategoryList close={closeMenu} categories={categories} />
      )}
    </div>
  );
};

export default Navbar;
