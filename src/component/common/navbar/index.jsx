import React, { useState, useEffect } from "react";
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

  
  const [activeLink, setActiveLink] = useState("");
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 60) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              <Nav.Link
                className={`me-4 fw-bold ${
                  activeLink === "Home" ? "active" : ""
                }`}
                href="#Home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={`me-4 fw-bold ${
                  activeLink === "About" ? "active" : ""
                }`}
                href="#About"
              >
                About
              </Nav.Link>
              <Nav.Link
                className={`me-4 fw-bold ${
                  activeLink === "Service" ? "active" : ""
                }`}
                href="#Service"
              >
                Service
              </Nav.Link>
              <Nav.Link
                className={`me-4 fw-bold ${
                  activeLink === "Contact" ? "active" : ""
                }`}
                href="#Contact"
              >
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
