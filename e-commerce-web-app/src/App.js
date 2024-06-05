import './App.css';
import Camera from './components/camera/Camera';
import Home from './components/home/Home';
import Mobile from './components/mobile/Mobile';
import Navbar from './components/navbar/Navbar';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Tablet from './components/tablet/Tablet';
import Laptop from './components/laptop/Laptop';
import Monitor from './components/monitor/Monitor';
// import Signup from './components/signup/Signup';
// import Login from './components/login/Login';
// import Cart from './components/cart/Cart';
import Defaultpath from './components/defaultpath/Defaultpath';
import React , { createContext, useEffect, useState } from 'react';
import axios from 'axios';
// import AddProduct from './components/addproduct/AddProduct';
// import CreateCategory from './components/createCetegory/CreateCategory';
import ProductDetail from './components/productDetail/ProductDetail';

const LazySignup = React.lazy(()=>import('./components/signup/Signup'));
const LazyLogin = React.lazy(()=>import('./components/login/Login'));
const LazyAddProduct = React.lazy(()=>import('./components/addproduct/AddProduct'));
const LazyCreateCategory= React.lazy(()=>import('./components/createCetegory/CreateCategory'));
const LazyCart = React.lazy(()=>import('./components/cart/Cart'));


const Appcontext = createContext();
function App() {
  const [cartNumber,setCartNumber] = useState(0);
  const [currentPath, setCurrentPath] = useState("");


  const getCartNumber = async () => {
    try {
      // const ls = localStorage.getItem('userInfo');
      // const userinfo = JSON.parse(ls);
      // const res = await axios.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=${userinfo.custId}`);
      const res = await axios.get(`https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=156`);
      console.log(res.data.data)
      const cartArray = res.data.data
      setCartNumber(cartArray.length);
    } catch (error) {
    }
  }

  const setActiveTab=(pathNamefromNavbar)=>{
    const urlString = window.location.href;
    const url = new URL(urlString);
    console.log(url.pathname);
    if(pathNamefromNavbar){
      setCurrentPath(pathNamefromNavbar);

    }else{
      setCurrentPath(url.pathname);
    }
    
  }

  return (
    <div>
       <Appcontext.Provider  value={{cartNum:cartNumber,getCartNum:getCartNumber,curntPath:currentPath,setActiveTb:setActiveTab}}>
     <BrowserRouter>
     <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/Mobile' element={<Mobile></Mobile>}></Route>
      {/* <Route path='/Mobile/productdetail' element={<MobileDetail></MobileDetail>}></Route> */}
      <Route path='/Camera' element={<Camera></Camera>}></Route>
      <Route path='/Tablet' element={<Tablet></Tablet>}></Route>
      <Route path='/Laptop' element={<Laptop></Laptop>}></Route>
      <Route path='/Monitor' element={<Monitor></Monitor>}></Route>
      {/* <Route path='/signup' element={<Signup></Signup>}></Route> */}
      <Route path='/signup' element={<React.Suspense fallback="loading..."><LazySignup /></React.Suspense>}></Route>
      {/* <Route path='/login' element={<Login></Login>}></Route> */}
      <Route path='/login' element={<React.Suspense fallback="loading..."><LazyLogin /></React.Suspense>}></Route>
      {/* <Route path='/cart' element={<Cart></Cart>}></Route> */}
      <Route path='/cart' element={<React.Suspense><LazyCart /></React.Suspense>}></Route>
      {/* <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route> */}
      <Route path='/addproduct' element={<React.Suspense><LazyAddProduct /></React.Suspense>}></Route>
      {/* <Route path='/createCategory' element={<CreateCategory></CreateCategory>}></Route> */}
      <Route path='/createCategory' element={<React.Suspense><LazyCreateCategory /></React.Suspense>}></Route>
      <Route path='/productDetail' element={<ProductDetail></ProductDetail>}></Route>
      {/* <Route path=></Route> */}
      <Route path='*' element={<Defaultpath></Defaultpath>}>  </Route>
    </Routes>
    </BrowserRouter>
    </Appcontext.Provider>
    </div>
  );
}

export default App;
export {Appcontext};