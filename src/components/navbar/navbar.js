import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import "./navbar.css";
import { HiSearch, HiUserCircle, HiShoppingCart } from "react-icons/hi";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import useFirebaseFetch from "../../utils/useFirebaseFetch";
import { collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [, setLocation] = useLocation();
  const cart = useSelector((state) => state.cart);
  const [phrase, setPhrase] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const categories = useFirebaseFetch(collection(db, "categories"));

  const handleChange = (event) => {};
  const closeMenu = () => setShowCategories(false);

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) =>
      user ? setLoggedIn(true) : setLoggedIn(false)
    );
  }, []);

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
            <span
              onClick={() =>
                loggedIn ? setLocation("/profile") : setLocation("/login")
              }
              className="navbar-icon-link"
            >
              <HiUserCircle size={22} className="icon" />
              <div>{loggedIn ? "Profile" : "Log in"}</div>
            </span>
          </div>
          <Link
            href="/cart"
            onClick={() => closeMenu()}
            className="navbar-icon-link"
          >
            <HiShoppingCart size={22} />
            <div>
              Cart <span className="goods-amount">{cart.length}</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="category-container">
        <div
          className="categories"
          onClick={() => setShowCategories(!showCategories)}
        >
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
