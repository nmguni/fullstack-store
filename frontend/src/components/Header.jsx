import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart, FaUser } from "react-icons/fa";


const Header = () => {
   return (
      <header>
         <Navbar expand="md" className="bg-body-tertiary" collapseOnSelect>
            <Container>
               <Navbar.Brand href="/">
                  {/* <img src={logo} alt="proshop" /> */}

                  Pro Shop</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="/cart"><FaShoppingCart /> Cart</Nav.Link>
                     <Nav.Link href="/login"><FaUser /> Sign In</Nav.Link>

                     {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                           Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                           Separated link
                        </NavDropdown.Item>
                     </NavDropdown> */}

                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </header>
   )
}

export default Header