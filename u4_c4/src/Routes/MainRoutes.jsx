import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About';
import { Products } from "../components/Products";
import { Navbar } from "../components/Navbar";

const MainRoutes = () => {

  return <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/products/men' element={<Products />}></Route>
      <Route path='/products/women' element={<Products />}></Route>
      <Route path='/products/kids' element={<Products />}></Route>
      <Route path='/products/homedecor' element={<Products />}></Route>
    </Routes>
  </>;
};
export { MainRoutes };
