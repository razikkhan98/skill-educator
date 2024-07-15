import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Images
import About1 from "../../assets/images/about/About.jpg";
import About2 from "../../assets/images/about/About2.jpg";
const Demo = () => {
  return (
    <>
      <div id="Box">
        <Container className="p-5">
          <Row>
            <Col>
            <img src={About1} className="position-relative h-75" alt="Loading" />
            <img src={About2} className="position-absolute h-50" alt="Loading" />
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Demo;
