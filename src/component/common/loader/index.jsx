import React from "react";

// Images
import Logo from "../../assets/img/logo/2.png";


const Loader = () => {
  window.addEventListener("load", function () {
    setTimeout(function () {
      var loader = document.querySelector(".page-loader");
      if (loader) {
        loader.classList.add("hidden");
      }
    }, 2000); // Delay in milliseconds
  });
  return (
    <React.Fragment>
      <div className="page-loader company-back position-fixed top-0 start-0 d-flex align-items-center justify-content-center w-100 h-100">
        <div className="loader">
          <img src={Logo} alt="Loading" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Loader;
