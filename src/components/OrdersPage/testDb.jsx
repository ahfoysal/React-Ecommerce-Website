import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, addDoc,  getDocs} from "firebase/firestore";
import { useUserAuth } from '../../context/UserAuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap'
import { TestContext } from '../../App';


const TestDb = () => {
  const {    setActiveTabCart, setActiveTabOrder,setActiveTabHome, setActiveTabUser} = useContext(TestContext);
  let { user } =  useUserAuth();

  const [order, setOrder] = useState([]);
  const ordersCollection = collection(db, "order");
  const [details , setDetails] = useState([]);
  const [loading , setLoading] = useState(false);
  const [loading2 , setLoading2] = useState(false);


  


   

  const getData = async () => {
    const data = await getDocs(ordersCollection)
    const newData= data.docs?.map((doc) => ({...doc.data(), id: doc.id}))
    const emails = newData?.map((email) => email.email)
    console.log(emails)
    console.log(newData)
    const param = user?.email
    const cartItems = newData?.map((cart) => cart ).filter((val)=> {
      return val.email === param
      });
      setOrder(cartItems)
      console.log(cartItems)
     
          setLoading(true)
    
      
    
}
const getData2 =  () => {
  
   
  axios(`${process.env.REACT_APP_SHOP_LINK}wp-json/wc/v3/orders/?${process.env.REACT_APP_KEY}`)
  .then(data2 => { const data = data2
  
    // setDetails(data.data);
   
    // console.log(data.data);
  
  })
  
    
  
}


  
  



  useEffect(() => {

    setActiveTabCart(false)
    setActiveTabOrder(true)
    setActiveTabHome(false)
    setActiveTabUser(false)

        if(!user){
          setLoading(false)
        }


getData2()
getData()

  

    
}, [])

  return (
    <div className=' cart-page'>
            <p className='top-line'>Your Orders</p>
        
    {
         loading ?   <div className='orders__inner' >
          
        {user &&         order?.map((name) => {
                     return  <div key={name.number} className='payment__summary' > <Link to={`/order/${name.number}`}>
                      <h5>Order ID: 69420{name.number}</h5>
                      <p>Payment Method: {name.payment_method}</p>
                    <div className='order__list noScrollbar'>
                     
                    {name.line_items?.map((pro) => {
                              return   <div className='order__item'> 
                      <div className='order__image'><img src={pro.image.src} alt=""   />
                      </div></div>
                      }
                    )}</div>


                     <p>Total Amount: {name.total}</p>
                     <p>status   {details?.map((cart) => cart ).filter((val)=> {
                    return val.id === Number(name.number)
                    })?.map((cart) => 
                   <span> {cart.status} </span> )}</p>
                  </Link>   </div>
                     })}
                     {!user && <p>Please Login To Check Orders</p> }
                  
            </div>  : <div className="spinnerdiv"><ReactBootstrap.Spinner animation="border" /> </div> }
          {user?.email &&  <button className='btn btn-primary' onClick={() => getData()}>refresh</button>
}            </div>
  )
}

export default TestDb
