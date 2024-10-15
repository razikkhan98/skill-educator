import React from "react";
import { Container } from "react-bootstrap";
// import features from "../../assets/img/technodetails/JSfeatures.png";
import Logo from "../../assets/img/logo/1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../../assets/img/technodetails/2.png";
// import Image2 from "../../assets/img/technodetails/uses.png";

const PYdetails = () => {
  return (
    <>
      <div className="detail-page" id="python">
        <Container>
          {/* heading */}
          <Row>
            <div className="heading-text">PYTHON</div>
            <div className="header-bottom-line background-color-brown"></div>
          </Row>
          <div className="mt-5 pb-5">
            {/* history */}
            <Row>
              <div className="background-color-cream py-1 px-2 d-flex align-items-center justify-content-between">
                <div className="techno-logo">
                  <img src={Logo} alt="Loading" />
                </div>
              </div>
              <div className="header-bottom-line background-color-brown"></div>
              <div className="background-color-dark d-flex justify-content-center align-items-center">
                <Col>
                  <div>
                    <img src={Image1} alt="" className="w-100" />
                  </div>
                </Col>
                <Col>
                  <div className="describe d-flex p-3">
                    <div className="p-3">
                      <div className="mb-3">
                        <strong>HISTORY AND EVOLUTION:</strong>
                      </div>
                      Python was created by Guido van Rossum in the late 1980s
                      as a successor to the ABC language. It was first released
                      in 1991 as Python 0.9.0, featuring functions, exception
                      handling, and object-oriented capabilities. Python 1.0
                      came out in 1994, adding features like lambda, map, and
                      filter. The major milestone was Python 2.0 in 2000, which
                      introduced list comprehensions and garbage collection.
                      However, Python 3.0, released in 2008, was a major
                      redesign to fix inconsistencies, which is now the dominant
                      version. Python’s popularity has since soared due to its
                      simplicity, readability, and versatility.
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
            {/* about */}
            <Row>
              <div className="background-color-dark d-flex justify-content-center align-items-center">
                <Col>
                  <div className="describe d-flex p-3">
                    <div className="p-3">
                      <div className="mb-3">
                        <strong>ABOUT:</strong>
                      </div>
                      Python supports multiple programming paradigms, including
                      procedural, object-oriented, and functional programming.
                      It has a clean and easy-to-learn syntax, making it ideal
                      for beginners and experienced developers alike. Python is
                      widely used in web development, data science, machine
                      learning, automation, and more. With an extensive standard
                      library and active community, Python is one of the most
                      versatile and popular programming languages today.
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <img src={Image1} alt="" className="w-100" />
                  </div>
                </Col>
              </div>
            </Row>
            {/* features */}
            <Row>
              <div className="background-color-dark d-flex justify-content-center align-items-center">
                <Col>
                  <div>
                    <img src={Image1} alt="" className="w-100" />
                  </div>
                </Col>
                <Col>
                  <div className="describe d-flex p-3">
                    <div className="p-3">
                      <div className="mb-3">
                        <strong>FEATURES:</strong>
                      </div>
                      <ul>
                        <li>
                          <strong>Simple and Readable Syntax: </strong>Python's
                          syntax is designed to be intuitive and mirrors human
                          language, making it easier for beginners to learn. For
                          example, it uses indentation instead of braces to
                          define blocks of code.
                        </li>
                        <li>
                          <strong>Object-Oriented: </strong>Python supports
                          object-oriented programming (OOP) principles such as
                          encapsulation, inheritance, and polymorphism, making
                          it suitable for large-scale software projects.
                        </li>
                        <li>
                          <strong>Dynamically Typed: </strong>Variables in
                          Python do not need explicit declaration; they are
                          assigned a type automatically at runtime based on the
                          value assigned to them.
                        </li>
                        <li>
                          <strong>Interpreted Language: </strong>Python code is
                          executed line-by-line by the Python interpreter,
                          making it easier to debug and test. This feature also
                          allows for dynamic typing, where variable types are
                          checked during runtime.
                        </li>
                        <li>
                          <strong>High-Level Language: </strong>Python abstracts
                          many complex details of the computer, allowing
                          developers to focus on programming logic without
                          worrying too much about memory management or low-level
                          operations.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
            {/* uses */}
            <Row>
              <div className="background-color-dark d-flex justify-content-center align-items-center">
                <Col>
                  <div className="describe d-flex p-3">
                    <div className="p-3">
                      <div className="mb-3">
                        <strong>USES:</strong>
                      </div>
                      <ul>
                        <li>
                          <strong>Web Development:</strong> Frameworks like
                          Django and Flask are used to build web applications
                          quickly and efficiently.
                        </li>
                        <li>
                          <strong>Data Science and Machine Learning:</strong>
                          Libraries like NumPy, pandas, Matplotlib, TensorFlow,
                          and Scikit-learn make Python a popular choice for data
                          analysis, visualization, machine learning, and deep
                          learning.
                        </li>
                        <li>
                          <strong>Automation/Scripting:</strong> Python is
                          widely used for automating repetitive tasks, from
                          simple file management to automating entire workflows.
                        </li>
                        <li>
                          <strong>Software Development:</strong>
                          Python is used for building desktop applications,
                          command-line utilities, and even games using
                          frameworks like Tkinter or PyGame.
                        </li>
                        <li>
                          <strong>Cybersecurity:</strong>
                          Python’s versatility makes it useful in network
                          programming, penetration testing, and cybersecurity
                          analysis tools.
                        </li>
                        <li>
                          <strong>Embedded Systems:</strong> Python can be used
                          in hardware programming and embedded systems
                          development with frameworks like MicroPython or
                          CircuitPython.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <img src={Image1} alt="" className="w-100" />
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PYdetails;
