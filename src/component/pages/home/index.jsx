import React, { useEffect, useState } from "react";
import {
  Carousel,
  Container,
  Form,
  Button,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import Navbar from "../../common/navbar/index";
// Images
import Home1 from "../../assets/images/home/bg-1.jpg";
import Home2 from "../../assets/images/home/bg-4.jpg";
import Home3 from "../../assets/images/home/bg-animation.jpg";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  //  AOS Animation
  useEffect(() => {
    AOS.init({});
  }, []);

  // Modal form
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />
      <Carousel controls={false} fade className="parent position-relative">
        <Carousel.Item interval={1000}>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src={Home1} alt="Loading" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src={Home2} alt="Loading" />
        </Carousel.Item>
        <Carousel.Item interval={500} >
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src={Home3} alt="Loading" />
        </Carousel.Item>
      </Carousel>

      <div
        className="border-box  p-1 home-content text-light d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle rounded"
        data-aos="zoom-in-up"
        data-aos-duration="3000"
      >
        <div className="border-animation p-4">
          <h1 className="text-center text-uppercase font-2xl">
            skill intelligence world
          </h1>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus nobis placeat omnis quam dolorum, quos repellendus,
            maxime consectetur harum repellat ipsa possimus adipisci saepe
            recusandae quia libero accusantium cumque laborum!
          </p>
          {/* Modal button */}
          <div className="btn-frame text-center ">
            <button
              class="custom-btn btn-9"
              variant="primary"
              onClick={handleShow}
            >
              Registration
            </button>
          </div>
        </div>
      </div>

      {/* Modal Start */}
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter Your Name"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Your Mobile Number"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Choose Course</Form.Label>

                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">Web-Development</option>
                      <option value="2">Python</option>
                      <option value="3">Back-End-Development</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Gender</Form.Label>

                    <Form.Select aria-label="Default select example">
                      <option>Select</option>
                      <option value="1">Male</option>
                      <option value="2">Female</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal End */}
    </>
  );
};
export default Home;
