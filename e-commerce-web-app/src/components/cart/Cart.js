import React, { useEffect, useState } from "react";
import "./cart.css";
import { Apimethods } from "../../other/Apimethods";
import { ImCross } from "react-icons/im";
import axios from "axios";

const Cart = () => {
  const [cartDataa, setCartDataa] = useState([]);
  const priceArr = [];
  // https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=156
  useEffect(() => {
    const ls = localStorage.getItem('userInfo');
      const userinfo = JSON.parse(ls);
    Apimethods(
      "get",
      `https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=${userinfo.custId}`
    )
      .then((data) => {
        // setProduct(data);
        console.log(data);
        setCartDataa(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const subToatl = (item) => {
    const price = JSON.parse(item.productPrice);
    const quantity = JSON.parse(item.quantity);
    const subPrice = price * quantity;
    priceArr.push(subPrice);
    return subPrice;
  };

  const Total = () => {
    let y = 0;
    // for (let x =0; x < priceArr.length; x++){
    //   y = y + priceArr[x];
    // }
    for (let x of priceArr) {
      y = y + x;
    }
    return y;
  };

  const deleteFromCart =async(item, index)=>{
    // https://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductFromCartById?id=2455
    console.log(item.cartId)
    console.log(cartDataa[index].cartId)
    try {
      const baseUrl = 
          "https://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductFromCartById?";
          const cartid = item.cartId
        const response = await axios.get(baseUrl, { params: { id: cartid } })
        Apimethods(
          "get",
          `https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=${item.custId}`
        )
          .then((data) => {
            // setProduct(data);
            console.log(data);
            setCartDataa(data);
          })
          .catch((error) => {
            console.log(error);
          });   
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      <div>
        <div className="row">
          {cartDataa.length > 0 &&
            cartDataa.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card mt-3 col-md-8 offset-2 p-3"
                  style={{ width: "45rem" }}
                >
                  <div className="ml-auto"></div>
                  <div style={{ display: "flex" }}>
                    <div className="me-auto">
                      <div>
                        <img
                          className="card-img-top"
                          src={item.productImageUrl}
                          alt="Card image cap"
                          height="150px"
                          width="120px"
                        />
                      </div>
                    </div>
                    <div className="ml-auto">
                      {/* <div className="card-body"> */}
                      <div  style={{ display: "flex" }}>
                        <h5 className="card-title me-auto" style={{fontWeight:"649"}}>
                          {item.categoryName}
                        </h5>
                        <p className="text-danger ml-auto"
                        onClick={()=>deleteFromCart(item,index)}
                         style={{fontSize:"12px"}}>
                          <ImCross />
                        </p>
                      </div>
                      <h6>{item.productName}</h6>
                      <div style={{display:"flex"}}>
                      <h6 className=" me-auto">
                      Price :{" "}
                        <span className="text-primary fw-bold" style={{fontSize:"17px"}}>
                          {item.productPrice}
                        </span>
                      </h6>
                      <h6 className=" ml-auto">
                        Quantity :{" "}
                        <span className="text-primary fw-bold" style={{fontSize:"17px"}}>{item.quantity}</span>
                      </h6>
                      </div>
                      <h6 className="text-end">
                        SubTotal :{" "}
                        <span className="text-danger fw-bold" style={{fontSize:"17px"}}>{subToatl(item)}</span>
                      </h6>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="text-end col-8 ms-5 ps-5 mt-2">
            <h4>
              Total Amount : <span className="text-danger fw-bold">{Total()}</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
