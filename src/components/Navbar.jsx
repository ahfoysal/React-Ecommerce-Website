import React, { useEffect } from 'react'
import Search from "./Search";
import {GiRunningShoe} from 'react-icons/gi'
import styled from "styled-components";
import {Link} from 'react-router-dom';



const Navbar = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + JSON.parse(prd.price), 0)
      useEffect(() => {
        }, []);
        

console.log(props);
  return (
    <div    className="header ">
            <Nav className="fixed-top container"><Link to={'/'}><GiRunningShoe/>
         <p>Foowtare</p>  </Link>   <Search/>      <h4>Cart Items: {cart.length}</h4><h4>Total: {total} </h4>

      </Nav>
    </div>
  )
 
}

  const Nav = styled.div`
  display: flex;
  gap-between: 10px;
    align-items: center;
  height: 100px;
  background-color: #fff;
  svg{
  font-size: 2rem;
  }
  p{
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
    font-style: italic;
    color: black;
  }
  a{
    text-decoration: none;
  }
  h4{
    font-size: 1rem;
  }
  `


export default Navbar