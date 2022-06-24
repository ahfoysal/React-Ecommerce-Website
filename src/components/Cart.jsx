import React, { useEffect } from 'react'
import {FaShoppingCart} from 'react-icons/fa'


const Cart = (props) => {
  const cart = props.cart;
  console.log(cart);
const total = cart.reduce((total, prd) => total + JSON.parse(prd.price), 0)
  useEffect(() => {
    }, []);
    

  return (
    <div>
        <FaShoppingCart className="head"/>
        <p >Cart Items: {cart.length}</p>
        <p>Total Price: {total}</p>

    </div>
  )
}

export default Cart