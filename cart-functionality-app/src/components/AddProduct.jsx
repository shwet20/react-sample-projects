import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/products/productsSlice";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    pid: "",
    cid: "",
    pame: "",
    price: "",
    details: "",
    photo: "",
  
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(addProduct(formData));
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    cursor: "pointer",
  };

  return (
    <React.Fragment>
      <div>
        <h1 style={{ textAlign: "center" }}>Add Product</h1>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>
            PID:
            <input
              type="text"
              name="pid"
              value={formData.pid}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </label>
          <label style={labelStyle}>
            CID:
            <input
              type="text"
              name="cid"
              value={formData.cid}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </label>
          <label style={labelStyle}>
            Name:
            <input
              type="text"
              name="pame"
              value={formData.pame}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </label>
          <label style={labelStyle}>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </label>
          <label style={labelStyle}>
            Details:
            <input
              type="text"
              name="details"
              value={formData.details}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </label>
          <label style={labelStyle}>
            Photo:
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              style={inputStyle}
              required
            />
          </label>
          <button type="submit" style={buttonStyle}>Add Product</button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default AddProduct;
