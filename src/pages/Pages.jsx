import React from 'react'
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Product from "./Product";
import{ Route, Routes, useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';

function Pages() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
       <Route path="/" element={<Home />}/>
       <Route path="/cuisine/:type" element={<Cuisine />} />
       <Route path="/searched/:search" element={<Searched />} />
       <Route path="/product/:name" element={<Product />} />


        </Routes></AnimatePresence>
  );
};

export default Pages