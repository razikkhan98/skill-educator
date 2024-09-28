import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Logo from "../../assets/img/logo/2-nd-logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../../assets/img/about/15.png";

const Aboutuscard = () => {
  return (
    <>
      <Container
        className="d-flex Justify-content-center align-items-center"
        id="AboutUs"
      >
        <Row>
          <Col sm={6}>
            <img src={about} alt="Loading" className="mt-3" />
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center"
            sm={6}
          >
            <Card className="about-space" border="dark">
              <Card.Header className="background-color-cream about-card-header d-flex align-items-center">
                <div className="header-logo company-logo-terminal">
                  <img src={Logo} alt="Loading" />
                </div>
              </Card.Header>
              <div className="header-bottom-line background-color-brown"></div>
              <Card.Body className="background-color-dark ">
                <Card.Text className="align-left text-color-light">
                  <h5> AIM & MISSION</h5>
                  We aim to Craft A person in such a way that he/ she shall be
                  able to master the desired skills. These courses involve
                  outlining key topics, skills, and tools that learners will
                  need to master.
                  <h5>Values</h5>
                  <ul>
                    <li>
                      Constantly seeking new ideas and technologies to improve
                      services and solutions.
                    </li>
                    <li>
                      Embracing diversity, equity, and inclusion in all aspects
                      of our teaching.
                    </li>
                    <li>
                      Ensuring the protection of data and systems, both for the
                      company and its clients.
                    </li>
                    <li>
                      Valuing diversity, inclusion, and treating all individuals
                      with respect and fairness.
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
    </>
  );
};

export default Aboutuscard;
