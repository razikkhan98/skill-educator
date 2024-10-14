import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
// Image
import Logo from "../../assets/img/logo/2-nd-logo.png";
// Icons
import { RxCross2 } from "react-icons/rx";
import { FaUserEdit, FaBookOpen, FaCalendarAlt } from "react-icons/fa";
const Courses = () => {
  const CourseData = [
    {
      id: "action-1",
      title: "Front-End Development",
      description:
        " If you’re interested in building your career in front-end development, then this course may help you in mastering the basic and advanced skills required for your career ahead. The technologies included in this course are html, CSS, JavaScript, ReactJS and NodeJS. The students will be trained by experienced educators who are passionate about their students, growing in the IT industry.",
      video: "front-end-video",
    },
    {
      id: "action-2",
      title: "Back-End Development",
      description:
        " This course provides an in-depth introduction to backend development, including server-side programming, database management, and API design. This course may help you in mastering the basic and advanced skills required for your career ahead. The technologies included in this course are Node.js, Python, Ruby, Java. The students will be trained by experienced educators who are passionate about their students growing in the IT industry.",
      video: "back-end-video",
    },
    {
      id: "action-3",
      title: "Full-Stack Development",
      description:
        " This course covers the complete in-depth introduction of full stack web development, enabling students to build dynamic web applications from scratch. Participants will learn both frontend backend and technologies, mastering the skills needed to create, deploy, and maintain applications",
      video: "full-stack-video",
    },
    {
      id: "action-4",
      title: "AI & Machine Learning",
      description:
        " Artificial intelligence means the idea of a machine that can mimic human intelligence whereas, Machine learning aims to teach a machine how to perform a specific task and provide accurate results by identifying patterns. This course gives an in-depth introduction to artificial intelligence (AI) and machine learning (ML), including the fundamental concepts, techniques, and applications that are shaping the future of technology. Students will gain hands-on experience in developing AI and ML models and understand how to apply these technologies to solve real-world problems.",
      video: "machine-learning-video",
    },
    {
      id: "action-5",
      title: "Automation Testing",
      description:
        " This course provides an in-depth introduction to automation testing, equipping students with the knowledge and skills to effectively automate testing processes for software applications. Students will learn various testing frameworks, tools, and best practices to ensure high-quality software delivery. The students will be trained by experienced educators who are passionate about their students growing in the IT industry.",
      video: "automation-video",
    },
    {
      id: "action-6",
      title: "Ethical Hacking",
      description:
        " Ethical hacking is an authorized attempt to gain unauthorized access to a computer system, application, or data using the strategies and actions of malicious attackers. This practice helps identify security vulnerabilities that can then be resolved before a malicious attacker can exploit them. This course provides a thorough introduction to ethical hacking and cybersecurity principles, equipping students with the skills to identify vulnerabilities in systems and protect against cyber threats. Participants will learn the methodologies and tools used by ethical hackers to assess and enhance security measures.",
      video: "ethical-hacking-video",
    },
    {
      id: "action-7",
      title: "Data Analysis",
      description:
        " Enter the world of data analysis and learn how to transform raw data into actionable insights. This course is designed to guide students through the entire data analysis process, from data collection to interpretation, using industry-standard tools and techniques. Participants will learn to use various tools and techniques to extract insights from data, making informed decisions in business, research, and other fields.",
      video: "data-analysis-video",
    },
    {
      id: "action-8",
      title: "Digital Marketing",
      description:
        "  A digital marketing course helps students to promote and advertise their products and services online efficiently via multiple digital channels. This course provides a comprehensive introduction to digital marketing, equipping students with the tools and strategies needed to effectively promote products and services online. From social media to search engine optimization, participants will learn how to create, implement, and measure successful digital marketing campaigns.",
      video: "digital-marketing-video",
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(CourseData[0]);
  const [typedText, setTypedText] = useState(CourseData[0].description);

  const handleSelect = (course) => {
    setSelectedCourse(course);
    startTypingAnimation(course.description);
  };

  const startTypingAnimation = (text) => {
    setTypedText(""); // Reset typed text

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10);
  };

  return (
    <div className="background-color-light-brown py-5" id="Courses">
      <Container fluid>
        <Row className="my-5 g-5">
          <Col lg={7}>
            <div
              className="background-color-dark course-card position-relative"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="background-color-cream py-1 px-2 d-flex align-items-center justify-content-between">
                <RxCross2 className="fs-2" />
                <div className="techno-logo">
                  <img src={Logo} alt="Loading" />
                </div>
              </div>
              <div className="header-bottom-line background-color-brown"></div>
              <div className="spacing-title text-color-light px-4">
                <h1>{selectedCourse.title}</h1>
                <p className="py-2 text-justify">{typedText}</p>{" "}
                {/* Show typed text here */}
                <div className="background-color-cream position-absolute bottom-0 end-0 text-color-dark d-flex flex-column justify-content-around align-items-center text-center">
                  <p className="spacing-title fs-4 mx-3 pt-1">
                    Search : ~ ${" "}
                    <Dropdown as={ButtonGroup}>
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
                          <Dropdown.Item
                            key={course.id}
                            eventKey={index}
                            onClick={() => handleSelect(course)} // Call handleSelect on click
                          >
                            {course.title}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </p>
                  <div className="header-bottom-line background-color-brown"></div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            {/* <div className="dropdown-bg background-color-cream text-color-dark d-flex align-items-center text-center justify-content-around mt-5">
              <p className="spacing-title fs-3 me-3">
                search : ~ $
                <Dropdown as={ButtonGroup}>
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
                      <Dropdown.Item
                        key={course.id}
                        eventKey={index}
                        onClick={() => handleSelect(course)}
                      >
                        {course.title}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </p>
            </div>
            // <div className="header-bottom-line background-color-brown"></div> */}
            <div className="video">
              <div className={`course-video ${selectedCourse.video}`}></div>
            </div>
            <div className="d-flex justify-content-center pt-2 gap-3">
              <button className="techno-btn position-relative d-flex align-items-center fw-bold py-2 px-3 rounded-pill text-color-dark">
                <FaUserEdit /> Details
              </button>
              <button className="techno-btn position-relative d-flex align-items-center fw-bold py-2 px-3 rounded-pill text-color-dark">
                <FaBookOpen /> Enroll
              </button>
              <button className="techno-btn position-relative d-flex align-items-center fw-bold py-2 px-3 rounded-pill text-color-darks">
                {" "}
                <FaCalendarAlt />
                Batches
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
