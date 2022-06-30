import Pages from "./pages/Pages";
// import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import { useState , useEffect} from "react";
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

      // sessionStorage.setItem('cartItems', JSON.stringify(cart));
      //     const newItem = sessionStorage.getItem('cartItems');
      //     console.log(JSON.parse(newItem));
      addToDb(id.slug)
      localStorage.setItem("cartItems", JSON.stringify(newCart))
      console.log(newCart);
      getCart();

  }
  
useEffect(() => {
getCart();
}, [])

const getCart = () => {
  
  const newCart = localStorage.getItem("cartItems" ) 
setCart(JSON.parse(newCart))
const nnnn = JSON.parse(newCart)

const savedCart = getStoredCart();
const savedId = Object.keys(savedCart);

const cartPd = savedId.map( slug => {
  const product = nnnn.find( pd => pd.slug === slug)
  product.abc = savedCart[slug];
  return product
} );

console.log(cartPd);
setCart(cartPd)


}
  const addToDb = id => {
    const exists = getDb();
    let shopping_cart = {};
    if (!exists) {
      shopping_cart[id] = 1;
    }
    else {
      shopping_cart = JSON.parse(exists);
      if (shopping_cart[id]) {
        const newCount = shopping_cart[id] + 1;
        shopping_cart[id] = newCount;
      }
      else {
        shopping_cart[id] = 1;
      }
    }
    updateDb(shopping_cart);
    console.log(shopping_cart);
  }
  const getDb = () => localStorage.getItem('shopping_cart');
  const updateDb = cart => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
  }
  
  
  
  const removeFromDb = id => {
    const exists = getDb();
    if (!exists) {
  
    }
    else {
      const shopping_cart = JSON.parse(exists);
      delete shopping_cart[id];
      updateDb(shopping_cart);
    }
    
  }
  
  const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheCart = () => {
    // localStorage.setItem('shopping_cart', []);
    // localStorage.setItem('cartItems', []);
    setCart([]) 
    localStorage.removeItem('shopping_cart');


    console.log(localStorage.getItem('shopping_cart'));
  }
  

  return (
    <div className="App">
      
      <BrowserRouter>  
    <Header cart={cart}/>
     {/* <Category/> */}
     <Pages addToCart={addToCart} cart={cart} setCart={setCart} clearTheCart={clearTheCart} getStoredCart={getStoredCart} removeFromDb={removeFromDb} />
     <ToastContainer />
      </BrowserRouter>
 
    </div>
  );
}






export default App;
