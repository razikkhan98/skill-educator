import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
// Image
import Logo from "../../assets/img/logo/2-nd-logo.png";

// Icons
import { RxCross2 } from "react-icons/rx";
const Courses = () => {
  return (
    <>
      <div className="node-bg-img py-5" id="Courses">
        <Container fluid>
          <Row>
            <Col lg={6}>
              <div className="background-color-dark mt-5">
                <div className="background-color-cream py-1 d-flex align-items-center justify-content-between">
                  <RxCross2 className="fs-2" />
                  <div className="techno-logo">
                    <img src={Logo} alt="Loading" />
                  </div>
                </div>
                <div className="header-bottom-line background-color-brown"></div>

                <div className="spacing-title text-color-light p-3">
                  <h1>Front-End Development</h1>
                  <p className="py-3">
                    Frontend refers to the visual or interactive interface of a
                    website, webpage, or an application that the user interacts
                    with. Therefore, Front-end developers are responsible for
                    ensuring that a website looks good on all devices and that
                    it implements the client's vision and design concept. This
                    course is a complete package of languages like HTML, CSS,
                    JavaScript, React and Node and the students whether they’re
                    on beginners’ level will be able to understand the concepts
                    very easily as they will be given regular practice sets and
                    will learn to work on some real-world projects. The students
                    will be trained by expert educators who ensure to develop
                    the basic and advanced skills in the students that will be
                    helpful for them in their careers ahead.
                  </p>
                  <div className="background-color-cream text-color-dark d-flex align-items-center justify-content-around">
                    <p className="spacing-title fs-3 me-3">know more : ~ $ </p>
                    <Dropdown as={ButtonGroup}>
                      <Button variant="light" className="px-5">
                        Courses
                      </Button>

                      <Dropdown.Toggle
                        split
                        variant="light"
                        id="dropdown-split-basic"
                      />

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                          Font-End Development
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Back-End Development
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Full-stack Development
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                          Machine Learning
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                          Automation Testing
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <div className="header-bottom-line background-color-brown"></div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="dropdown-bg background-color-cream text-color-dark d-flex align-items-baseline justify-content-around mt-5">
                <p className="spacing-title fs-3 me-3">
                  search : ~ $
                  <Dropdown as={ButtonGroup}>
                    <Button variant="light" className="px-5">
                      Courses
                    </Button>

                    <Dropdown.Toggle
                      split
                      variant="light"
                      id="dropdown-split-basic"
                    />

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Font-End Development
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Back-End Development
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Full-stack Development
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Machine Learning
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        Automation Testing
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </p>
              </div>
              <div className="header-bottom-line background-color-brown"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Courses;
