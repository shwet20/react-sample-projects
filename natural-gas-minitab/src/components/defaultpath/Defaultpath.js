import "./defaultpath.css";
import React from "react";
import { Link } from "react-router-dom";
import errorimg from "../../assets/error.png";
const Defaultpath = () => {
    return (
        <div>
            <div className="e-container">
        <div className="e-message">
          <img src={errorimg} alt="" id="error-img" />
          <h1>Page not found.</h1>
          <p>Oops! There seems to be a mistake in the URL.</p>
          <p>
            Navigate back to the{" "}
            <span>
              <Link to="/">homepage</Link>
            </span>
          </p>
        </div>
      </div>  
        </div>
    );
};
export default Defaultpath;