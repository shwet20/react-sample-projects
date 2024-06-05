import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
           <div className="container">
          <section className="home" id="home">
          <div className="content text-center">
              <Link className="btn" to="/dataentryform">
                <button className="exp-btn">Manage Customers</button>
              </Link>
            </div> 
            </section>
            </div>
        </>
    );
};

export default Home;