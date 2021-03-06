import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "wouter";
import "./profile.css";
import { auth } from "../../firebase";
import { getUser } from "../../store/actions/userActions";
import Orders from "./Orders";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [, setLocation] = useLocation();
  // eslint-disable-next-line
  const goHome = useCallback(() => setLocation("/"), []);
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (!u) goHome();
      else {
        if (!user.data) dispatch(getUser(u.uid));
      }
    });
    // eslint-disable-next-line
  }, [goHome, dispatch]);

  useEffect(() => {
    if (!user.data) document.title = "loading... | maller";
    else
      document.title = user.data.name + " " + user.data.surname + " | maller";

    // eslint-disable-next-line
  }, [user.data]);

  const handleLogOut = () => {
    signOut(auth);
    dispatch({ type: "logout_user" });
  };

  if (user.loading) return <div className="container">Loding...</div>;
  if (user.error) return <div className="container">Error: {user.error}</div>;

  return user.data ? (
    <div className="container profile">
      <section className="profile-orders">
        <div className="title">Your orders</div>
        <Orders />
      </section>
      <div>
        {user.data && (
          <div className="profile-info">
            <div className="info-name">
              <span>
                {user.data.name} {user.data.surname}
              </span>
              <button onClick={handleLogOut}>log out</button>
            </div>
            <div className="info-email">
              <span>email: {user.data.email}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Profile;
