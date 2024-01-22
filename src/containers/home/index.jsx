import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";
const Home = () => {
  const navigate = useNavigate();
  const toContactpage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Atanu
          <br />A Developer
        </h1>
      </div>

      <div className="home__contact-me">
        <button onClick={toContactpage}>Lets Talk</button>
      </div>
    </section>
  );
};

export default Home;
