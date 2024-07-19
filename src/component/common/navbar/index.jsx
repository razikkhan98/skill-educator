import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
const NavigationBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-color-transparent p-3 fixed-top">
        <Container>
          <Navbar.Brand className="text-white" href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link className="me-4 text-white" href="#Home">Home</Nav.Link>
              <Nav.Link className="me-4 text-white" href="#About">About</Nav.Link>
              <Nav.Link className="me-4 text-white" href="#Service">Service</Nav.Link>
              <Nav.Link className="me-4 text-white" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
