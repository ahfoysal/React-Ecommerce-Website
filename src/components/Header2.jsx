import React, { useContext } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link, Route, Router } from 'react-router-dom';

import { FaHistory, FaHome, FaUser, } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { TestContext } from '../App';
import { useUserAuth } from '../context/UserAuthContext';

const Header2 = () => {
    const { cart} = useContext(TestContext);
    let { user, logOut } =  useUserAuth();


  return (
    <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>

      
    <SideNav.Toggle />
    <SideNav.Nav className="icons" >
        
        <NavItem eventKey="home">
            <NavIcon>  <Link to={'/'}> 
            <FaHome  fill="black" className='cart-icon' />
            </Link >    </NavIcon>
            <NavText>
            <Link to={'/'}>     Home
               </Link>   
            </NavText>
        </NavItem>
        <NavItem eventKey="cart">
            <NavIcon>
            <div className="cartIcon">
                  <Link to={'/cart'}><FiShoppingBag stroke="white" fill="black" className='cart-icon'/> <h3 className='cart-text'>{cart.length}</h3></Link>
                    </div>
            </NavIcon>
               <NavText>
               <Link to={'/cart'}>     Cart
               </Link>       </NavText>
          
        </NavItem>
        <NavItem eventKey="order">
            <NavIcon>
            <div className="cartIcon">
                  <Link to={'/order'}><FaHistory className='cart-icon'/> </Link>
                    </div>
            </NavIcon>
               <NavText>
               <Link to={'/order'}>     Orders
               </Link>       </NavText>
          
        </NavItem>
        <NavItem eventKey="order">
            <NavIcon>
            <div className="cartIcon">
                  <Link to={'/login'}><FaUser className='cart-icon'/> </Link>
                    </div>
            </NavIcon>
               <NavText>
               <Link to={'/login'}>     {!user &&  <p>Login</p>}
               <p>{user?.displayName}</p>
               </Link>       </NavText>
          
        </NavItem>
    </SideNav.Nav>
</SideNav>

  )
}

export default Header2
