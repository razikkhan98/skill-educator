import React, { useState } from "react";
// import { Button, ButtonGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { FaUser } from 'react-icons/fa';
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";

const Menu = () => {
  const [showButtons, setShowButtons] = useState(false);

  const showClick = (e) => {
    e.preventDefault();
    setShowButtons(!showButtons);
  };

  return (
    <div className="fixed-button">
      <a
        href="/"
        className="btn p-3 background-color-cream text-color-brown"
        onClick={showClick}
      >
        {/* <FaUser /> */}
        <MdOutlineSettingsSuggest className="fs-1 fw-bold" />
      </a>
      {showButtons && (
        <div className="additional-buttons" data-aos="fade-left">
          <a
            href="tel:+1234567890"
            className="btn additional-btn top background-color-cream text-color-brown"
          >
            <BiSolidPhoneCall className="fs-3" />
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="btn additional-btn right background-color-cream text-color-brown"
          >
            <IoLogoWhatsapp className="fs-3" />
          </a>
          <a
            href="mailto:example@example.com"
            className="btn additional-btn bottom background-color-cream text-color-brown"
          >
            <IoIosMail className="fs-3" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Menu;
