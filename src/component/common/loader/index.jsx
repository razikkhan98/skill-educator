import React from "react";

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
    <>
      <div class="page-loader">
        <div class="loader">
          <img src={Logo} alt="Loading" />
        </div>
      </div>
    </>
  );
};
export default Loader;
