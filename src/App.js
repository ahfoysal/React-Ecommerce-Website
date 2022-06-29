import Pages from "./pages/Pages";
// import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



 
function App() {
   const [cart , setCart] = useState([]);
   const addToCart = (id) =>{
    const newCart = [...cart, id];
    setCart(newCart);
    toast.success('🛒 Added to cart', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "colored"
      });

  }

  return (
    <div className="App">
      
      <BrowserRouter>  
    <Header cart={cart}/>
     {/* <Category/> */}
     <Pages addToCart={addToCart} cart={cart} setCart={setCart}/>
     <ToastContainer />
      </BrowserRouter>
 
    </div>
  );
}






export default App;
