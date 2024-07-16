import React from "react";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import {FaGraduationCap, FaHome, FaGlobe, FaRegHandshake } from "react-icons/fa";

const Service = () => {
  const ServiceCard = [
    {
      icon: <FaGraduationCap />,
      title: "Skilled Instructors",
      description:
        " With supporting text below as a natural lead-in to additional content.",
    },
    {
      icon: <FaGlobe />,
      title: "Online Classes",
      description:
        " With supporting text below as a natural lead-in to additional content.",
    },
    {
      icon: <FaHome />,
      title: "Home Projects",
      description:
        " With supporting text below as a natural lead-in to additional content.",
    },
    {
      icon: <FaRegHandshake />,
      title: "Life Time Support",
      description:
        " With supporting text below as a natural lead-in to additional content.",
    },
    
  ];
  return (
    <>
      <div className="bg-service p-5">
        <Container>
          {/* Heading Start */}
          <div className="text-center mb-5">
            <h1>Our Service</h1>
            {/* <div className="h-25 w-25 p-2 bg-dark d-inline-block mb-2"></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ratione accusantium, odio
            </p>
          </div>
          {/* Heading End */}

          <Row>
            <Col lg={6} md={12}>
                {/* Card Start */}
              <Row>
                {ServiceCard.map((link, index) => (
                  <Col>
                    <Card
                      className="shadow d-flex flex-column justify-content-center align-items-center text-center mb-5 py-3"
                      style={{ width: "18rem" }}
                    >
                      <div className="fs-1">
                      {link.icon}
                      </div>
                      <Card.Body>
                        <Card.Title>{link.title}</Card.Title>
                        <Card.Text>{link.description}</Card.Text>
                        <button className="theme-btn">Go somewhere</button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
                {/* Card Start */}
            </Col>

            {/* Form Start */}
            <Col md={12} lg={6}>
              <div className="service-form bg p-5">
                <h2 className="text-uppercase pb-3">Registration Form</h2> 
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Your Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Your Mobile Number"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Courses</Form.Label>
                    <Form.Select
                      className="mb-3"
                      aria-label="Default select example"
                    >
                      <option>Choose Course</option>
                      <option value="1">Web Development</option>
                      <option value="2">App Development</option>
                      <option value="3">Back-End Development</option>
                    </Form.Select>
                  </Form.Group>
                  <button className="theme-btn mt-5" type="submit">Submit Now</button>
                  {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Enter Your Address"/>
                  </Form.Group> */}
                </Form>
              </div>
            </Col>
            {/* Form End */}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Service;
