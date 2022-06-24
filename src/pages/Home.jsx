import Featured from "../components/Featured";
import Common from "../components/Common";
import {motion} from 'framer-motion';

  function Home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    
    >
        <Featured />
        <Common />
    </motion.div>
  )
}

export default Home;
