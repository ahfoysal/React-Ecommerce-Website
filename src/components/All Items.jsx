import { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import {Link} from  'react-router-dom'
import './shop.css'
import { TestContext } from "../App";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { Pagination } from "@mui/material";
import { MdAddShoppingCart } from "react-icons/md";
// import { darken } from 'polished';
// import api from '../pages/api';

function Producsts() {
  const {context, allProducts, addToCart, setAllProducts, test2} = useContext(TestContext);
  const [ctg , setCtg] = useState([]);
  const [pro , setPro] = useState([]);
  const [active , setActive] = useState('all');
  const [page , setPage] = useState(1);

 


  useEffect(() => {
  
    gteProducts2()
    getCat()
    
  }, []);


const getCat = () =>{
  axios(`${process.env.REACT_APP_SHOP_LINK}wp-json/wc/v3/products?${process.env.REACT_APP_KEY}&per_page=100`)
          .then(data2 => { const data = data2
            sessionStorage.setItem('AllItems',JSON.stringify(data.data))
            setPro(data.data)
            // console.log(data);
            const ctgName =  data.data.map(product => {
              return product.categories.map(categories => ( categories.name))})
              const merged = [].concat.apply([], ctgName);
              let uniqueChars = [...new Set(merged)];
              const ctgId =  data.data.map(product => {
               return product.categories.map(categories => ( categories.id))})
               const merged2 = [].concat.apply([], ctgId);
               let uniqueChars2 = [...new Set(merged2)];
              //  console.log(uniqueChars, uniqueChars2 )
               setCtg(uniqueChars)
          
  
    })
        
  
    setPage(1)
  
}

  const gteProducts2 = () =>{
  
            axios(`${process.env.REACT_APP_SHOP_LINK}wp-json/wc/v3/products?${process.env.REACT_APP_KEY}&per_page=100`)
          .then(data2 => { const data = data2
            sessionStorage.setItem('AllItems',JSON.stringify(data.data))
            setPro(data.data)
            // console.log(data);
  
          })
        
  }

const gteProducts = (id) =>{
setActive(id)
console.log(id)

  setPage(1)
  if(test2 === true){

    const param = id

    const cartItems = allProducts.map((cart)=> {
      return cart.categories.map(cat => (cart)).filter((val)=> {
        return val.categories[0].name === id
            });
     
      });
    // console.log(cartItems);
    const merged = [].concat.apply([], cartItems);
    let uniqueChars = [...new Set(merged)];
  // console.log(uniqueChars);
    setPro(uniqueChars)
    // console.log(category)
    
  // console.log(paramss.name)
  
  const cartItems2 = allProducts.map((cart2)=> {
    return cart2.categories.map(cat => (cart2))
   
        });
       
        // console.log(cartItems2);
  
  }else{  

    axios(`${process.env.REACT_APP_SHOP_LINK}wp-json/wc/v3/products?${process.env.REACT_APP_KEY}&category=${id}`)
    .then(data2 => { const data = data2
      setPro(data.data);
    })
    
  }



}
  
  
  
    return (
<div className="gridd">
 




<Splide  options={{
        arrows: false,      pagination: false,        gap: '10px',   perPage: 10,
        breakpoints: {
          700: {        perPage: 5,    gap: '10px'      },
          
          1000: {        perPage: 5,    gap: '10px'      }

        }
      }}>
        <SplideSlide className={'catergory-bar  test '}><p className={` cat-btn categories__category ${active === 'all' ? 'cat-active' : ' '}`} onClick={() => (setPro(allProducts), setActive('all'))}>All Products</p></SplideSlide>
        
        {ctg.map((ctgn) => {
  return <SplideSlide className={' catergory-bar'} key={ctgn}>   <p  className={` cat-btn categories__category ${active === ctgn ? 'cat-active' : ' '}`}  onClick={() => gteProducts(ctgn)} > {ctgn}</p> </SplideSlide>
})}
        </Splide>


        <div className="container-fluid bg-trasparent my-4 p-3"  style={{position: "relative"}}>
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-2 row-cols-lg-4 g-3">
        { pro.slice((page-1) * 12, (page-1) * 12 + 12).map(product => (
        <>
        
        <div className="col hp" key={product.id}>
      <div className="card h-100 shadow-sm">
  
            <div>  <Link to={'/product/'+product.id}> <>
          <img src={product.images[0].src} className="card-img-top" alt="product.title" />
      

       
       {product.sale_price && <div> <p className="tag">Sale</p></div>}
       
    
      
        <div className="card-body">
        {product.categories.map(pro =>
           <p className="product__category">  {pro.name} </p>)}
        <h5 className="card-title">
            <p className="product__name">{product.name }</p>
          </h5>
          <div className="clearfix ">
          <p className="product__price">৳{product.price} {product.sale_price && <span className=" del">৳{product.regular_price}</span>}</p>

          <p className="product__rating"><FaStar  className="star"/>0</p>
          </div>
         
          </div>
        
          </></Link>
          <div className="add-to-cart">
          <button  onClick={() => addToCart(product) } className='addtocart-btn buy-btn pp-btn' >
           
                <MdAddShoppingCart size={16} color="#FFF" /> 

             

              <span>Add To Cart</span>
            </button></div>
          
          <div className="clearfix mb-1">

            <span className="float-start"><i className="fas fa-question-circle"></i></span>

            <span className="float-end">
              <i className="far fa-heart" ></i>

            </span>
          </div>
        </div>
      </div>
    </div>

        </>
        )) }
        </div>    </div>
          
      <Pagination className="paginatin" count={Math.ceil(pro.length / 12)}
      onChange={(_, value) => {
        setPage(value);
        window.scroll(0,450)
      }}
      />
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