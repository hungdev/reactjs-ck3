import React from 'react';
import {
  BrowserRouter, Routes, Route, Link
} from "react-router-dom";
import Home from './screens/Home';
import Product from './screens/Products';
import Detail from './screens/Detail';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* 
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
