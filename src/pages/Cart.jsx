import React, { useEffect, useState } from 'react'
import {Link} from  'react-router-dom'


const Cart = (props) => {

  const cart = props.cart;
  const setCart = props.setCart;
  

const cartQuantity = "2";
  const cartItems = cart.map((cart) => `{'product_id': ${cart.id},'quantity': ${cartQuantity}}` );
const cartItemss = cartItems;
const StringCart= JSON.stringify(cartItemss);  
const newItms = StringCart.replace (/"/g,'');
const newCart = newItms.replace (/'/g,'"');
console.log(newCart)



var raw2 = JSON.stringify({
  "'payment_method'": "'cod'",
  "'payment_method_title'": "'Cash On Delivery'",
  "'billing'": {
    "'first_name'": "'react'",
    "'address_1'": "'react'",
    "'phone'": "'123'"
  },
  "'line_items'":  newItms

});
// const testItms = newCart.replace (/l/g,'"');


// console.log( testItms);
const createOrder = () => {
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const raw =  JSON.stringify({
      "payment_method": "cod",
      "payment_method_title": "Cash On Delivery",
      "billing": {
        "first_name": "name",
        "address_1": "address",
        "phone": "123"
      },
      "line_items":  newCart

    });
 const body1 = `{"payment_method":"cod","payment_method_title":"Cash On Delivery","billing":{"first_name":"name","address_1":"address","phone":"123"},"line_items":`
const body2= `${newCart}}`
    const body3 = body1.concat(' ', body2);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: body1.concat(' ', body2),
      redirect: 'follow'
    };
    fetch("https://shop-api.cloudaccess.host/wp-json/wc/v3/orders?consumer_key=ck_f4414d18802ae452b45cd05a41cec38705a3ba5a&consumer_secret=cs_427628913e1aae762409b64e2a2e57e126fe7225", requestOptions)
      .then(response => response.json())
      .then(result => {
        const rslt = result;
        console.log(rslt)

        })
      .catch(error => console.log('error', error));

    console.log(body3)
}

  return (
    <div className="container cart-container">
         {cart.map((cart) => (
          <div key={cart.id}>
        <p>{cart.name}</p>
        <p>{cart.price}</p>
        </div>
      ))}

<button className="buy-btn" onClick={() => createOrder()}>Checkout</button>
   </div>
  )
}

export default Cart
