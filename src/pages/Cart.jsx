// import React, {  useEffect, useState } from 'react'
import { Container, ProductTable, Total } from './Cart-styles';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'



const Cart = ({cart, clearTheCart, removeFromDb}) => {
  ////props
  const navigate = useNavigate();
/////state
  // const [isCartEmpty, setIsCartEmpty] = '';
/////checkout button 
const styyle = {
  width:"24px",
  height:"24px"
};
const ProceedtoPayment = () => {
  navigate("/checkout")      
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
                <button type="button"  onClick={() => removeFromDb(cart.id)} >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ) ) }
        </tbody>
      </ProductTable>

      <footer>
      <button  onClick={clearTheCart}  >clear</button>

        <button onClick={() => ProceedtoPayment() }  >
  <svg  viewBox="0 0 24 24" style={styyle} id="cart">
    <path fill="#000000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6.14L8.5,11H16Z" />
</svg>
  <span>Proceed to Checkout</span>
</button>


        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>



        {/* </div> */}
        
      {/* ))} */}

</Container>
  )
}

export default Cart
