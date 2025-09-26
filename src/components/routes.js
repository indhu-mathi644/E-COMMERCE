import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Electronics from "../pages/Electronics";
import Mensclothes from "../pages/mensclothes";
import Womensclothing from "../pages/womensclothing";

import Jewellery from "../pages/jewells";
import ProductDetails from "../pages/productDetails";
import AllProducts from "../pages/Allproduct";



function RoutingApp() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="electronics" element={<Electronics />} /> 
          <Route path="men's clothing" element={<Mensclothes />} />
          <Route path="women's clothing" element={<Womensclothing/>} />
          <Route path="jewelery" element={<Jewellery/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
          <Route path="Allproduct" element={<AllProducts/>} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default RoutingApp;