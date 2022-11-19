import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, addDoc,  getDocs} from "firebase/firestore";
import { useUserAuth } from '../context/UserAuthContext';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default function TestDb() {
    const [order, setOrder] = useState();
    const ordersCollection = collection(db, "order");
    const [details , setDetails] = useState();
    const [loading , setLoading] = useState(false);
    const [loading2 , setLoading2] = useState(false);

    const [newEmail, setNewEnail] = useState('');
    const [newNumber, setNewNumber] = useState(0);
    const [orderCollection, setOrderCollection] = useState([])
    let { user } =  useUserAuth();
    

    const getData = async () => {
        const data = await getDocs(ordersCollection)
        const newData= data.docs.map((doc) => ({...doc.data(), id: doc.id}))
        const emails = newData.map((email) => email.email)
        console.log(emails)
        console.log(newData)
        const param = `${user.email}`
        const cartItems = newData.map((cart) => cart ).filter((val)=> {
          return val.email === param
          });
          setOrder(cartItems)
          setLoading2(true)
         
          if (cartItems === undefined || cartItems.length == 0) {
            // array does not exist or is empty
            setLoading2(false)
        }else {
           
            console.log(order)
           
        }
         
        
          
        
    }

    useEffect(() => {
        

        getData()
        axios(`${process.env.REACT_APP_SHOP_LINK}wp-json/wc/v3/orders/?${process.env.REACT_APP_KEY}`)
        .then(data2 => { const data = data2
        
          setDetails(data.data);
          setLoading(true)

          console.log(data.data);
        
        })
    
        
      
 
        
    }, [])
  return (<div>
    {
        loading ?  <>{loading2 ? <div className='margin-top'>
        {user &&         order.map((name) => {
                     return  <div key={name.id} > <Link to={`/order/${name.number}`}><h3>Order No: {name.number}</h3>
                     <p>Total Amount: {name.total}</p>
                     <p>status   {details.map((cart) => cart ).filter((val)=> {
                    return val.id === Number(name.number)
                    }).map((cart) => 
                   <span> {cart.status} </span> )}</p>
                  </Link>   </div>
                     })}
                     {!user && <p>Please Login To Check Orders</p> }
                  
            </div>  : <p className="margin-top">hi</p> }</> : '' }</div>
  )
}
