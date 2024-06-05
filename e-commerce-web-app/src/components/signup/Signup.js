import React, { useEffect, useState } from "react";
import "./signup.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { BsFillPersonFill, BsFillPersonPlusFill } from "react-icons/bs";

const Signup = () => {
  const [formData, setFormData] = useState({
    Name: "",
    MobileNo: "",
    Password: "",
  });
  const [allInfo, setAllInfo] = useState([]);
  const [error, setError] = useState([]);

  const onChangeHandler = (event, fieldname) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldname]: event.target.value,
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    let errorArray = [];
    for (let x in formData) {
      if (formData[x] === "") {
        errorArray.push(x);
      }
    }

    if (errorArray.length > 0) {
      setError(errorArray);
    } else {
      setAllInfo((prevState) => [...prevState, formData]);
      setFormData({ Name: "", MobileNo: "", Password: "" });
      setError([]);
    }

    if (errorArray.length <= 0) {
      //api hit
      let reqBdy = {
        Name: formData.Name,
        MobileNo: formData.MobileNo,
        Password: formData.Password,
      };
      const result = await axios.post(
        `https://onlinetestapi.gerasim.in/api/Ecomm/RegisterCustomer`,
        reqBdy
      );
      const response = result.data;

      if (response.message == "Customer Added Successfully") {
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        alert("Register Succesfull");
        window.location.href = "/";
      } else if (response.message == "Mobile No Already Present") {
        alert(response.message);
      }
    }
  };

  const showError = (keyname) => {
    return error.indexOf(keyname) > -1 ? true : false;
  };

  return (
    <div className="signup-container">
      <div className="row  mt-5">
        <div className="col-md-4 col-sm-6 offset-4">
          <h4 className="text-center"> Signup here </h4>
          <div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  value={formData.Name}
                  onChange={(e) => onChangeHandler(e, "Name")}
                  className={
                    showError("Name")
                      ? "form-control is-invalid mt-2"
                      : "form-control mt-2"
                  }
                  placeholder="Enter your name"
                />
                {showError("Name") && (
                  <div className="invalid-feedback">Please enter your Name</div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Mobile No</label>
                <input
                  type="text"
                  value={formData.MobileNo}
                  onChange={(e) => onChangeHandler(e, "MobileNo")}
                  className={
                    showError("MobileNo")
                      ? "form-control is-invalid mt-2"
                      : "form-control mt-2"
                  }
                  placeholder="Enter Mobile No"
                />
                {showError("MobileNo") && (
                  <div className="invalid-feedback">
                    Please provide a valid MobileNo
                  </div>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Set Password</label>
                <input
                  type="text"
                  value={formData.Password}
                  onChange={(e) => onChangeHandler(e, "Password")}
                  className={
                    showError("Password")
                      ? "form-control is-invalid mt-2"
                      : "form-control mt-2"
                  }
                  placeholder="Set Password"
                />
                {showError("Password") && (
                  <div className="invalid-feedback">
                    Please set your Password
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary mt-3 w-100">
                Submit
              </button>
            </form>
          </div>
          <div className="text-center">
            <Link to="/login" className="text-decoration-none">
              <span>Log in</span>
              <span className="fs-4 mt-0">
                <BsFillPersonFill />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
