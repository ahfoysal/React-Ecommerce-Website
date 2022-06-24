import Pages from "./pages/Pages";
// import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import { useState } from "react";


 
function App() {
   const [cart , setCart] = useState([]);
   const addToCart = (id) =>{
    const newCart = [...cart, id];
    setCart(newCart);


  }

  return (
    <div className="App">
      
      <BrowserRouter>  
    <Navbar cart={cart}/>
     {/* <Category/> */}
     <Pages addToCart={addToCart}/>
      </BrowserRouter>
 
    </div>
  );
}






export default App;
