import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from  'react-router-dom'


function Common(props) {
  const addToCart = props.addToCart;

  const [Common, setCommon] = useState([]);
  useEffect(() => {
    getCommon();
  }, []);
  const key =  'consumer_key=ck_f4414d18802ae452b45cd05a41cec38705a3ba5a&consumer_secret=cs_427628913e1aae762409b64e2a2e57e126fe7225';

  const getCommon = async () => {
    const check = sessionStorage.getItem('common')
    if(check){
      setCommon(JSON.parse(check))
    }else{

      const api = await fetch(`https://shop-api.cloudaccess.host/wp-json/wc/v3/products?${key}&category=239&per_page=100`);
      const data = await api.json();
      sessionStorage.setItem('common',JSON.stringify(data))
      setCommon(data);
      console.log(data);
    }
  };
    return (
      <div className="container">
      

      <Wrapper>
      <h3 className="head">Best Selling </h3>

    <Splide options={{
      
      arrows: false,
      pagination: false,
      drag: 'free',
      gap: '1rem',
      perPage: 3,
      breakpoints: {
        640: {
          perPage: 1,
        },
        1000: {        perPage: 2,    gap: '10px'      }

      }
    }}>
      {Common.map((product) => {
  return(
    <SplideSlide className="cards" key={product.id}>
    <Link to={'/product/'+product.id}>
<div className="product-image">
<img src={product.images[0].src} alt={product.name}/>
</div>
<div className="product-info">
<h2>{product.name}</h2>
<p dangerouslySetInnerHTML={{ __html: product.short_description }}></p>
<div className="price">৳{product.price}</div>
</div> </Link>
<div className="btn">
<button className="buy-btn" onClick={() => addToCart(product)}>Add to Cart</button>
</div>
</SplideSlide>
  );

})};
        </Splide>
        </Wrapper>


  </div>
  )
  }
  const Wrapper = styled.div`
margin: 4rem 0rem;
`;
  
  export default Common;