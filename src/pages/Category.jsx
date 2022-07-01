import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import {Link, useParams} from 'react-router-dom';
import axios from 'axios'
import { MdAddShoppingCart } from 'react-icons/md';


function Cuisine({test2, addToCart, allProducts, setAllProducts, setTest2}) {




  let params = useParams();
  const [category , setCategory] = useState({});
  const [loading , setLoading] = useState(false);


useEffect(() => { 
  // fetchDetails()
  const cartItems = allProducts.map((cart)=> {
    return cart.categories.map(cat => (cart)).filter((val)=> {
      return val.categories[0].id === 239
      });
    // .filter((val)=> {
    //   return 
    //   }); 
    });
  console.log(cartItems);
  setCategory(cartItems)
  console.log(category)
},[])



const fetchDetails = () =>{
 
  if(test2 === true){

    const param = params.name
    console.log(param);
    const cartItems = allProducts.map((cart) => cart ).filter((val)=> {
      return val.categories.map(cat => ( cat.name)) 
      });
    console.log(cartItems);
    setCategory(cartItems)
          setLoading(true)
    
  
  }else{  


    axios(`https://shop-api.cloudaccess.host/wp-json/wc/v3/products/${params.name}?${process.env.REACT_APP_KEY}`)
    .then(data2 => { const data = data2
      sessionStorage.setItem(`${params.name}`,JSON.stringify(data.data))
      setCategory(data.data);
      // console.log(data.data);
      setLoading(true)
      setTest2(true)

      console.log(test2)

    })
  }



}





  return (
    <ProductList  >

        { allProducts.map(product => (
          <li className="product-con" key={product.id}>
          {/* <li key={product.id} > */}
            <Link to={'/product/'+product.id}>
   <img
              src={product.images[0].src}
              alt={product.name}
            />
            <strong>{product.name }</strong>
            <p>{product.price}</p></Link>

            <button type="button" onClick={() => addToCart(product) } >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 

              </div>

              <span>ADD TO CART</span>
            </button>
          </li>
        )) }
      </ProductList>
  )
}


const ProductList = styled.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
list-style: none;
@media screen and (max-width: 800px) {
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

}

li {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  padding: 20px;

  img {
    align-self: center;
    max-width: 250px;
  }

  > strong {
    font-size: 16px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > p {
    font-size: 21px;
    font-weight: bold;
    margin: 5px 0 20px;
  }

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: black;
    }

    div{
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
}

`;


export default Cuisine