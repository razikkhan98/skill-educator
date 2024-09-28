import React, { useState, useEffect } from "react";

// Bootstrap
import { Container } from "react-bootstrap";

// Images
import Logo from "../../assets/img/logo/2-nd-logo.png";

const Header = () => {
  const [title, setTitle] = useState("");
  const [showHeader, setShowHeader] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sections = [
      { id: "about", title: "About" },
      { id: "Technologies", title: " $technologies" },
      { id: "WhatWeDo", title: " $whatwedo" },
<<<<<<< HEAD
      { id: "AboutUs", title: " $AboutUs" }
=======
      { id: "Courses", title: " $Courses" },
      { id: "Instructor", title: " $Instructor" },


>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
    ];

    // Check which section is currently in view

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) { // Check if element exists
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            setTitle(section.title);
          }
        }
      });
    
      // Show header based on scroll position
      setShowHeader(scrollY >= 700);
    };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
   

  return (
    <React.Fragment>
      <Container
        
        className={`d-flex align-items-center fixed-top rounded-pill header justify-content-center ${showHeader ? "show" : ""}`}       
      >
        <div className="header-logo">
          <img src={Logo} alt="Loading" />
        </div>
        <div className="background-color-cream">
          <h2 className="px-5 spacing-title text-lowercase text-center d-inline-flex bd-highlight">
          we@educator : ~ {title}
          </h2>
          <div className="header-bottom-line background-color-brown"></div>
        </div>
      </Container>
    </React.Fragment>
  );
};
export default Header;
