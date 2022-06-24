import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {Link} from  'react-router-dom'
import './Featured.css';
import Cart from "./Cart";



function Popular() {
  const [Popular, setPopular] = useState([]);
  const [cart , setCart] = useState([]);


  const addToCart = (id) =>{
    console.log(id)
    const newCart = [...cart, id];
    setCart(newCart);

  }
  useEffect(() => {
    getPopular();
  }, []);
  const key =  'consumer_key=ck_f4414d18802ae452b45cd05a41cec38705a3ba5a&consumer_secret=cs_427628913e1aae762409b64e2a2e57e126fe7225';

  const getPopular = async () => {
    const check = localStorage.getItem('popular')
    if(check){
      setPopular(JSON.parse(check))
    }else{

      const api = await fetch(`https://shop-api.cloudaccess.host/wp-json/wc/v3/products?${key}&tag=67`);
      const data = await api.json();
localStorage.setItem('popular',JSON.stringify(data))
      setPopular(data);
      console.log(data);
    }

  };





  return (
  
    <div className="container">
      <Cart cart={cart}></Cart>

        <h3 className="head">Featured Items</h3>
        


      <Splide  options={{
        arrows: false,      pagination: false,        gap: '3rem',   perPage: 3,
        breakpoints: {
          700: {        perPage: 1,    gap: '10px'      }
        }
      }}>
        {Popular.map((product) => {
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
       <button className="buy-btn" onClick={() => addToCart(product)}>Buy Now</button>
        </div>
          </SplideSlide>
    );

})};
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



export default Popular;