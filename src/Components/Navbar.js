import React from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import './Navbar.css'

const MyNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9FZffpP0abCpQreidyI1t691zbTHyeaJtVw&usqp=CAU' style={{ borderRadius: "20%", height: '50px' }} /> 
         &nbsp; <strong style={{color:'#18819d'}}>Sreeji info Soft</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ paddingLeft: '40%' }}>
            <Nav.Link href="/home" style={{color:'#18819d'}}><strong>Home</strong></Nav.Link>

            {/* Dropdown for Services */}
            <li class="dropdown">
              <a class="dropdown-toggle" href="Services"  >
                <strong>Services</strong>
              </a>
              <ul>
                <li>
                  <a class="dropdown-item" href="Domain">Domain brokerage</a>
                </li>
             
                <li>
                  <a class="dropdown-item" href="services.Portfolio-management">Portfolio management</a>
                </li>
              </ul>
            </li>

            <Nav.Link href="/aboutus" style={{color:'#18819d'}}><strong>About us</strong></Nav.Link>
            <Nav.Link href="/contact">
              <button style={{ borderRadius: '30%', backgroundColor: '#18819d', color: 'black', textTransform: 'uppercase' }}>
                <strong>CONTACT US</strong>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      
    </Navbar>

  );
};

export default MyNavbar;
