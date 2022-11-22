import React, { useContext } from 'react'
import {Container, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Search from "./Search";
// import NewSearch from  './NewSearch';

import {FiShoppingBag} from 'react-icons/fi';
import './header.css'
import { useUserAuth } from '../context/UserAuthContext';
import { TestContext } from '../App';





const Header = () => {
  const {    setHeaderActive, headerActive} = useContext(TestContext);

  const handleHeader =  () => {
 
    if(headerActive === true){
      setHeaderActive(false)
    }else{setHeaderActive(true)}

  }

  const handleLogOut = async () => {
    
    try {
      await logOut();
    }catch(err) {
        console.log(err.message)
    }
  }
  let { user, logOut } =  useUserAuth();
// console.log(user);
  
  return (

      <>
    <Navbar className=" header-top  "  >
      <Container fluid>
    <div className='head-start'>  <button onClick={ () => handleHeader()}>Header</button></div>
               <div className="head-conatiner ">
            
                  <div ><Search />
                  </div>
                  <Navbar.Brand ><Link to={'/'}>
               <h3 className="logo">Pewds</h3>  </Link>  </Navbar.Brand>
     
                 </div>

       
      </Container>
    </Navbar>
</>
  )
}

export default Header
