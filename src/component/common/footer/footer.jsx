import React, { useState, useEffect } from "react";
// Bootstrap
import { Container, Nav, Navbar } from "react-bootstrap";

// Images
import Logo from "../../assets/img/logo/Intelligence Educator1.png";

// Icons
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 700) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        className={`bg-body-tertiary fixed-bottom ${showNavbar ? "show" : ""}`}
      >
        <Container fluid>
          <Navbar.Brand
            className="d-flex footer-title align-items-center text-uppercase"
            href="#"
          >
            <img
              src={Logo}
              alt="Loading"
              // width="40"
              height="40"
              className="d-inline-block align-top me-1"
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
              <Nav.Link className="nav-link fs-5" href="tel:+21236547898">
                <IoCall className="social-icon rounded-circle fs-2 me-2" />
                9238882696
              </Nav.Link>
              <Nav.Link className="nav-link fs-5" href="tel:+21236547898">
                <IoCall className="social-icon rounded-circle fs-2 me-2" />
                9179150494
              </Nav.Link>
              <Nav.Link className="nav-link fs-5" href="mailto:info@example.com">
                <IoIosMail className="social-icon rounded-circle fs-2 me-2" />
              fusion.with@skillintelligence.tech
              </Nav.Link>
            </Nav>
            <div className="d-flex">
              <a
                className="social-btn d-flex align-items-center justify-content-center me-4"
                href="/#"
              >
                <FaFacebookF className="btn-icon fs-4" />
              </a>
              <a
                className="social-btn d-flex align-items-center justify-content-center me-4"
                href="https://in.linkedin.com/in/skill-intelligence-world-ba479028b"
              >
                <FaLinkedinIn className="btn-icon fs-4" />
              </a>
              <a
                className="social-btn d-flex align-items-center justify-content-center me-4"
                href="https://www.instagram.com/intelligence_educator/"
              >
                <FaInstagram className="btn-icon fs-4" />
              </a>
              <a
                className="social-btn d-flex align-items-center justify-content-center me-4"
                href="/#"
              >
                <FaWhatsapp className="btn-icon fs-4" />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Footer;
