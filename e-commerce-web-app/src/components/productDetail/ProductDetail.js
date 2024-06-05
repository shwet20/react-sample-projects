import React, { useContext, useEffect, useState } from "react";
import "./productDetail.css";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

const ProductDetail = () => {
  const product = localStorage.getItem("product");
  const productInfo = JSON.parse(product);

  // const detail = useLocation();
  // const [productDetail, setProductDetil] = useState({});
  // console.log(detail);
  // console.log(detail.state);

  useEffect(() => {
    console.log(product);
    console.log(productInfo.productName);
    // if (detail.state !== null) {
      // setProductDetil(detail.state);
    // } else {
      // console.log(detail.search);
      // const p = detail.search;
      // const q = p.slice(4);
      // console.log(q)
      // api call krna hai product by id
      // setProductDetil(response)
      // https://onlinetestapi.gerasim.in/api/Ecomm/GetProductById?id=155
      // try {
      //   const response = await axios.get('https://onlinetestapi.gerasim.in/api/Ecomm/GetProductById?',{params:{id:q}})
      //    console.log(response.message)
      // } catch (error) {
      //   console.log(error)
      // }
    // }
  }, []);

  return (
    <div className="container productdetail-container p-5 rounded-5">
      {/* {"productId":215,"productSku":"Apple iPhone 14 ",
      "productName":"Apple iPhone 14 Plus (128 GB) - Blue",
      "productPrice":70000,
      "productShortName":"Apple iPhone 14 ",
      "productDescription":"bout thisstance",
      "createdDate":"2023-11-28T12:08:37.56",
      "deliveryTimeSpan":"1 weak",
      "categoryId":1,
      "productImageUrl":"https://m.media-amazon.com/images/I/61BGE6iu4AL._SX679_.jpg",
      "categoryName":"Mobile"} */}

      <div className="row mt-5">
        <div className="col-md-4 me-auto product-img">
          <img
            className="p-4"
            src={productInfo.productImageUrl}
            alt="product img"
            height="100%"
            width="100%"
          />
        </div>
        <div className=" col-md-8 ml-auto mt-3">
          <div className="product-description">
            <span
              className="text-success"
              style={{
                fontWeight: "600",
                fontFamily: "monospace",
                fontSize: "17px",
              }}
            >
              {productInfo.categoryName}
            </span>
            <h2 className="text-primary fw-bold">
              {productInfo.productShortName}
            </h2>
            <p className="text-dark" style={{ fontFamily: "serif" }}>
              {productInfo.productDescription}
            </p>
            <p className="text-secondary" style={{ fontFamily: "initial" }}>
              Delivery within : {productInfo.deliveryTimeSpan}
            </p>
          </div>
          <div className="product-configuration">
            <div className="cable-config">
              <h6 className="text-dark" style={{ fontFamily: "revert" }}>
                {productInfo.productName}
              </h6>
            </div>
          </div>
          <div className="product-price mt-4">
            <p className="text-dark" style={{ fontWeight: "500" }}>
              Price :{" "}
              <span
                className="text-danger"
                style={{ fontWeight: "700", fontFamily: "revert" }}
              >
                {productInfo.productPrice}
              </span>
            </p>
            <span className="fw-bold text-success" style={{ fontSize: "17px" }}>
              Buy Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
