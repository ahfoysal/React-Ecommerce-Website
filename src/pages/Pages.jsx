import React from 'react'
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Product from "./Product";
import{ Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Cart from './Cart';

function Pages(props) {
  const location = useLocation();
  
  const addToCart = props.addToCart;
  const cart = props.cart;


  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
       <Route path="/" element={<Home addToCart={addToCart}/>}/>
       <Route path="/cuisine/:type" element={<Cuisine />} />
       <Route path="/searched/:search" element={<Searched addToCart={addToCart}/>} />
       <Route path="/product/:name" element={<Product addToCart={addToCart}/>} />
       <Route path="/cart" element={<Cart cart={cart}/>} />



        </Routes></AnimatePresence>
  );
};

export default Pages