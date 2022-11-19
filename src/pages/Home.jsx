import Featured from "../components/Featured";
import Common from "../components/BestSelling";
import {motion} from 'framer-motion';
import Producsts from "../components/All Items";

import Banner from "../components/banner";
import TestDb from "../components/testDb";


  function Home({addToCart, allProducts}) {

  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    
    >
      {/* <Shop /> */}
      <Banner />
      <Featured />
      <Producsts />
      
      
        <Common />
       

    </motion.div>
  )
}

export default Home;
