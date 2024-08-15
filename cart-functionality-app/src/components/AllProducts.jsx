import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/products/productsSlice";
import { addToCart } from "../features/cart/cartSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [serchItem, setSearchItem] = useState("");
  const [newProducts, setNewProducts] = useState();

  useEffect(() => {
    setNewProducts(products);
  }, [])

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const serchFunction = () => {
    // setSearchItem(serchItem);
    const filteredProduct = []
    newProducts.filter(element => {
      console.log(serchItem);
      console.log(element.details.replace(/\s+/g, '').toLowerCase());
      if (element.details.replace(/\s+/g, '').toLowerCase() == serchItem.toLowerCase()) {
        console.log("inside block element :  ",element)
        filteredProduct.push(element)
      } else {
        console.log("not working :", element)
      }
    });
    setNewProducts(filteredProduct);
  }


  return (
    <React.Fragment>
      <div>
        <h1>All Products</h1>
        <input type="text" defaultValue={serchItem} onChange={(e) => setSearchItem(e.target.value)} />
        <span onClick={() => serchFunction()}>Search</span>
        {productStatus === "loading" && <div>Loading...</div>}
        {productStatus === "succeeded" && (
          <div className="product-grid">
            {newProducts?.map((product) => (
              <div key={product.pid} className="product-card">
                <div>
                <img src={product.photo} alt={product.pame} height={"100px"} className="product-image"/>
                </div>
                <h3>{product.pame}</h3>
                <p>{product.details}</p>
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
        {productStatus === "failed" && <div>{error}</div>}
      </div>
    </React.Fragment>
  );
};

export default AllProducts;
