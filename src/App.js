import Pages from "./pages/Pages";
// import Category from "./components/Category";
import {BrowserRouter} from 'react-router-dom'
import Header from "./components/Header";
import { useState , useEffect, createContext} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import prd from './pages/products.json'
import { UserAuthContextProvider } from './context/UserAuthContext';
import Header2 from "./components/Header2";




export const TestContext = createContext();
 
function App() {
  
   const [cart , setCart] = useState([]);
   const [allProducts, setAllProducts] = useState([]);
   const [test2 , setTest2] = useState(false);
   const [activeTabHome , setActiveTabHome] = useState(false);
   const [activeTabCart , setActiveTabCart] = useState(false);
   const [activeTabOrder , setActiveTabOrder] = useState(false);
   const [activeTabUser , setActiveTabUser] = useState(false);



  

   useEffect(() => {
    getCart();
   
      console.log(prd); 
  setAllProducts(prd)
  gteProducts();
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
      addToDb(id.id)
      localStorage.setItem("cartItems", JSON.stringify(newCart))
      // console.log(newCart);
      getCart();

  }
  

const gteProducts = () =>{
  const check = sessionStorage.getItem('AllItems')
      if(check){
        setAllProducts(JSON.parse(check))
        setTest2(true)

      }else{  
          axios(`${process.env.REACT_APP_SHOP_LINK}wp-json/wc/v3/products?${process.env.REACT_APP_KEY}&per_page=100`)
        .then(data2 => { const data = data2
          sessionStorage.setItem('AllItems',JSON.stringify(data.data))
          setAllProducts(data.data)
          console.log(data);
          setTest2(true)

        })
      }
}


const getCart = () => {
  
  const newCart = localStorage.getItem("cartItems" ) 
setCart(JSON.parse(newCart))
const nnnn = JSON.parse(newCart)

const savedCart = getStoredCart();
const savedId = Object.keys(savedCart);

const cartPd = savedId.map( id => {
  const product = nnnn.find( pd => pd.id.toString() === id)
  product.abc = savedCart[id];
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
      <UserAuthContextProvider>
        <TestContext.Provider value={{ allProducts, setAllProducts, addToCart,
           test2, setTest2, updateDb, getDb, cart,
            clearTheCart, removeFromDb, getCart,
             getStoredCart, setCart,
              activeTabCart ,setActiveTabCart, setActiveTabHome, setActiveTabOrder,
              setActiveTabUser,  activeTabUser,
              activeTabHome, activeTabOrder }}>
    <Header cart={cart} test2={test2}/>
    <Header2 />
     {/* <Category/> */}
     <Pages  />
 
     <ToastContainer />
     </TestContext.Provider  >
     </UserAuthContextProvider>
      </BrowserRouter>
 
    </div>
  );
}






export default App;
