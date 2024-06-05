import axios from "axios";
import React, { useState } from "react";

const CreateCategory = () => {
    const [formData, setFormData] = useState({
      "CategoryName": "",
  "ParentCategoryId": ""
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
          setFormData({
            "CategoryName": "",
  "ParentCategoryId": ""
          });
          setError([]);
        }
    
        console.log(formData);
        console.log(allInfo);
    
        if (errorArray.length <= 0) {
    
          try {
             //api hit
            //  https://onlinetestapi.gerasim.in/api/Ecomm/CreateNewCategory
          const result = await axios.post(`https://onlinetestapi.gerasim.in/api/Ecomm/CreateNewCategory`,formData);
          const response = result.data;
    
          if (response.message == "Category Added Successfully") {
            alert(response.message);
          } else if (response.message == "Name Already Present") {
            alert(response.message);
          }
          } catch (error) {
            console.log(error)
          }
         
        }
      };
    
      const showError = (keyname) => {
        return error.indexOf(keyname) > -1 ? true : false;
      };
    return (
        <div className="container">
      <div className="col-md-4 col-sm-6 offset-4">
         <h4 className="text-center"> Create Product </h4> 
        <div>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">CategoryName</label>
              <input
                type="text"
                value={formData.CategoryName}
                onChange={(e) => onChangeHandler(e, "CategoryName")}
                className={
                  showError("CategoryName")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter CategoryName"
              />
              {showError("CategoryName") && (
                <div className="invalid-feedback">Please enter CategoryName</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">ParentCategoryId</label>
              <input
                type="text"
                value={formData.ParentCategoryId}
                onChange={(e) => onChangeHandler(e, "ParentCategoryId")}
                className={
                  showError("ParentCategoryId")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter ParentCategoryId"
              />
              {showError("ParentCategoryId") && (
                <div className="invalid-feedback">
                  Please provide a valid ParentCategoryId
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-100">
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default CreateCategory;