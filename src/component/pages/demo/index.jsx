import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Images
import About1 from "../../assets/images/courses/about-1.jpg";
// import About2 from "../../assets/images/courses/about-2.jpg";

// Icons
import { FaCheckCircle } from "react-icons/fa";

const Demo = () => {
  return (
    <>
      <div id="Box">
        <Container className="p-5">
          <Row className="bg-color-transparent rounded-3 p-5">
            <Col className="pt-5">
              <div className="bg-color text-white border rounded-3 border-info p-3">
                <h2>About Us</h2>
                <h3> sit amet consectetur</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  ea consequuntur eum illum fugit quos ab aut perspiciatis
                  tempora nulla. Quisquam tenetur minima ut rerum atque. Nam
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

            <Col>
              <div className=" border-info">
                <img
                  src={About1}
                  className="position-relative rounded-3 mb-5"
                  alt="Loading"
                />
                {/* <img src={About2} alt="" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Demo;
