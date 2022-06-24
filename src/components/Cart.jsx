import React, { useEffect } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import Featured from "../components/Featured";
import Common from "../components/BestSelling";




const Cart = () => {
//   const cart = props.cart;
//   console.log(cart);
// const total = cart.reduce((total, prd) => total + JSON.parse(prd.price), 0)
//   useEffect(() => {
//     }, []);
    
 // const [cart , setCart] = useState;
    const addToCart = (id) =>{
      console.log(id) 
      // const newCart = [...cart, id];
      // setCart(newCart);
    }
  return (
    <div>
    {/* //     <FaShoppingCart className="head"/>
    //     <p >Cart Items: {cart.length}</p>
    //     <p>Total Price: {total}</p> */}

<Featured addToCart={addToCart}/>
        <Common addToCart={addToCart}/>    </div> 

  )
}

export default Cart