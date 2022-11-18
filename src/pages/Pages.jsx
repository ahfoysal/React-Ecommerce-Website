import React from 'react'
import Home from "./Home";
import Category from "./Category";
import Searched from "./Searched";
import Product from "./Product";
import{ Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import Cart from './cart/Cart';
import Pro from '../components/pro';
import Orders from './Orders';
import Order from './Order';
import Checkout from './checkout/Checkout';
import Checkoutest from './checkout/Checkoutest';
import Shop from '../components/Shop';
import Login from './login/login';
import Signup from './login/signup';
import { UserAuthContextProvider } from '../context/UserAuthContext';
import { useUserAuth } from '../context/UserAuthContext';


function Pages({updateDb, getDb, test2,setTest2, getStoredCart, setCart,   addToCart,cart, getCart, clearTheCart, removeFromDb, allProducts, setAllProducts }) {
  const location = useLocation();
  // const setCart = props.setCart
let { user } = useUserAuth();
// console.log(user)  
  // const addToCart = props.addToCart;
  // const cart = props.cart;


  return (
    // <AnimatePresence exitBeforeEnter>
    
        <Routes location={location} key={location.pathname}>
          
       <Route path="/" element={<Home addToCart={addToCart} allProducts={allProducts}/>}/>
       <Route path="/category/:name" element={<Category test2={test2} addToCart={addToCart} allProducts={allProducts} />} />
       <Route path="/searched/:search" element={<Searched addToCart={addToCart} allProducts={allProducts}  />} />
       <Route path="/product/:name" element={<Product setTest2={setTest2} test2={test2} addToCart={addToCart} allProducts={allProducts} setAllProducts={setAllProducts} />} />
       <Route path="/shop/" element={<Shop allProducts={allProducts} addToCart={addToCart}/> } />
       <Route path="/order/:name" element={<Orders addToCart={addToCart}/>} />
       <Route path="/cart" element={<Cart   updateDb={updateDb} getDb={getDb} getStoredCart={getStoredCart} cart={cart} setCart={setCart} clearTheCart={clearTheCart} getCart={getCart} removeFromDb={removeFromDb}/>} />
       <Route path="/checkout" element={<Checkoutest getStoredCart={getStoredCart} cart={cart} setCart={setCart} clearTheCart={clearTheCart} getCart={getCart} removeFromDb={removeFromDb}/>} />
       <Route path="/checkout-test" element={<Checkoutest getStoredCart={getStoredCart} cart={cart} setCart={setCart} clearTheCart={clearTheCart} getCart={getCart} removeFromDb={removeFromDb}/>} />
       <Route path="/login/" element={<Login   />} />
       <Route path="/signup/" element={<Signup />} />
       <Route path="/order/" element={ <Order addToCart={addToCart}/> }/>
     



        </Routes>  
      
        // </AnimatePresence>
  );
};

export default Pages