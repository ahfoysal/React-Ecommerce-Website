import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import './banner.css';

function Banner(props) {

  return (
  
    <div >
      <Splide  options={{
        arrows: false,      pagination: true,        gap: '3rem',   perPage: 1,
        breakpoints: {
          700: {        perPage: 1,    gap: '10px'      },  
     

        }
      }}>

      <SplideSlide className="banner">
    <img src="https://amazon-ish.vercel.app/static/media/1.a6827cf5.jpg" alt="hi"/>
    </SplideSlide>

    <SplideSlide className="banner">
    <img src="https://amazon-ish.vercel.app/static/media/3.5989ebbf.jpg" alt="hi"/>
    </SplideSlide>

    <SplideSlide className="banner">
    <img src="https://amazon-ish.vercel.app/static/media/1.a6827cf5.jpg" alt="hi"/>
    </SplideSlide>
     
     
          </Splide>


    </div>

);
}

// const Card =  styled.div`
// min-height: 25rem;
// border-radius: 2rem;
// overflow: hidden;
// position: relative;



// img{
//   border-radius: 2rem;
//   position: absolute;
//   left: 0;
//   width: 100%;
//   height: 100%;
//  object-fit: cover; 
// }
// p{
//   position: absolute;

// z-index: 12;
// left: 50%;
// bottom: 0%;
// transform: translate(-50%, 0%);
// color: white;
// width: 100%;
// text-align: center;
// font-weight: 600;
// font-size: 1rem;
// height: 40%;
// display: flex:
// justify-content: center;
// align-items: center;
// }
// `;



export default Banner;