import { useEffect, useState } from "react";
import { MdAddShoppingCart } from 'react-icons/md';
import styled from 'styled-components';
import {Link} from  'react-router-dom'
import './shop.css'
// import { darken } from 'polished';
// import api from '../pages/api';

function Producsts({addToCart, allProducts}) {
  const [ctg , setCtg] = useState({});
  useEffect(() => {
  console.log('hi')
  }, []);
  
    return (
<div className="gridd">
 
<h3 className="allitem container">All Items </h3>

        <ProductList  >
    

        { allProducts.map(product => (
          <li className="product-con" key={product.id}>
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
            <p className="product__rating">✨0</p></Link>
           

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