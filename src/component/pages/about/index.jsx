import React from "react";
import Button from "react-bootstrap/Button";
 
import aboutImg from "../../assets/images/home/home-1.jpg"
const About = ()=> {

    return(
        <>
        <section id="Box">
        <div class="container p-5 d-flex align-items-center justify-content-center">
          <div className="aboutBox position-relative p-5 ">
            <div class="row">
              <div class="col-lg-5">
                <div className="aboutImg position-absolute start-0 bottom-50">
                  <img src={aboutImg} alt="loading"  />
                </div>
              </div>
              <div class="col-lg-7">
                <div className="aboutText ">
                  <h3>About Us</h3>
                  <p>
                    Sample text. Click to select the Text Element. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <i>Image from Freepik</i>
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