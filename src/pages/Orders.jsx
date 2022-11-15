import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom';
import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import axios from 'axios'

function Orders(props) {

  let params = useParams();
  const [details , setDetails] = useState({});
  const [loading , setLoading] = useState(false);




const key = 'consumer_key=ck_7d700d7c05bea9f024076feb890944ad286703f2&consumer_secret=cs_59a8c6db54711f8a9fc314b95e0ad782a946c191';
const fetchDetails = () =>{
  const check = sessionStorage.getItem(`${params.name}`)
  if(check){
    setDetails(JSON.parse(check))
    setLoading(true)

  }else{  

    axios(`https://shop.abusayeeed.xyz/wp/wp-json/wc/v3/orders/${params.name}?${key}`)
    .then(data2 => { const data = data2
      sessionStorage.setItem(`${params.name}`,JSON.stringify(data.data))
      setDetails(data.data);
      console.log(data.data);
      setLoading(true)
    })
  }

};

useEffect(() => {

//  const key =  'consumer_key=ck_f4414d18802ae452b45cd05a41cec38705a3ba5a&consumer_secret=cs_427628913e1aae762409b64e2a2e57e126fe7225';

//  axios(`${process.env.REACT_APP_SHOP_LINK}wp-json/wc/v3/products/${params.name}?${key}`)
//  .then(data2 => {
//   const rslt = data2;
//   console.log(rslt)

//   })
//  setImage(data2.data.images[0].src);
// .then(data3 => setImage(data3.data.images[0].src))
// .then(data4 => console.log(data4.data))
//  setLoading(true)

 
  

fetchDetails();
 
 },[params.name]);

  return (
    
    
    <DetailsWrapper>
{
  loading ? 

  
  <div className='container productpage'>
  
<Info> 
<h2>Order Number :{details.number}</h2>
<h2>Current Status: {details.status}</h2>
<h2>Name:{details.billing.first_name}</h2>
<h2>Phone: {details.billing.phone}</h2>
<h2>Total Amount:{details.total}</h2>


  
      <div>    
<div className="btn">
       <button className="buy-btn" href={'/'}>Back to home</button>
        </div>

  </div>
 




</Info></div>

:<div className="spinnerdiv"><ReactBootstrap.Spinner animation="border" /> </div>}
    
       </DetailsWrapper>
       
  )
}

const DetailsWrapper = styled.div`
margin-top: 10rem;
margin-bottom: 5rem;
display: flex;


.active{
background: linear-gradient(35deg, #494949, #313131);
color: white;
}
h2{
margin-bottom: 2rem;
margin-top: 1rem;
}
h2{
  font-size: 1rem;
  margin-bottom: 2rem;
  margin-top: 1rem;
  }
li{
font-size: 1.2rem;
line-height: 2.5rem;

}
ul{
margin-top: 2rem;
}

`;

const Info = styled.div`
margin-top: 4rem;

margin-left: 5rem;

`;

export default Orders