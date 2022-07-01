import React, {  useEffect, useState } from 'react'
import { Container, ProductTable, Total } from './styles';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'



const Cart = ({cart, setCart, clearTheCart, getCart, cart2, getStoredCart, removeFromDb}) => {

  const [isContainerActive, setIsContainerActive] = React.useState(false);
  const [isCartEmpty, setIsCartEmpty] = '';

  const navigate = useNavigate();
  // const cart = props.cart;
  // const setCart = props.setCart;


const styyle = {
 
  width:"24px",
  height:"24px"
};



// console.log( testItms);
const createOrder = () => {
  // const cartQuantity = "1";
  const cartItems = cart.map((cart) => `{'product_id': ${cart.id},'quantity': ${cart.abc}}` );
  // const cartQuantity = cart.map((cart) => `{'product_id': ${cart.id},'quantity': ${cartQuantity}}` );
console.log( cartItems);

const cartItemss = cartItems;
const StringCart= JSON.stringify(cartItemss);  
const newItms = StringCart.replace (/"/g,'');
const newCart = newItms.replace (/'/g,'"');

  setIsContainerActive(true);
  var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
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
        navigate(`/order/${rslt.number}`)      
        setCart([]) 
        localStorage.removeItem('shopping_cart');


        })
      .catch(error => console.log('error', error));
      
    console.log(body3)
}
const total = cart.reduce((total, prd) => total + prd.price * prd.abc , 0)

// const subTotal = cart.reduce(( prd) =>   parseInt(prd.price) * prd.abc )


  return (
    <Container className='mt-50'>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUCT</th>
            <th>AMOUNT</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
        {cart.map((cart, index) => (
              <tr key={`${index+1}`}>
              <td>
                <img
                src={cart.images[0].src}
                alt={cart.name}
              />
              </td>
              <td>
                <strong>{cart.name}</strong>
                <span>{cart.price}</span>
              </td>
              <td>
                <div>
                  <button type="button" >
                    <MdRemoveCircleOutline size={20} color="#7159c1"/>
                  </button>
                  <input type="number" readOnly value={`${cart.abc}`} />
                  <button type="button"  >
                    <MdAddCircleOutline size={20} color="#7159c1"/>
                  </button>
                </div>
              </td>
              <td>
                <strong>{cart.price * cart.abc}</strong>
              </td>
              <td>
                <button type="button"  onClick={() => removeFromDb(cart.slug)} >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ) ) }
        </tbody>
      </ProductTable>

      <footer>
      <button  onClick={clearTheCart}  >clear</button>

        <button  className={`checkbtn ${isContainerActive ? " checked-out" : ""}`} onClick={() => createOrder() }  >
  <svg  viewBox="0 0 24 24" style={styyle} id="cart">
    <path fill="#000000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
</svg>
  <span>Checkout</span>
  <svg id="check"  viewBox="0 0 24 24" style={styyle}> 
    <path strokeWidth="2" fill="none" stroke="#ffffff" d="M 3,12 l 6,6 l 12, -12"/>
  </svg>
</button>


        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
      {isContainerActive ? <h3 class="head">Thank You For Your Order.</h3> : ""}



        {/* </div> */}
        
      {/* ))} */}

</Container>
  )
}

export default Cart
