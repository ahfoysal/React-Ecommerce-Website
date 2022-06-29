import React, {  useState } from 'react'
import { Container, ProductTable, Total } from './styles';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import * as ReactBootstrap from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';



const Cart = (props) => {

  const [loading , setLoading] = useState(true);
  const navigate = useNavigate();
  const cart = props.cart;
  const setCart = props.setCart;
const cartQuantity = "1";
  const cartItems = cart.map((cart) => `{'product_id': ${cart.id},'quantity': ${cartQuantity}}` );
const cartItemss = cartItems;
const StringCart= JSON.stringify(cartItemss);  
const newItms = StringCart.replace (/"/g,'');
const newCart = newItms.replace (/'/g,'"');






// console.log( testItms);
const createOrder = () => {
  setLoading(false);
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
        setLoading(true);
        navigate(`/order/${rslt.number}`)      

        })
      .catch(error => console.log('error', error));
      setCart([])
    console.log(body3)
}
const total = cart.reduce((total, prd) => total + JSON.parse(prd.price), 0)




// const total = useSelector(state =>
//   formatPrice(state.cart.reduce((totalSum, product) => {
//     return totalSum + product.price * product.amount;
//   }, 0)
//   ));

// const cart = useSelector(state => state.cart.map(product => ({
//     ...product,
//     subtotal: formatPrice(product.price * product.amount),
//   })));

// const dispatch = useDispatch();

// function increment(product) {
//   dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
// }

// function decrement(product) {
//   dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
// }


  return (
    <Container className='mt-50'>
    {/* {cart.map((cart) => ( */}
          {/* <div > */}
        {/* <p>{cart.name}</p> */}
        {/* <p>{cart.price}</p> */}



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
        {cart.map((cart) => (
              <tr key={cart.id}>
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
                  <input type="number" readOnly value="{cart.amount}" />
                  <button type="button"  >
                    <MdAddCircleOutline size={20} color="#7159c1"/>
                  </button>
                </div>
              </td>
              <td>
                <strong>cart.subtotal</strong>
              </td>
              <td>
                <button type="button" >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ) ) }
        </tbody>
      </ProductTable>

      <footer>
      {
  loading  ? <p>done</p> :<div className="spinnerdiv"><ReactBootstrap.Spinner animation="border" /> </div>}

        <button type="button" onClick={() => createOrder()}>Proceed to Checkout</button>

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
