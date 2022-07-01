import Featured from "../components/Featured";
import Common from "../components/BestSelling";
import Shop from "../components/Shop";
import {motion} from 'framer-motion';
  function Home({addToCart, allProducts}) {

  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    
    >

        <Featured addToCart={addToCart}/>
        <Common addToCart={addToCart}/>

    </motion.div>
  )
}

export default Home;
