import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from  'react-router-dom'


function Common() {
  const [Common, setCommon] = useState([]);
  useEffect(() => {
    getCommon();
  }, []);
  const key =  'consumer_key=ck_f4414d18802ae452b45cd05a41cec38705a3ba5a&consumer_secret=cs_427628913e1aae762409b64e2a2e57e126fe7225';

  const getCommon = async () => {
    const check = localStorage.getItem('common')
    if(check){
      setCommon(JSON.parse(check))
    }else{

      const api = await fetch(`https://shop-api.cloudaccess.host/wp-json/wc/v3/products?${key}&category=239&per_page=100`);
      const data = await api.json();
localStorage.setItem('common',JSON.stringify(data))
      setCommon(data);
      console.log(data);
    }
  };
    return (
      <div className="container">
      

      <Wrapper>
      <h3>Best Selling </h3>

    <Splide options={{
      
      arrows: false,
      pagination: false,
      drag: 'free',
      gap: '3rem',
      perPage: 4,
      breakpoints: {
        640: {
          perPage: 1,
        }
      }
    }}>
      {Common.map((recipe) => {
  return(
        <SplideSlide key={recipe.id}>
        <Card><Link to={'/product/'+recipe.id}>
          <p>{recipe.name}</p>
          <img src={recipe.images[0].src} alt={recipe.name}/>
          <Gradient /></Link>
        </Card>
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
const Card =  styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;



img{
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
 object-fit: cover; 
}
p{
  position: absolute;

z-index: 12;
left: 50%;
bottom: 0%;
transform: translate(-50%, 0%);
color: white;
width: 100%;
text-align: center;
font-weight: 600;
font-size: 1rem;
height: 40%;
display: flex:
justify-content: center;
align-items: center;
}
`;
const Gradient =  styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
  
  export default Common;