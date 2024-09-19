import React, { useState, useEffect } from "react";
 
import Logo from "../../assets/img/logo/2-nd-logo.png";
const CompanyName = () => {
  const binary = "010101010101010101";
  const targetText = "intelligence Eductor";
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
      <div className="bg-gif d-flex justify-content-center align-items-center">
        <div className="company-logo">
            <img src={Logo} alt="Loading" />
        </div>
        <div className="animated-text fs-1 text-white text-uppercase">{displayedText}</div>
      </div>
    </>
  );
};
 
export default CompanyName;
 
 