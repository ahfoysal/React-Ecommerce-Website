import Pages from "./pages/Pages";
// import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



 
function App() {
   const [cart , setCart] = useState([]);
   const addToCart = (id) =>{
    const newCart = [...cart, id];
    setCart(newCart);
  }

  return (
    <div className="App">
      
      <BrowserRouter>  
    <Header cart={cart}/>
     {/* <Category/> */}
     <Pages addToCart={addToCart} cart={cart} setCart={setCart}/>
      </BrowserRouter>
 
    </div>
  );
}






export default App;
