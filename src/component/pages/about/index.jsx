import React from "react";
import { Container, Row, Col } from "react-bootstrap";


// Images
import About1 from "../../assets/images/courses/about-1.jpg";
import About2 from "../../assets/images/courses/about-2.jpg";
import About3 from "../../assets/images/about/About.jpg";
import About4 from "../../assets/images/about/about-bg.jpg";

// Icons
import { FaCheckCircle } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div id="Box">
        <Container className="p-3">
          <Row className="bg-color-transparent rounded-3 my-5 py-4 g-5 ">
            <Col lg={6} >
              <div className="bg-color border-animation text-white border rounded-3 border-info p-3">
                <h2>About Us</h2>
                <h3> sit amet consectetur</h3>
                <p className="mb-4"> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  ea consequuntur eum illum fugit quos ab aut perspiciatis
                  tempora nulla. Quisquam tenetur minima ut rerum atque. Nam
                  tenetur blanditiis quaerat.Quisquam tenetur minima ut rerum atque. Nam
                  tenetur blanditiis quaerat.
                </p>
                <ul className="list-unstyled ">
                  <li className="d-flex align-items-center mb-3">
                    <FaCheckCircle className="me-3 " />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <FaCheckCircle className="me-3" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <FaCheckCircle className="me-3" />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </li>
                </ul>

                <div className="btn-frame my-5">
                  <button class="custom-btn btn-9">Read More</button>
                </div>
              </div>
            </Col>

            <Col lg={6} className="pt-5">
            <Row className="g-3">
              <Col xs={6} className="text-end">
              <img src={About1} className="shadow-lg img-fluid rounded w-75 " alt="Loading"  style={{marginTop: "23%"}} />
              </Col>
              <Col xs={6} className="text-end ">
              <img src={About2} className="shadow-lg img-fluid rounded w-100 " alt="Loading" />
              </Col>
              <Col xs={6} className="text-start mt-3">
              <img src={About3} className="shadow-lg img-fluid rounded w-100 " alt="Loading" />
              </Col>
              <Col xs={6} className="text-start mt-2">
              <img src={About4} className="shadow-lg img-fluid rounded w-75" alt="Loading"  />
              </Col>
            </Row>
              {/* <div className=" position-relative border-info text-end">
                <img
                  src={About1}
                  className="rounded-3  h-100 w-100"
                  alt="Loading"
                />
                <img src={About2} className="position-absolute top-50 end-50 h-50 w-100 rounded-3" alt="Loading" />
              </div> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About;
