import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import AddToCart from "./components/AddToCart";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <nav>
            <Link to="/">All Products</Link>
            <Link to="/cart">Add to Cart</Link>
            <Link to="/add-product">Add Product</Link>
          </nav>
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/cart" element={<AddToCart />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
