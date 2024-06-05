import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    "ProductSku": "",
    "ProductName": "",
    "ProductPrice": "",
    "ProductShortName": "",
    "ProductDescription": "",
    "CreatedDate": new Date(),
    "DeliveryTimeSpan": "",
    "CategoryId": "",
    "ProductImageUrl": "",
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
        "ProductSku": "",
        "ProductName": "",
        "ProductPrice": "",
        "ProductShortName": "",
        "ProductDescription": "",
        "CreatedDate": "",
        "DeliveryTimeSpan": "",
        "CategoryId": "",
        "ProductImageUrl": "",
      });
      setError([]);
    }

    console.log(formData);
    console.log(allInfo);

    if (errorArray.length <= 0) {

      try {
         //api hit
      const result = await axios.post(`https://onlinetestapi.gerasim.in/api/Ecomm/CreateProduct`,formData);
      const response = result.data;

      if (response.message == "Saved Successfully") {
        alert("Added Succesfully");
      } else if (response.message == "Product Sku Code Already Present") {
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
        {/* <h4 className="text-center"> Add Product </h4> */}
        <div>
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">ProductSku</label> */}
              <input
                type="text"
                value={formData.ProductSku}
                onChange={(e) => onChangeHandler(e, "ProductSku")}
                className={
                  showError("ProductSku")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter ProductSku"
              />
              {showError("ProductSku") && (
                <div className="invalid-feedback">Please enter ProductSku</div>
              )}
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">ProductName</label> */}
              <input
                type="text"
                value={formData.ProductName}
                onChange={(e) => onChangeHandler(e, "ProductName")}
                className={
                  showError("ProductName")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter ProductName"
              />
              {showError("ProductName") && (
                <div className="invalid-feedback">
                  Please provide a valid ProductName
                </div>
              )}
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">ProductPrice</label> */}
              <input
                type="number"
                value={formData.ProductPrice}
                onChange={(e) => onChangeHandler(e, "ProductPrice")}
                className={
                  showError("ProductPrice")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter ProductPrice"
              />
              {showError("ProductPrice") && (
                <div className="invalid-feedback">
                  Please provide a valid ProductPrice
                </div>
              )}
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">ProductShortName</label> */}
              <input
                type="text"
                value={formData.ProductShortName}
                onChange={(e) => onChangeHandler(e, "ProductShortName")}
                className={
                  showError("ProductShortName")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter ProductShortName"
              />
              {showError("ProductShortName") && (
                <div className="invalid-feedback">
                  Please provide a valid ProductShortName
                </div>
              )}
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">ProductDescription</label> */}
              <input
                type="textarea"
                value={formData.ProductDescription}
                onChange={(e) => onChangeHandler(e, "ProductDescription")}
                className={
                  showError("ProductDescription")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter ProductDescription"
              />
              {showError("ProductDescription") && (
                <div className="invalid-feedback">
                  Please provide a valid ProductDescription
                </div>
              )}
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">DeliveryTimeSpan</label> */}
              <select
                type="text"
                value={formData.DeliveryTimeSpan}
                onChange={(e) => onChangeHandler(e, "DeliveryTimeSpan")}
                className={
                  showError("DeliveryTimeSpan")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter DeliveryTimeSpan"
              >
                <option value="">Select delivery time span</option>
                <option value="1 week">1 week</option>
                <option value="2 week">2 week</option>
                <option value="3 week">3 week</option>
                <option value="4 week">4 week</option>
              </select>
              {showError("DeliveryTimeSpan") && (
                <div className="invalid-feedback">
                  Please provide a valid DeliveryTimeSpan
                </div>
              )}
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">CategoryId</label> */}
              <select
                type="number"
                value={formData.CategoryId}
                onChange={(e) => onChangeHandler(e, "CategoryId")}
                className={
                  showError("CategoryId")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter CategoryId"
              >
                <option value="">Select Category</option>
                <option value="2">Camera</option>
                <option value="1">Mobile</option>
                <option value="4">Laptop</option>
                <option value="3">Tablet</option>
                <option value="5">Monitor</option>
              </select>
              {showError("CategoryId") && (
                <div className="invalid-feedback">
                  Please provide a valid CategoryId
                </div>
              )}
            </div>
            <div className="form-group">
              {/* <label htmlFor="exampleInputEmail1">ProductImageUrl</label> */}
              <input
                type="text"
                value={formData.ProductImageUrl}
                onChange={(e) => onChangeHandler(e, "ProductImageUrl")}
                className={
                  showError("ProductImageUrl")
                    ? "form-control is-invalid mt-2"
                    : "form-control mt-2"
                }
                placeholder="Enter ProductImageUrl"
              />
              {showError("ProductImageUrl") && (
                <div className="invalid-feedback">
                  Please provide a valid ProductImageUrl
                </div>
              )}
            </div>
            <button type="submit" className="btn btn-primary mt-3 w-100">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
