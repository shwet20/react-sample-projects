import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/react-logo.svg";
import "./navbar.css";
import { BsFillPersonFill } from "react-icons/bs";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";
import { Apimethods } from "../../other/Apimethods";
import { Appcontext } from "../../App";

const Navbar = () => {
  const cartNumb = useContext(Appcontext);
  const [menuarr, setMenuarr] = useState([]);
  // const [currentPath, setCurrentPath] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    const isadmin = localStorage.getItem("isAdmin");

    if (userInfo !== null || isadmin) {
      setIsLogin(true);
    }
    if(isadmin ){
      setIsAdmin(true);
    }
    cartNumb.setActiveTb();
    cartNumb.getCartNum();
    // const urlString = window.location.href;
    // const url = new URL(urlString);
    //  console.log(url.pathname);
    // setCurrentPath(url.pathname);
    // const getData = async () => {
    //   try {
    //     const response = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory');
    //     setMenuarr(response.data.data)
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData();
    Apimethods(
      "get",
      "https://onlinetestapi.gerasim.in/api/Ecomm/GetAllCategory"
    )
      .then((data) => {
        setMenuarr(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setActiveTAB = (path) => {
    // setCurrentPath(path);
    cartNumb.setActiveTb(path);
  };

  const logout = () => {
    localStorage.clear();

    // window.location.reload();
    // setIsLogin(false);
    // window.location.href = "/Login"
    window.location.href = "/";
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand nav-logo" href="/">
            <img src={logo} alt="logo" className="logo-img"></img>
            <span className="mx-1 web-name1 ms-3 fw-bold">
              E<span className="web-name2 me-4 fw-light">Cart</span>
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-toggle="collapse"
            data-target="#navbarNav"
            onClick={toggleDropdown}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-menu">
              {menuarr.slice(0, 5).map((item, index) => {
                return (
                  <li className="nav-item" key={item.categoryId}>
                    <Link
                      className="nav-link"
                      onClick={() => setActiveTAB(item.categoryName)}
                      style={
                        cartNumb.curntPath.indexOf(item.categoryName) > -1
                          ? { color: "red" }
                          : {}
                      }
                      to={item.categoryName}
                    >
                      {item.categoryName}
                    </Link>
                  </li>
                );
              })}
              {isAdmin &&
            <div className={`collapse navbar-collapse ${dropdownOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav mr-auto">
        </ul>
        <ul className="navbar-nav">
          <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={toggleDropdown}
            >
              Admin
            </Link>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
              <Link className="dropdown-item"
               onClick={() => setActiveTAB("addproduct")}
               style={
                        cartNumb.curntPath.indexOf("addproduct") > -1
                          ? { color: "red", textDecoration: "none" }
                          : { textDecoration: "none" }
                      } 
              to="/addproduct">
              Addproduct
              </Link>
              <Link className="dropdown-item" 
               onClick={() => setActiveTAB("createCategory")}
               style={
                        cartNumb.curntPath.indexOf("createCategory") > -1
                          ? { color: "red", textDecoration: "none" }
                          : { textDecoration: "none" }
                      }
              to="/createCategory">
              CreateCategory
              </Link>
            </div>
          </li>
        </ul>
      </div>
              
                }
             
               
              {/* <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdownMenu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item nav-link" to="/addproduct">AddProduct</Link>
          <Link className="dropdown-item" to="#">Another action</Link>
        </div>
      </li> */}
            </ul>
            <ul className="d-flex mt-3">
              {!isLogin && (
                <>
                  <Link
                    to="/login"
                    onClick={() => setActiveTAB("login")}
                    className="btn text-primary btn-sm px-2 pt-0 mx-1 fs-4 fw-bold rounded-5 "
                  >
                    <BsFillPersonFill />
                  </Link>
                </>
              )}
              {isLogin && (
                <>
                {!isAdmin &&
                  <Link
                    to="/cart"
                    className={
                      cartNumb.curntPath.indexOf("cart") > -1
                        ? "btn text-danger btn-sm fs-5 rounded-circle px-2 pb-2 pt-1"
                        : "btn text-primary btn-sm fs-5 rounded-circle px-2 pb-2 pt-1"
                    }
                    onClick={() => setActiveTAB("cart")}
                  >
                    <FaCartShopping />
                    <sup>{cartNumb.cartNum}</sup>
                  </Link>
}
                  <Link
                    onClick={() => logout()}
                    className="btn text-danger btn-sm fs-5 rounded-circle px-2 pb-2 pt-1"
                  >
                    <FaArrowRightFromBracket />
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
