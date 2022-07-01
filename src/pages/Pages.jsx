import React from 'react'
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Product from "./Product";
import{ Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Cart from './Cart';
import Orders from './Orders';
import Checkout from './Checkout';
import Shop from '../components/Shop';

function Pages({getStoredCart, setCart,   addToCart,cart, getCart, clearTheCart, removeFromDb, allProducts }) {
  const location = useLocation();
  // const setCart = props.setCart

  // const addToCart = props.addToCart;
  // const cart = props.cart;


  return (
    // <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
       <Route path="/" element={<Home addToCart={addToCart} allProducts={allProducts}/>}/>
       <Route path="/cuisine/:type" element={<Cuisine />} />
       <Route path="/searched/:search" element={<Searched addToCart={addToCart}/>} />
       <Route path="/product/:name" element={<Product addToCart={addToCart} allProducts={allProducts}/>} />
       <Route path="/shop/" element={<Shop allProducts={allProducts}/>} />
       <Route path="/order/:name" element={<Orders addToCart={addToCart}/>} />
       <Route path="/cart" element={<Cart getStoredCart={getStoredCart} cart={cart} setCart={setCart} clearTheCart={clearTheCart} getCart={getCart} removeFromDb={removeFromDb}/>} />
       <Route path="/checkout" element={<Checkout getStoredCart={getStoredCart} cart={cart} setCart={setCart} clearTheCart={clearTheCart} getCart={getCart} removeFromDb={removeFromDb}/>} />




        </Routes>
        // </AnimatePresence>
  );
};

export default Pages