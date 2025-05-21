import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" expand="lg">       
      <Container>       
        <Navbar.Brand href="#">
  <img
    src={require('./assets/image.png')} // hoặc import logo từ đầu file
    alt="Logo"
    width="220"
    height="62"
    className="d-inline-block align-top"
  />{' '}
  
</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" /> 
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
};

export default Header;
