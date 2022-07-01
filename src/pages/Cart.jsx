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

        <button onClick={() => ProceedtoPayment() } className="btn"  >

  <span>Proceed to Checkout</span>
</button>


        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
        <button  onClick={clearTheCart} >Clear Cart</button>

      </footer>



        {/* </div> */}
        
      {/* ))} */}

</Container>
  )
}

export default Cart
