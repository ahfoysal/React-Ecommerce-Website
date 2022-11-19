import React from 'react'
import {Container, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Search from "./Search";
// import NewSearch from  './NewSearch';

import {FiShoppingBag} from 'react-icons/fi';
import './header.css'
import { useUserAuth } from '../context/UserAuthContext';





const Header = ({cart, test2}) => {
  
  const handleLogOut = async () => {
    
    try {
      await logOut();
    }catch(err) {
        console.log(err.message)
    }
  }
  let { user, logOut } =  useUserAuth();

  
  return (

      <>
    <Navbar className="mb-3 header-top bg-white"  fixed="top">
      <Container fluid>
        <Navbar.Brand ><Link to={'/'}>
               <h3 className="logo">Pewds Merch</h3>  </Link>  </Navbar.Brand>
               <div className="head-conatiner ">
                  <div ><Search />
                  </div>
                  <div>{ <p>{user?.displayName}</p>}</div>

                   <div className="cartIcon">
                  <Link to={'/cart'}><FiShoppingBag className='cart-icon'/> <h3 className='cart-text'>{cart.length}</h3></Link>
                    </div>
              
                    <div >
                  {/*   <Link to={'/shop'}>SHOP</Link> */} <Link to={'/Login'}> {!user &&  <p>Login</p>}</Link>
                  {user && <button onClick={handleLogOut}>Logout</button> }
               
           
                    </div>
     
                 </div>

       
      </Container>
    </Navbar>
</>
  )
}

export default Header
