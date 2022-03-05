import React, { useState, useEffect } from "react";
import { Route } from "wouter";
import Navbar from "../components/navbar/Navbar";
import Home from "./home/Home";
import Cart from "./cart/Cart";
import Results from "./results/Results";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Product from "./product/Product";
import Profile from "./profile/Profile";
import Footer from "../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/userActions";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Router = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) =>
      user ? setLoggedIn(true) : setLoggedIn(false)
    );
  }, []);

  const user = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  useState(() => {
    if (!user && loggedIn) {
      dispatch(getUser(auth.currentUser.uid));
    }
  }, [loggedIn]);

  return (
    <div className="page">
      <div className="content-wrapper">
        <Navbar />
        <Route path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/results/:query">
          {(params) => <Results query={params.query} />}
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/product/:id">
          {(params) => <Product id={params.id} />}
        </Route>
      </div>
      <Footer />
    </div>
  );
};

export default Router;
