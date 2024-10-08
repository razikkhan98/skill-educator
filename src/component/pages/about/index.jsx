import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Logo from "../../assets/img/logo/2-nd-logo.png";
import about from "../../assets/img/about/15.png";

// Icons
import { RxCross2 } from "react-icons/rx";
const Aboutuscard = () => {
  return (
    <>
      <div className="node-bg-img py-5" id="About">
        <Container fluid>
          <Row className="my-5">
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div
                className="about-img"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img src={about} alt="Loading" />
              </div>
            </Col>
            <Col
              lg={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Card
                className="spacing-title"
                border="dark"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <Card.Header className="background-color-cream d-flex align-items-center justify-content-between px-3">
                  <div className="techno-logo">
                    <img src={Logo} alt="Loading" />
                  </div>
                  <RxCross2 className="fs-2" />
                </Card.Header>
                <div className="header-bottom-line background-color-brown"></div>
                <Card.Body className="background-color-dark ">
                  <Card.Text className="align-left text-color-light">
                    <h5> AIM & MISSION</h5>
                    We aim to Craft A person in such a way that he/ she shall be
                    able to master the desired skills. These courses involve
                    outlining key topics, skills, and tools that learners will
                    need to master.
                    <h5 className="mt-3">Values</h5>
                    <ul>
                      <li>
                        Constantly seeking new ideas and technologies to improve
                        services and solutions.
                      </li>
                      <li>
                        Embracing diversity, equity, and inclusion in all
                        aspects of our teaching.
                      </li>
                      <li>
                        Ensuring the protection of data and systems, both for
                        the company and its clients.
                      </li>
                      <li>
                        Valuing diversity, inclusion, and treating all
                        individuals with respect and fairness.
                      </li>
                      <li>
                        Embracing a culture of continuous learning and
                        professional development.
                      </li>
                      <li>
                        Supporting students and staff to achieve their full
                        potential.
                      </li>
                      <li>
                        Striving for high standards in teaching, learning, and
                        research.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutuscard;
