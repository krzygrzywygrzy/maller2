import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "home | maller";
  }, []);

  return <div className="container">Home</div>;
};

export default Home;
