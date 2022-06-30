import { useEffect, useState } from "react";
import { MdAddShoppingCart } from 'react-icons/md';
import styled from 'styled-components';
import {Link} from  'react-router-dom'
// import { darken } from 'polished';
// import api from '../pages/api';
import axios from 'axios';


function Shop(props) {
  const addToCart = props.addToCart;

  const [Common, setCommon] = useState([]);
  
  
  useEffect(() => { 
    products()
        //   };
          
    
  },[]);
  const products = () =>{
    const key =  'consumer_key=ck_f4414d18802ae452b45cd05a41cec38705a3ba5a&consumer_secret=cs_427628913e1aae762409b64e2a2e57e126fe7225';

    
        

    const check = sessionStorage.getItem('shop')
        if(check){
          setCommon(JSON.parse(check))
        }else{  
    
          axios(`https://shop-api.cloudaccess.host/wp-json/wc/v3/products?${key}&per_page=20`)
          .then(data2 => { const data = data2
            sessionStorage.setItem('shop',JSON.stringify(data.data))

            setCommon(data.data)
            console.log(data);

          })
        }

  }
    return (
<div className="container">
 
<h3 className="head">Shop </h3>

        <ProductList  >
        { Common.map(product => (
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
                <MdAddShoppingCart size={16} color="#FFF" /> {' 0'}

              </div>

              <span>ADD TO CART</span>
            </button>
          </li>
        )) }
      </ProductList>
   </div>
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

  
  
  export default Shop;