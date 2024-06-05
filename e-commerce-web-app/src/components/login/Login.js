import React, { useEffect, useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import {  BsFillPersonPlusFill } from "react-icons/bs";
import axios from "axios";

const Login = () => {

  const [formData, setFormData] = useState({ "UserName": "","UserPassword": ""});
  const [allInfo, setAllInfo] = useState([]);
  const [error, setError] = useState([]);

  const onChangeHandler = (event, fieldname) => {
    console.log(event.target.value, ">>", fieldname);
    setFormData((prevState) => ({
      ...prevState,
      [fieldname]: event.target.value,
    }));
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    let errorArray = [];
    const { UserName, UserPassword } = formData;
    for (let x in formData) {
      if (formData[x] === "") {
        errorArray.push(x);
      }
    }
    if (errorArray.length > 0) {
      setError(errorArray);
    } else {
      setAllInfo((prevState) => [...prevState, formData]);
      setFormData({ "UserName": "","UserPassword": "" });
      setError([]);
    }

    if (errorArray.length <= 0) {

      if(UserName == "admin" && UserPassword=="1234"){
        //   adminlogic

        localStorage.setItem("isAdmin",JSON.stringify(true));
        alert("Login Succesfull");
        window.location.href = "/";
    }

    // else{
      //api hit 
     let reqBdy ={
      "UserName":formData.UserName,
      "UserPassword": formData.UserPassword
     }
     const result  = await axios.post(`https://onlinetestapi.gerasim.in/api/Ecomm/Login`,reqBdy);
     const response = result.data
     if(response.data !== null  && response.result ){
         localStorage.setItem("userInfo",JSON.stringify(response.data));
         alert("Login Succesfull");
         window.location.href = "/";
        
     }else{
      alert(response.message)
     }
    //  }
    }
    
  };

  const showError = (keyname) => {
    return error.indexOf(keyname) > -1 ? true : false;
  };

  return (
      <div className="login-container">
        <div className="row mt-5">
          <div className="col-md-4 col-sm-6 offset-4">
            <h4 className="text-center mt-4"> Login here </h4>
            <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Uername</label>
                <input
                  type="text"
                  value={formData.UserName}
                  onChange={(e) => onChangeHandler(e, "UserName")}
                  className={
                    showError("UserName")
                      ? "form-control is-invalid mt-2"
                      : "form-control mt-2"
                  }
                  placeholder="Enter UserName"
                />
                {showError("UserName") && (
                  <div
                    className="invalid-feedback"
                  >
                    Please enter valid UserName
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="text"
                  value={formData.UserPassword}
                  onChange={(e) => onChangeHandler(e, "UserPassword")}
                  className={
                    showError("UserPassword")
                      ? "form-control is-invalid mt-2"
                      : "form-control mt-2"
                  }
                  placeholder="Enter password"
                />
                {showError("UserPassword") && (
                  <div
                    className="invalid-feedback"
                  >
                    Please provide correct Password
                  </div>
                )}
              </div>
                <button type="submit" className="btn btn-primary mt-3 w-100">
                  Submit
                </button>
            </form>
            </div>
            <div className="text-center">
        <Link to="/signup" className="text-decoration-none">
          <span>Sign up</span>
          <span className="fs-4 mt-0"><BsFillPersonPlusFill /></span>
        </Link>
      </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
