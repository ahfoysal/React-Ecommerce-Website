import { useContext, useEffect, useState } from "react";
import { MdAddShoppingCart } from 'react-icons/md';
import styled from 'styled-components';
import {Link} from  'react-router-dom'
import './shop.css'
import { TestContext } from "../App";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import prd from '../pages/products.json'
// import { darken } from 'polished';
// import api from '../pages/api';

function Producsts() {
  const {context, allProducts, addToCart, setAllProducts, test2} = useContext(TestContext);
  const [ctg , setCtg] = useState('');
  const [pro , setPro] = useState(prd);
  useEffect(() => {
    
   
   
  }, []);

const gteProducts = (id) =>{
 
  if(test2 === true){

    const param = id

    const cartItems = allProducts.map((cart)=> {
      return cart.categories.map(cat => (cart)).filter((val)=> {
        return val.categories[0].id === id
            });
     
      });
    console.log(cartItems);
    const merged = [].concat.apply([], cartItems);
    let uniqueChars = [...new Set(merged)];
  console.log(uniqueChars);
    setPro(uniqueChars)
    // console.log(category)
    
  // console.log(paramss.name)
  
  const cartItems2 = allProducts.map((cart2)=> {
    return cart2.categories.map(cat => (cart2))
   
        });
       
        console.log(cartItems2);
  
  }else{  

    axios(`${process.env.REACT_APP_SHOP_LINK}wp-json/wc/v3/products?${process.env.REACT_APP_KEY}&category=${id}`)
    .then(data2 => { const data = data2
      setPro(data.data);
    })
    
  }



}
  
  
  
    return (
<div className="gridd">
 
<h3 className="allitem container">All Items </h3>
{ allProducts.map(product => (
  product.categories.map(categories => (<>
    <button className="test" key={categories.id} onClick={() => gteProducts(categories.id)}>{categories.name}</button>
   </>
))
))}
        <ProductList  >
    

        { pro.map(product => (
          <li className="product-con" key={product.id} id={product.id}>
          {/* <li key={product.id} > */}
            <Link to={'/product/'+product.id}>
   <img
              src={product.images[0].src}
              alt={product.name}
            />
           {product.categories.map(pro =>
           <p className="product__category">  {pro.name} </p>)}
            <p className="product__name">{product.name }</p>
            <p className="product__price">৳{product.price}</p>
            <p className="product__rating"><FaStar  className="star"/>0</p></Link>
           

            <button type="button" onClick={() => addToCart(product) } >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 

              </div>

              <span>Add To Cart</span>
            </button>
          </li>
        )) }
      </ProductList>
   </div>
  )
  }
  const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
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
      background: #f90;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      margin: 0px 8%;
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
        border: none;
        color: #fff;
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-weight: 700;
        transition: all .2s;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

`;

  
  
  export default Producsts;