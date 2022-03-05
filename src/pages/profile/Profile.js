import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "wouter";
import "./profile.css";
import { auth } from "../../firebase";
import { getUser } from "../../store/actions/userActions";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [, setLocation] = useLocation();
  const goHome = useCallback(() => setLocation("/"), []);
  useEffect(() => {
    onAuthStateChanged(auth, (u) => {
      if (!u) goHome();
      else {
        if (!user.data) dispatch(getUser(u.uid));
      }
    });
  }, [goHome, dispatch]);

  useEffect(() => {
    if (!user.data) document.title = "loading... | maller";
    else
      document.title = user.data.name + " " + user.data.surname + " | maller";
  }, []);

  const handleLogOut = () => {
    signOut(auth);
    dispatch({ type: "logout_user" });
  };

  if (user.loading) return <div className="container">Loding...</div>;
  if (user.error) return <div className="container">Error: {user.error}</div>;

  return (
    <div className="container profile">
      <div>
        <section>
          <div></div>
        </section>
      </div>
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
  );
};

export default Profile;
