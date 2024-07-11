import React from "react";
import Container from "react-bootstrap/Container";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

import { FaComputer } from "react-icons/fa6";

const Service = () => {
  const ServiceCard = [
    {
      title: "Special title treatment",
      description:
        " With supporting text below as a natural lead-in to additional content.",
    },
    {
      title: "Special title treatment",
      description:
        " With supporting text below as a natural lead-in to additional content.",
    },
    {
      title: "Special title treatment",
      description:
        " With supporting text below as a natural lead-in to additional content.",
    },
    {
      title: "Special title treatment",
      description:
        " With supporting text below as a natural lead-in to additional content.",
    },
    // {
    //   title: "Special title treatment",
    //   description:
    //     " With supporting text below as a natural lead-in to additional content.",
    // },
    // {
    //   title: "Special title treatment",
    //   description:
    //     " With supporting text below as a natural lead-in to additional content.",
    // },
    // {
    //   title: "Special title treatment",
    //   description:
    //     " With supporting text below as a natural lead-in to additional content.",
    // },
    // {
    //   title: "Special title treatment",
    //   description:
    //     " With supporting text below as a natural lead-in to additional content.",
    // },
  ];
  return (
    <>
      <div className="bg-service p-5">
        <Container>
          <div className="text-center mb-5">
            <h1>Our Service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ratione accusantium, odio
            </p>
          </div>
          <Row>
            <Col>
              <Row>
                {ServiceCard.map((link, index) => (
                  <Col>
                    <Card
                      className="d-flex flex-column justify-content-center align-items-center text-center mb-5 py-3"
                      style={{ width: "18rem" }}
                    >
                      <FaComputer className="fs-1" />
                      <Card.Body>
                        <Card.Title>{link.title}</Card.Title>
                        <Card.Text>{link.description}</Card.Text>
                        <button className="theme-btn">Go somewhere</button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col className="bg">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Service;
