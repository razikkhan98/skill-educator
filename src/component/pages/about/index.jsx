import React from "react";
import Button from "react-bootstrap/Button";

import aboutImg from "../../assets/images/home/home-1.jpg";
const About = () => {
  return (
    <>
      <section id="Box">
        <div class="container p-5">
          <div className="aboutBox">
            <div class="row">
              <div class="col-lg-5 ">
                <div className="aboutImg">
                  <img src={aboutImg} alt="loading" className="w-100 h-100" />
                </div>
              </div>
              <div class="col-lg-7">
                <div className="aboutText px-3">
                  <h3>About Us</h3>
                  <p className="text-white">
                    Sample text. Click to select the Text Element. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <i className="text-white">Image from Freepik</i>
                  <br />
                  <Button variant="info">Info</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
