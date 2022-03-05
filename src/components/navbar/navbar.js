import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import "./navbar.css";
import {
  HiSearch,
  HiUserCircle,
  HiShoppingCart,
  HiMenuAlt4,
} from "react-icons/hi";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
import CategoryList from "./CategoryList";
import useFirebaseFetch from "../../utils/useFirebaseFetch";
import { collection } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import MobileMenu from "./MobileMenu";
import useOutsideClick from "../../utils/useOutsideClick";
import useButtonClicked from "../../utils/useButtonKlicked";

const Navbar = () => {
  const [, setLocation] = useLocation();
  const cart = useSelector((state) => state.cart);
  const [phrase, setPhrase] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const categories = useFirebaseFetch(collection(db, "categories"));

  const handleChange = (event) => {
    if (!showSearchBox) setShowSearchBox(true);
    setShowCategories(false);
    setPhrase(event.target.value);
  };
  const closeMenu = () => setShowCategories(false);

  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) =>
      user ? setLoggedIn(true) : setLoggedIn(false)
    );
  }, []);

  //handling search box
  useEffect(() => {
    if (phrase.length < 1) setShowSearchBox(false);
  }, [phrase]);
  const searchResultsRef = useRef();
  useOutsideClick(searchResultsRef, () => setShowSearchBox(false));
  useButtonClicked("Enter", () => {
    setLocation(`/results/${phrase}`);
    setShowSearchBox(false);
  });

  //handling categories list
  const categoriesRef = useRef();
  useOutsideClick(categoriesRef, () => setShowCategories(false));

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
            placeholder="rock, metal..."
          />
          <HiSearch size={18} />
          {showSearchBox && (
            <div ref={searchResultsRef} className="search-box-results">
              <SearchBox query={phrase} close={() => setShowSearchBox(false)} />
            </div>
          )}
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
        <div
          className="burger-menu"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <HiMenuAlt4 size={24} />
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
        <div ref={categoriesRef}>
          <CategoryList close={closeMenu} categories={categories} />
        </div>
      )}
      {showMobileMenu && (
        <MobileMenu
          close={() => setShowMobileMenu(false)}
          loggedIn={loggedIn}
        />
      )}
    </div>
  );
};

export default Navbar;
