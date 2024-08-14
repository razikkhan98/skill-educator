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
import { FaComputer } from "react-icons/fa6";
import { PiCertificateFill } from "react-icons/pi";

const Service = () => {
  const ServiceCard = [
    {
      icon: <FaGraduationCap />,
      title: "Skilled Instructors",
      description:
        "Our expert guidance will help you understand difficult concepts and gain the skills.",
    },
    {
      icon: <FaGlobe />,
      title: "Online Classes",
      description:
        "Enjoy the convenience of learning at your own pace with our online courses",
    },
    {
      icon: <FaHome />,
      title: "Home Projects",
      description:
        "Apply your knowledge through practical projects and real-world assignments.",
    },
    {
      icon: <FaRegHandshake />,
      title: "Life Time Support",
      description:
        "Join a thriving community of learners and professionals for support and collaboration.",
    },
    {
      icon: <PiCertificateFill />,
      title: "Certification",
      description: 
        "Earn a recognized certification to validate your skills and enhance your career prospects.",
    },
    {
      icon: <FaComputer />,
      title: "Job Placements",
      description:
        "Benefit from expert advice on career planning and job search strategies.",
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
      <section className="bg pt-4 pb-5" id="Service">
        <Container className="pt-5">
          {/* Heading Start */}
          <div className="text-center py-2">
            <h1>Our Service</h1>
            <p>
            We provide exclusive services for your Future
            </p>
          </div>
          {/* Heading End */}

         
          <Row>
            {ServiceCard.map((link, index) => (
              <Col className="d-flex align-items-center justify-content-center">
                <Card
                  className="service-card shadow-lg d-flex flex-column justify-content-center align-items-center text-center mb-4 "
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  style={{ width: "18rem" }}
                >
                  <div className="fs-1">{link.icon}</div>
                  <Card.Body>
                    <Card.Title>{link.title}</Card.Title>
                    <Card.Text>{link.description}</Card.Text>
                    <div className="btn-frame">
                      <button class="custom-btn btn-9">Read More</button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Service;
