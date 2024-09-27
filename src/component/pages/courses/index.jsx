import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
// Image
import Logo from "../../assets/img/logo/2-nd-logo.png";

// Icons
import { RxCross2 } from "react-icons/rx";
const Courses = () => {
  const CourseData = [
    {
      id: "action-1",
      title: "Front-End Development",
      description:
        "Frontend refers to the visual or interactive interface of a website, webpage, or an application that the user interacts with. Therefore, Front-end developers are responsible for ensuring that a website looks good on all devices and that it implements the client's vision and design concept. This course is a complete package of languages like HTML, CSS, JavaScript, React and Node and the students whether they’re on beginners’ level will be able to understand the concepts very easily as they will be given regular practice sets and will learn to work on some real-world projects. The students will be trained by expert educators who ensure to develop the basic and advanced skills in the students that will be helpful for them in their careers ahead.",
    },
    {
      id: "action-2",
      title: "Back-End Development",
      description:
        "Back-end means the server side of software , which focuses on everything you can't see on a website. Back-end developers ensure the website performs correctly, focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers.This course includes programming languages such as C, C++, python, JavaScript, Java. The students will be trained by expert educators who ensure to develop the basic and advanced skills in the students that will be helpful for them in their careers ahead.",
    },
    {
      id: "action-3",
      title: "Full-Stack Development",
      description:
        "Full stack development means being able to build both the front end (what users see and interact with) and the back end (the server, database, and application logic) of a website or application. This course will help developers to build both the front end and back end, making them capable of creating a complete web application from start to finish.",
    },
    {
      id: "action-4",
      title: "Machine Learning",
      description:
        "Machine learning is a branch of artificial intelligence (AI) that focuses on creating systems that can learn from data and improve their performance over time without being explicitly programmed. From predicting customer behavior to powering self-driving cars, machine learning is at the heart of modern innovation.This course is designed to introduce you to the fascinating world of machine learning, a field that is revolutionizing industries and shaping the future of technology. Whether you're new to programming or an experienced developer, this course will equip you with the skills and knowledge to build intelligent systems that can learn and make decisions.",
    },
    {
      id: "action-5",
      title: "Automation Testing",
      description:
        "Automation is like having a robot or software do repetitive tasks for you, so you don’t have to do them yourself. It makes life easier by handling routine tasks efficiently. This course is designed to introduce you to the exciting field of automation, whether you’re a beginner looking to understand the basics or a professional aiming to enhance your skills. We will explore a wide range of topics, from the fundamental concepts of automation to hands-on projects that will equip you with the practical knowledge needed to implement automation in various settings.",
    },
  ];
  const [selectedCourse, setSelectedCourse] = useState(CourseData[0]);

  const handleSelect = (course) => {
    setSelectedCourse(course);
  };

  return (
    <>
      <div className="node-bg-img py-5" id="Courses">
        <Container fluid>
          <Row className="my-5">
            <Col lg={7}>
              <div className="background-color-dark">
                <div className="background-color-cream py-1 px-2 d-flex align-items-center justify-content-between">
                  <RxCross2 className="fs-2" />
                  <div className="techno-logo">
                    <img src={Logo} alt="Loading" />
                  </div>
                </div>
                <div className="header-bottom-line background-color-brown"></div>
                <div className="spacing-title text-color-light p-3">
                  {/* {CourseData.map((data, index) => ( */}
                  {/* // <div id={data.id}> */}
                  <h1>{selectedCourse.title}</h1>
                  <p className="py-3">{selectedCourse.description}</p>
                  {/* // </div> */}
                  {/* ))} */}
                  <div className="background-color-cream text-color-dark d-flex align-items-center justify-content-around text-center">
                    <p className="spacing-title fs-3 me-3">
                      know more : ~ ${" "}
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
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="dropdown-bg background-color-cream text-color-dark d-flex align-items-center text-center justify-content-around mt-5">
                <p className="spacing-title fs-3 me-3">
                  search : ~ $
                  <Dropdown
                    as={ButtonGroup}
                    onSelect={(eventKey) => handleSelect(CourseData[eventKey])}
                  >
                    <Button variant="dark" className="px-5">
                      Courses
                    </Button>
                    <Dropdown.Toggle
                      split
                      variant="dark"
                      id="dropdown-split-basic"
                    />

                    <Dropdown.Menu>
                      {CourseData.map((course, index) => (
                        <Dropdown.Item key={course.id} eventKey={index}>
                          {course.title}
                        </Dropdown.Item>
                      ))}
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
