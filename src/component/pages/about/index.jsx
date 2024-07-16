import React from "react";
import { Container, Row, Col } from "react-bootstrap";


// Images
import About1 from "../../assets/images/courses/about-1.jpg";
// import About2 from "../../assets/images/courses/about-2.jpg";

// Icons
import { FaCheckCircle } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div id="Box">
        <Container className="p-5">
          <Row className="bg-color-transparent rounded-3 my-5 py-4 g-5 ">
            <Col  md={6} sm={12} className="pt-5">
              <div className="bg-color text-white border rounded-3 border-info p-3">
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

            <Col md={6} sm={12} >
              <div className=" position-relative border-info text-end">
                <img
                  src={About1}
                  className="rounded-3  h-100 w-100"
                  alt="Loading"
                />
                {/* <img src={About2} className="position-absolute top-50 end-50 h-50 w-100 rounded-3" alt="Loading" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About;
