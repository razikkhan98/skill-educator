import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/img/logo/2.png";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-bottom">
        <Container fluid>
          <Navbar.Brand className="d-flex align-items-center nav-text text-uppercase" href="#">
            <div className="logo">
            <img src={Logo} alt="Loading" />
            </div>
            INTELLIGENCE EDUCATOR
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="nav-link fs-4 nav-text me-4" href="tel:+21236547898">
            
                    <IoCall className="social-icon rounded-circle fs-1 me-3" />
                    +2 123 654 7898
                
              </Nav.Link>
              <Nav.Link  class="nav-link nav-text fs-4 me-4" href="mailto:info@example.com">
            
                    <IoIosMail className="social-icon rounded-circle fs-1 me-3" />
                    info@gmail.com
                
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <footer>
        <nav class="navbar navbar-expand-lg fixed-bottom">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <a
                class="navbar-brand text-uppercase fw-bold nav-text d-flex align-items-center"
                href="#"
              >
                <div className="logo">
                  <img src={Logo} alt="Loading" />
                </div>
                Intelligence Educator
              </a>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a
                    class="nav-link fs-4 nav-text me-4"
                    aria-current="page"
                    href="tel:+21236547898"
                  >
                    <IoCall className="social-icon rounded-circle fs-1 me-3" />
                    +2 123 654 7898
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link nav-text fs-4 me-4"
                    href="mailto:info@example.com"
                  >
                    <IoIosMail className="social-icon rounded-circle fs-1 me-3" />
                    info@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </footer> */}
    </>
  );
};
export default Footer;
