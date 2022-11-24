import Featured from "../components/Featured";
import Common from "../components/BestSelling";
import Producsts from "../components/All Items";
import Banner from "../components/banner";
import { useContext, useEffect } from "react";
import { TestContext } from "../App";


  function Home() {
    const {    setActiveTabCart, setActiveTabOrder,setActiveTabHome, setActiveTabUser, setHeaderActive} = useContext(TestContext);
    useEffect(() => {
      setActiveTabCart(false)
      setActiveTabOrder(false)
      setActiveTabHome(true)
      setActiveTabUser(false)
      setHeaderActive(false)
    
    }, [])
    
    

  return (

    <div className="home-page"
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    
    > 
      <Banner />
      {/* <Featured /> */}
      <Producsts /> 
    {/* <Common /> */}
       

    </div>
  )
}

export default Home;
