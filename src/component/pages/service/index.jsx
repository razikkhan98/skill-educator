import React from "react";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";

import {
  FaGraduationCap,
  FaHome,
  FaGlobe,
  FaRegHandshake,
} from "react-icons/fa";

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
      <div className="bg">
        <Container>
          {/* Heading Start */}
          <div className="text-center  py-5">
            <h1>Our Service</h1>
            {/* <div className="h-25 w-25 p-2 bg-dark d-inline-block mb-2"></div> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ratione accusantium, odio
            </p>
          </div>
          {/* Heading End */}

          {/* <Row> */}
          {/* <Col> */}
          {/* Card Start */}
          <Row>
            {ServiceCard.map((link, index) => (
              <Col className="d-flex align-items-center justify-content-center">
                <Card
                  className=" shadow-lg d-flex flex-column justify-content-center align-items-center text-center mb-5 pb-3"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  style={{ width: "18rem" }}
                >
                  <div className="fs-1">{link.icon}</div>
                  <Card.Body>
                    <Card.Title>{link.title}</Card.Title>
                    <Card.Text>{link.description}</Card.Text>
                    <div className="btn-frame mt-4">
                      <button class="custom-btn btn-9">Read More</button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {/* Card Start */}
          {/* </Col> */}

          {/* Form Start */}
          {/* <Col md={12} lg={6}>
              <div className="bg-color-transparent bg-border-animation border-primary border border-info service-form bg p-5 mb-5">
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
                  <div className="btn-frame pt-5 ">
                    <button class="custom-btn btn-9">Submit</button>
                  </div>
                </Form>
              </div>
            </Col> */}
          {/* Form End */}
          {/* </Row> */}
        </Container>
      </div>
    </>
  );
};
export default Service;
