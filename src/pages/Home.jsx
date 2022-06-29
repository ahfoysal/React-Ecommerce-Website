import Featured from "../components/Featured";
import Common from "../components/BestSelling";
import Shop from "../components/Shop";

import {motion} from 'framer-motion';
import { useState } from "react";
import Cart from "./Cart";
  function Home(props) {

  const addToCart = props.addToCart;
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    
    >

        <Featured addToCart={addToCart}/>
        <Common addToCart={addToCart}/>
        <Shop addToCart={addToCart}/>

    </motion.div>
  )
}

export default Home;
