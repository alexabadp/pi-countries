import React from "react";
import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <div className="container__background-triangle">
        <div className="triangle triangle1"></div>
        <div className="triangle triangle2"></div>
        <div className="triangle triangle3"></div>
      </div>
      <div className="container__cards">
        <div className="landing__card">
          <div className="cover__card">
            <img
              src="https://www.vuelaviajes.com/wp-content/2015/09/videos-turisticos.jpg"
              alt=""
            />
          </div>
          <h2>DESTINOS</h2>
          <p>
            Come and discover the best places in the world to do your favorite
            hobbies
          </p>
          <hr />
          <div className="footer__card">
            <Link to="/home" id="click" className="link">
              <button className="button">Welcome</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
