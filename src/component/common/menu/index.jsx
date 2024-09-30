import React, { useState } from "react";

// Icon
import { IoSettingsOutline } from "react-icons/io5";
import { FaHandSparkles } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-bootstrap";

const Menu = () => {
  const [showButtons, setShowButtons] = useState(false);

  const showClick = (e) => {
    e.preventDefault();
    setShowButtons(!showButtons);
  };

  return (
    <React.Fragment>
      <div className="fixed-button">
        <a
          href="/"
          className="btn background-color-dark text-white"
          onClick={showClick}
        >
          <IoSettingsOutline className="fixed-logo fs-2" />
          <IoSettingsOutline className="fixed-logo mt-4 fs-3" />
        </a>
        {showButtons && (
          <div
            className={`additional-buttons ${showButtons ? "show" : ""}`}
            data-aos="fade-left"
          >
            <a
              href="tel:+1234567890"
              className="btn p-3 additional-btn top background-color-dark text-color-light"
            >
              <FaHandSparkles className="fs-3" />
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="btn p-3 additional-btn right background-color-dark text-color-light"
            >
              <TfiWrite className="fs-3" />
            </a>
            <NavLink
              href="https://maps.app.goo.gl/PhAXJvB2xWhCKv5n8"
              target="_blank"
               rel="noopener noreferrer"
              className="btn p-3 additional-btn bottom background-color-dark text-color-light"
            >
              <FaLocationDot className="fs-3" />
            </NavLink>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Menu;
