import React, { useState, useEffect } from "react";
 
import Logo from "../../assets/img/logo/2-nd-logo.png";
const CompanyName = () => {
  const binary = "010101010101010101";
  const targetText = "intelligence Educator";
  const [displayedText, setDisplayedText] = useState(binary);
 
  useEffect(() => {
    let currentText = binary.split("");
    let index = 0;
 
    const interval = setInterval(() => {
      if (index < targetText.length) {
        if (index < binary.length) {
          // Gradually replace binary characters with the targetText
          currentText[index] = targetText[index];
        } else {
          // Append new characters from the targetText
          currentText.push(targetText[index]);
        }
        setDisplayedText(currentText.join(""));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Transition time between each character change
 
    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);
 
  return (
    <>
      <div className="bg-gif position-relative d-flex justify-content-center align-items-center">
        <div className="company-logo z-3 mb-5 mx-2">
            <img src={Logo} alt="Loading" />
        </div>
        <div className="z-3">
        <div className="animated-text text-color-dark text-uppercase">{displayedText}</div>
        <p className="cursor typewriter-animation text-color-dark mt-2">From Hello World !! to complex programs</p>
        </div>
      </div>
    </>
  );
};
 
export default CompanyName;
 
 