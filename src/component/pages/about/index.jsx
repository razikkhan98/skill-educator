import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Logo from "../../assets/img/logo/2-nd-logo.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../../common/header/index";
function Aboutuscard() {
  return (
    <>
      <Container>
      <Header title="w e@e d u c a t o r : ~ $ w h a t w e d o" />
        <Row>
          <Col sm={6}>

          </Col>
          <Col
            className="d-flex align-items-center justify-content-center"
            sm={6}
          >
            <Card className="text-center max-width about-space" border="dark">
              <Card.Header className="background-color-cream about-card-header d-flex align-items-center">
                <div className="header-logo company-logo-terminal">
                  <img src={Logo} alt="Loading" />
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text className="align-left">
                  <h5> AIM & MISSION</h5>
                  We aim to Craft A person in such a way that he/ she shall be
                  able to master the desired skills. These courses involve
                  outlining key topics, skills, and tools that learners will
                  need to master.
                  <h5>Values</h5>
                  Constantly seeking new ideas and technologies to improve
                  services and solutions. Committing to delivering
                  high-quality products, services, and experiences. Ensuring
                  the protection of data and systems, both for the company and
                  its clients.  Valuing diversity, inclusion, and treating all
                  individuals with respect and fairness.  Committing to
                  environmentally sustainable practices and considering the
                  long-term impact of business operations. Constantly seeking
                  new ideas and technologies to improve services and solutions.
                  Committing to delivering high-quality products, services, and
                  experiences.  Ensuring the protection of data and systems,
                  both for the company and its clients.  Valuing diversity,
                  inclusion, and treating all individuals with respect and
                  fairness.  Committing to environmentally sustainable
                  practices and considering the long-term impact of business
                  operations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Aboutuscard;
