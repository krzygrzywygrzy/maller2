import React, { useEffect } from "react";
import "./home.css";
import useFirebaseFetch from "../../utils/useFirebaseFetch";
import { collection } from "firebase/firestore";
import { db } from "../../firebase";
import HomeMain from "../../components/homeCards/HomeMain";
import HomeSub from "../../components/homeCards/HomeSub";

const Home = () => {
  useEffect(() => {
    document.title = "home | maller";
  }, []);

  const { data, loading, error } = useFirebaseFetch(collection(db, "home"));

  if (loading) return <div className="container home">Loading...</div>;
  if (error) return <div className="container home">Error: {error}</div>;

  //mocked home page
  return data ? (
    <div className="container home">
      <HomeMain item={data[0]} />
      <HomeSub item={data[1]} />
    </div>
  ) : (
    <></>
  );
};

export default Home;
