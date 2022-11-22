import Featured from "../components/Featured";
import Common from "../components/BestSelling";
import {motion} from 'framer-motion';
import Producsts from "../components/All Items";

import Banner from "../components/banner";
import TestDb from "../components/OrdersPage/testDb";
import Search from "../components/Search";
import { useContext, useEffect } from "react";
import { TestContext } from "../App";


  function Home() {
    const {    setActiveTabCart, setActiveTabOrder,setActiveTabHome, setActiveTabUser} = useContext(TestContext);
    useEffect(() => {
      setActiveTabCart(false)
      setActiveTabOrder(false)
      setActiveTabHome(true)
      setActiveTabUser(false)
    
    })
    
    

  return (

    <motion.div className="home-page"
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    
    >
      {/* <Shop /> */}
  
      <Banner />
      {/* <Featured /> */}
      <Producsts />
      
      
        {/* <Common /> */}
       

    </motion.div>
  )
}

export default Home;
