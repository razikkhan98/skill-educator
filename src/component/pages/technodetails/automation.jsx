import React from "react";
import { Container } from "react-bootstrap";
// import features from "../../assets/img/technodetails/JSfeatures.png";
import Logo from "../../assets/img/logo/Intelligence Educator1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../../assets/img/technodetails/2.png";
// import Image2 from "../../assets/img/technodetails/uses.png";

const Automationdetails = () => {
  return (
    <>
      <div className="detail-page" id="automation">
        <Container>
          {/* ḥeading */}
          <Row>
            <div className="heading-text mt-5 text-color-light fs-2 background-color-dark">
              AUTOMATION TESTING
            </div>
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
                    <img src={Image1} alt="Loading" className="w-100" />
                  </div>
                </Col>
                <Col>
                  <div className="describe text-justify text-color-light d-flex p-3">
                    <div className="p-3">
                      <div className="mb-3">
                        <strong>HISTORY AND EVOLUTION:</strong>
                      </div>
                      History and Evolution JavaScript was created by Brendan
                      Eich in 1995 while working at Netscape Communications.
                      Initially, it was intended to enhance the browser's
                      interaction capabilities by allowing client-side
                      manipulation of web pages. Early on, it was known as
                      "LiveScript" but was renamed to JavaScript to capitalize
                      on the growing popularity of Java at the time, although
                      the two languages are not related. Over time, JavaScript
                      became the de facto language of the web, standardized
                      under the ECMAScript (ES) specification. Each version of
                      ECMAScript introduced improvements: ES5 (2009): Added
                      features like strict mode, JSON support, array methods
                      (e.g., forEach, map), and more. ES6/ES2015 (2015):
                      Introduced major changes such as let and const for
                      block-scoped variables, arrow functions, template
                      literals, classes, promises, and modules. ES7-ES13
                      (2016-2022): Continued to add async functions, optional
                      chaining, nullish coalescing, and many other powerful
                      language features.
                    </div>
                  </div>
                </Col>
              </div>
            </Row>
            {/* about */}
            <Row>
              <div className="background-color-dark d-flex justify-content-center align-items-center">
                <Col>
                  <div className="describe text-justify text-color-light d-flex p-3">
                    <div className="p-3">
                      <div className="mb-3">
                        <strong>ABOUT:</strong>
                      </div>
                      Automation Testing is a software testing technique that
                      uses automated tools and scripts to execute test cases,
                      replacing manual human efforts. It is employed to validate
                      the functionality, performance, and reliability of
                      software applications across different scenarios without
                      manual intervention. This approach is particularly useful
                      for repetitive, large-scale, and time-consuming tasks,
                      ensuring that software behaves as expected while saving
                      time and resources. Automation testing is a software
                      testing technique where test cases are executed with the
                      help of automation tools, rather than being manually run
                      by a human tester. It involves writing scripts to automate
                      the testing process, helping to ensure that applications
                      perform as expected without requiring constant manual
                      effort.
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <img src={Image1} alt="Loading" className="w-100" />
                  </div>
                </Col>
              </div>
            </Row>
            {/* features */}
            <Row>
              <div className="background-color-dark d-flex justify-content-center align-items-center">
                <Col>
                  <div>
                    <img src={Image1} alt="Loading" className="w-100" />
                  </div>
                </Col>
                <Col>
                  <div className="describe text-justify text-color-light d-flex p-3">
                    <div className="p-3">
                      <div className="mb-3">
                        <strong>FEATURES:</strong>
                      </div>
                      <ul>
                        <li>
                          <strong>Fast Execution: </strong>Automated tests run
                          significantly faster than manual tests, enabling
                          faster feedback and quicker detection of bugs,
                          especially for large-scale or repetitive testing.
                        </li>
                        <li>
                          <strong>Reusability of Test Scripts: </strong>Once
                          written, test scripts can be reused across multiple
                          test scenarios, builds, or even different projects
                          with minimal adjustments, improving efficiency.
                        </li>
                        <li>
                          <strong>
                            Supports Continuous Integration and Delivery:
                          </strong>{" "}
                          Automation testing integrates seamlessly with
                          Continuous Integration (CI) and Continuous Delivery
                          (CD) pipelines. Tools like Jenkins, Travis CI, or
                          CircleCI automatically trigger test execution with
                          every code commit, providing rapid feedback.
                        </li>
                        <li>
                          <strong>
                            Cross-Platform and Cross-Browser Testing:
                          </strong>{" "}
                          Many automation tools (like Selenium or Cypress)
                          support testing across different platforms (Windows,
                          Mac, Linux) and browsers (Chrome, Firefox, Safari),
                          ensuring that applications work uniformly across
                          diverse environments.
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
                  <div className="describe text-justify text-color-light d-flex p-3">
                    <div className="p-3">
                      <div className="mb-3">
                        <strong>USES:</strong>
                      </div>
                      <ul>
                        <li>
                          <strong>Regression Testing:</strong>
                        </li>
                        <strong>Purpose: </strong>To ensure that new code
                        changes or updates do not introduce new bugs or affect
                        the existing functionality.
                        <br />
                        <strong>Use: </strong>Automated regression testing
                        quickly re-runs all or selected test cases after
                        updates, ensuring that the system remains stable with
                        every change.
                        <li>
                          <strong>
                            Continuous Integration and Continuous Delivery
                            (CI/CD):
                          </strong>{" "}
                        </li>
                        <strong>Purpose: </strong>To streamline software
                        delivery and provide fast feedback during the
                        development process.
                        <br />
                        <strong>Use: </strong>Automation testing integrates with
                        CI/CD pipelines, allowing automated tests to be
                        triggered with each new code commit. This ensures early
                        detection of issues and supports rapid, reliable
                        software releases.
                        <li>
                          <strong>
                            Cross-Browser and Cross-Platform Testing:
                          </strong>{" "}
                          <br />
                          <strong>Purpose: </strong> To ensure that the
                          application works correctly across different browsers
                          (Chrome, Firefox, Safari) and operating systems
                          (Windows, macOS, Linux).
                          <br />
                          <strong>Use: </strong>Automated tools can run the same
                          tests across multiple browsers and platforms, ensuring
                          consistent behavior and user experience regardless of
                          the environment.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <img src={Image1} alt="Loading" className="w-100" />
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

export default Automationdetails;
