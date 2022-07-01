import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom';
import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import axios from 'axios'

function Recipe({addToCart, allProducts}) {




  let params = useParams();
  const [details , setDetails] = useState({});
  const [loading , setLoading] = useState(false);




const fetchDetails = () =>{
//   const check = sessionStorage.getItem(`${params.name}`)
//   if(check){
//     setDetails(JSON.parse(check))
//     setLoading(true)

//   }else{  

//     axios(`https://shop-api.cloudaccess.host/wp-json/wc/v3/products/${params.name}?${process.env.REACT_APP_KEY}`)
//     .then(data2 => { const data = data2
//       sessionStorage.setItem(`${params.name}`,JSON.stringify(data.data))
//       setDetails(data.data);
//       // console.log(data.data);
//       setLoading(true)
//     })
//   }


  const param = params.name
  console.log(param);
  const cartItems = allProducts.map((cart) => cart ).filter((val)=> {
    return val.id === parseInt(param)
    });
  console.log(cartItems[0]);
  setDetails(cartItems[0])
        setLoading(true)
  

}



useEffect(() => {

fetchDetails();
 },[params.name]);

  return (
    
    
    <DetailsWrapper>
{
  loading ? 

  
  <div className='container productpage'>
  <div className='productpage-image'>
  <img src={details.images[0].src} alt={details.name} />
</div>
<Info> 
<h2>{details.name}</h2>
  
      <div>    
<h3 dangerouslySetInnerHTML={{ __html: details.short_description }} ></h3>
<h3 dangerouslySetInnerHTML={{ __html: details.description }} ></h3>
<div className="btn">
       <button className="buy-btn" onClick={() => addToCart(details)}>Add To Cart</button>
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

const Button = styled.button`
padding: 1rem 2rem;
color: #313131;
background: white;
border: 2px solid black;
margin-right: 2rem;
font-weight: 600;
`;
const Info = styled.div`
margin-top: 4rem;

margin-left: 5rem;

`;

export default Recipe