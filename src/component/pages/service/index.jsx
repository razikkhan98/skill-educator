import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
  ];
  return (
    <>
      <div className="bg-service p-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1>Our Service</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ratione accusantium, odio
            </p>
          </div>
          <div className="row">
            {ServiceCard.map((link, index) => (
              <div className="col-lg-3 col-md-6 gap-5 mb-5">
                <Card className="d-flex flex-column justify-content-center align-items-center text-center" style={{ width: "18rem" }}>
                  <FaComputer className="fs-1"/>
                  <Card.Body>
                    <Card.Title>{link.title}</Card.Title>
                    <Card.Text>
                    {link.description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
