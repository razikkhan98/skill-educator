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
      <div className="bg-image1 background-img" id="About">
        <Container className="p-3">
          <Row className="bg-color-transparent rounded-3 my-5 py-4 g-5 ">
            <Col lg={6}>
              <div
                className="bg-color bg-border-animation text-white border rounded-3 border-info p-3"
                data-aos="flip-right"
                data-aos-duration="1500"
              >
                <h2>About Us</h2>
                <h4>Our target is to build your skills </h4>
                <p className="mb-4">
                  At SIW (Skill Intelligence World), we believe that mastering
                  web development skills is the key to unlocking countless
                  opportunities in the tech industry. Our courses are
                  meticulously designed to help you develop the necessary skills
                  and knowledge to excel in web development, whether you're a
                  complete beginner or an experienced professional looking to
                  enhance your expertise.
                </p>
                <ul className="list-unstyled ">
                  <li className="d-flex align-items-center mb-3">
                    <FaCheckCircle className="me-3 " />
                    Build Real Projects.
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <FaCheckCircle className="me-3" />
                    Explore Data Science.
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <FaCheckCircle className="me-3" />
                    Develop Web Apps.
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
                  <img
                    src={About1}
                    className="shadow-lg img-fluid rounded w-75 "
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-delay="400"
                    alt="Loading"
                    style={{ marginTop: "23%" }}
                  />
                </Col>
                <Col xs={6} className="text-end ">
                  <img
                    src={About2}
                    className="shadow-lg img-fluid rounded w-100 "
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-delay="300"
                    alt="Loading"
                  />
                </Col>
                <Col xs={6} className="text-start mt-3">
                  <img
                    src={About3}
                    className="shadow-lg img-fluid rounded w-100 "
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-delay="500"
                    alt="Loading"
                  />
                </Col>
                <Col xs={6} className="text-start mt-2">
                  <img
                    src={About4}
                    className="shadow-lg img-fluid rounded w-75"
                    data-aos="zoom-in"
                    data-aos-duration="3000"
                    data-aos-delay="600"
                    alt="Loading"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default About;
