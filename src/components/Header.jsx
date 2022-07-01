import React from 'react'
import {useEffect} from 'react';
import {Container, Navbar, Offcanvas, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Search from "./Search";
// import NewSearch from  './NewSearch';

import {FiShoppingBag} from 'react-icons/fi';
import './header.css'





const Header = (props) => {
  const cart = props.cart;
  // console.log(props);
  const total = cart.reduce((total, prd) => total + JSON.parse(prd.price), 0)
    useEffect(() => {
      }, []);
      

// console.log(cart);
  
  return (
      <>
    <Navbar className="mb-3 bg-white"  fixed="top">
      <Container fluid>
        <Navbar.Brand ><Link to={'/'}>
               <h3 className="logo">Footware</h3>  </Link>  </Navbar.Brand>
               <div className="head-conatiner ">
                  <div ><Search />
                  </div>

                   <div className="cartIcon">
                  <Link to={'/cart'}><FiShoppingBag/> {cart.length}</Link>
                    </div>
                    <div >
                  <Link to={'/shop'}>SHOP</Link>
                    </div>
     
                 </div>

       
      </Container>
    </Navbar>
</>
  )
}

export default Header
