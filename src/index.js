import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Route } from "wouter";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./index.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Results from "./pages/results/Results";
import reportWebVitals from "./reportWebVitals";
import { store, persistor } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
          </div>
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
