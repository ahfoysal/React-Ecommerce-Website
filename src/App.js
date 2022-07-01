import Pages from "./pages/Pages";
// import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import { useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';




 
function App() {
   const [cart , setCart] = useState([]);
   const [allProducts, setAllProducts] = useState([]);
   useEffect(() => {
    products();
    getCart();
    }, [])
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
      // console.log(newCart);
      getCart();

  }
  

const products = () =>{
  const check = sessionStorage.getItem('AllItems')
      if(check){
        setAllProducts(JSON.parse(check))
      }else{  
          axios(`https://shop-api.cloudaccess.host/wp-json/wc/v3/products?${process.env.REACT_APP_KEY}&per_page=100`)
        .then(data2 => { const data = data2
          sessionStorage.setItem('AllItems',JSON.stringify(data.data))
          setAllProducts(data.data)
          console.log(data);
        })
      }

}


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

// console.log(cartPd);
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
    getCart()
    
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
     <Pages  allProducts={allProducts} addToCart={addToCart} cart={cart} setCart={setCart} getCart={getCart} clearTheCart={clearTheCart} getStoredCart={getStoredCart} removeFromDb={removeFromDb} />
     <ToastContainer />
      </BrowserRouter>
 
    </div>
  );
}






export default App;
