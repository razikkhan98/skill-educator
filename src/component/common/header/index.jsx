import React from "react";
import { Container } from "react-bootstrap";
import Logo from "../../assets/img/logo/2-nd-logo.png";
const Header = ({ title }) => {
  return (
    <>
      <Container fluid className="d-flex align-items-center justify-content-center py-3">
          <div className="header-logo">
            <img src={Logo} alt="Loading" />
            </div>
          <div className="background-color-cream">
            <h2 className="px-5 text-lowercase text-center d-inline-flex bd-highlight">{title}</h2>
            <div className="header-bottom-line background-color-brown"></div>
          
          </div>

      </Container>
    </>
  );
};
export default Header;
