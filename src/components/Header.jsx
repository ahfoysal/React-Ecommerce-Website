import React from 'react'
import {useEffect} from 'react';
import {Container, Navbar, Offcanvas, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import Search from "./Search";
import {FiShoppingBag} from 'react-icons/fi';





const Header = (props) => {
  const cart = props.cart;
  // console.log(props);
  const total = cart.reduce((total, prd) => total + JSON.parse(prd.price), 0)
    useEffect(() => {
      }, []);
      

console.log(cart);
  
  return (
    <div>
      <>
  {['sm'].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3"  fixed="top">
      <Container fluid>
        <Navbar.Brand ><Link to={'/'}>
         <h3 className="logo">Footware</h3>  </Link>  </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>           
            <Nav className="justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="/">          <Search />
              </Nav.Link>
            </Nav>
          
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Nav className="justify-content-end  cartIcon">
         <Link to={'/cart'}><FiShoppingBag/> {cart.length}</Link></Nav>
      </Container>
    </Navbar>
  ))}
</>
    </div>
  )
}

export default Header
