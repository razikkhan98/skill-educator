import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/img/logo/2-nd-logo.png";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-bottom">
        <Container fluid>
          <Navbar.Brand
            className="d-flex align-items-center nav-text text-uppercase"
            href="#"
          >
            <img
              src={Logo}
              alt="Loading"
              // width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            INTELLIGENCE EDUCATOR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                className="nav-link fs-4 nav-text me-4"
                href="tel:+21236547898"
              >
                <IoCall className="social-icon rounded-circle fs-1 me-3" />
                +2 123 654 7898
              </Nav.Link>
              <Nav.Link
                class="nav-link nav-text fs-4 me-4"
                href="mailto:info@example.com"
              >
                <IoIosMail className="social-icon rounded-circle fs-1 me-3" />
                info123@gmail.com
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
