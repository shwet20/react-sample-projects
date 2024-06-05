import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import logo from "../../assets/react-logo.svg";

const Home = () => {
  return (
    <div>
      <div className="container text-center">
        <section className="home" id="home">
          {/* <div className="content">
            <h3>
              Begin your <span id="diff">S</span>hopping with us
            </h3>
            <p>Explore the trend with us for the best shopping experience</p>
          </div> */}
          <div className="video-container">
            <img src={logo}></img>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;