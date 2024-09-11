import React from "react";

import Logo from "../../assets/img/logo/2.png";
const Header = ({ title }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center background-color-light-brown">
        <div className="header-logo">
          <img src={Logo} alt="Loading" />
        </div>
        <div className="text-center h-25 w-50 background-color-cream">
          <h2>{title}</h2>
          <div className="header-bottom-line background-color-brown"></div>
        </div>
      </div>
    </>
  );
};
export default Header;
