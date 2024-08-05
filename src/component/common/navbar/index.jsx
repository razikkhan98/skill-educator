import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
const NavigationBar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 700) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={` p-3 fixed-top ${
          color ? "bg-color-transparent header" : "bg-color-transparent"
        }`}
      >
        <Container>
          <Navbar.Brand className="text-white" href="#home">
            Intelligence Educator
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center ">
              <Nav.Link className="me-4 fw-bold" href="#Home">
                Home
              </Nav.Link>
              <Nav.Link className="me-4 fw-bold" href="#About">
                About
              </Nav.Link>
              <Nav.Link className="me-4 fw-bold" href="#Service">
                Service
              </Nav.Link>
              <Nav.Link className="me-4 fw-bold" href="#contact">
                Contact
              </Nav.Link>
              <Nav.Link className="btn-frame text-center" href="#contact">
                <button class="custom-btn btn-9">Registration</button>
              </Nav.Link>
              {/* <div className="btn-frame text-center">
                <button class="custom-btn btn-9">Registration</button>
              </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default NavigationBar;
