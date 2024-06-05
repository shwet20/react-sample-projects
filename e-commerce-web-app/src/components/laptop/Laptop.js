import React, { useContext, useEffect, useState } from "react";
import "./laptop.css";
import axios from "axios";
import { Apimethods } from "../../other/Apimethods";
import { Appcontext } from "../../App";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import HOC from "../../other/HOC";
import { useNavigate } from 'react-router-dom';

const Laptop = () => {
  const cartNumb = useContext(Appcontext);
  const useInfo = localStorage.getItem("userInfo");
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(0);
  const [isAdmin,setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isadmin = localStorage.getItem("isAdmin");
    if(isadmin){
      setIsAdmin(true);
    }
    cartNumb.setActiveTb("Laptop");
    Apimethods(
      "get",
      "https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=4"
    )
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const increaseCount = (index) => {
    setProduct((prevState) => {
      let updateMobileData = prevState.map((item, ind) => {
        if (ind === index) {
          let quantity = item.quantity ? item.quantity + 1 : 1;
          setQty(quantity);
          return { ...item, quantity: quantity };
        } else {
          return { ...item };
        }
      });
      return updateMobileData;
    });
  };

  const decreaseCount = (index) => {
    setProduct((prevState) => {
      let updateMobileData = prevState.map((item, ind) => {
        if (ind === index) {
          let quantity = item.quantity ? item.quantity - 1 : 0;
          setQty(quantity);
          return { ...item, quantity: quantity };
        } else {
          return { ...item };
        }
      });
      return updateMobileData;
    });
  };

  const addToCart = async (item) => {
    try {
      const getCustId = JSON.parse(useInfo);
      console.log("custid" + getCustId);
      let obj = {
        CustId: getCustId.custId,
        ProductId: item.productId,
        Quantity: item.quantity,
        AddedDate: new Date(),
      };
      const response = await axios.post(
        "https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart",
        obj
      );
      cartNumb.getCartNum();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (index) => {
    try {
      console.log(product[index].productId);
      // const productid = JSON.parse(product[index].productId)
      const productid = product[index].productId;
      console.log(productid);
      const baseUrl =
        "https://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductById?";
      const response = await axios.get(baseUrl, { params: { id: productid } });
      console.log(response.data.message);
      Apimethods(
        "get",
        "https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProductsByCategoryId?id=4"
      )
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const movetoDetails = (item)=>{
    navigate('/productDetail');
    localStorage.setItem("product",JSON.stringify(item));
  }

  return (
    <div className="container">
      <div className="row">
        {product.length > 0 &&
          product.map((item, index) => {
            return (
              <div
                key={index}
                className="card col-md-4 col-sm-4 mt-3 mx-2 px-2"
                style={{ width: "18rem" }}
                
              >
                <div style={{ display: "flex" }}>
                  <div className="me-auto">
                    <img
                      className="card-img-top mt-3 px-2"
                      src={item.productImageUrl}
                      alt="Card image cap"
                      height="250px"
                      width="230px"
                      onClick={()=>movetoDetails(item)}
                    />
                  </div>
                  {isAdmin &&
                  <div className="text-end">
                    <p
                      onClick={() => deleteHandler(index)}
                      className="text-danger ml-auto"
                      style={{ fontSize: "12px" }}
                    >
                      <ImCross />
                    </p>
                  </div>
          }
                </div>
                <div className="card-body">
                  <h5 className="card-title" onClick={()=>movetoDetails(item)}>{item.productShortName}</h5>
                  <h6 onClick={()=>movetoDetails(item)}>{item.productName}</h6>
                  <h6 className="text-start">
                    Price :{" "}
                    <span className="text-danger fw-bold">
                      {item.productPrice}
                    </span>
                  </h6>
                  {/* <p className="card-text">{item.productDescription}</p> */}
                  {useInfo !== null && (
                    <div style={{ display: "flex" }}>
                      <div
                        className="btn-group m-0 me-auto"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button m-0"
                          onClick={() => increaseCount(index)}
                          className="btn text-primary"
                        >
                          <FaPlus />
                        </button>
                        <button
                          type="button m-0"
                          className="btn text-dark fw-bold"
                        >
                          {item.quantity ? item.quantity : 0}
                        </button>
                        <button
                          type="button m-0"
                          onClick={() => decreaseCount(index)}
                          className="btn text-primary"
                        >
                          {/* <FaMinus /> */}
                          <FaMinus />
                        </button>
                      </div>
                      <div className="ml-auto">
                        <button
                          disabled={item.quantity ? false : true}
                          className="btn btn-primary m-0"
                          onClick={() => addToCart(item)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default HOC(Laptop);
