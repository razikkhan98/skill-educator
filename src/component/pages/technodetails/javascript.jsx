import React from "react";
import { Container } from "react-bootstrap";
import features from "../../assets/img/technodetails/JSfeatures.png";
import Logo from "../../assets/img/logo/1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../../assets/img/technodetails/2.png";
import Image2 from "../../assets/img/technodetails/3.png";
import uses from "../../assets/img/technodetails/uses.png";

const JSdetails = () => {
  return (
    <>
      <div className="detail-page pb-5" id="javascript">
        <Container>
          {/* heading */}
          <Row>
            <div className="heading-text mt-5">JAVASCRIPT</div>
            <div className="header-bottom-line background-color-brown"></div>
          </Row>
          <div className="mt-5">
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
                  <div className="describe d-flex p-3">
                    <div className="p-3">
                      <div className="mb-3">
                        <strong>ABOUT:</strong>
                      </div>
                      JavaScript (JS) is a versatile, high-level programming
                      language that is primarily used to create interactive and
                      dynamic content on websites. It was initially developed in
                      1995 by Brendan Eich for Netscape Navigator and has since
                      become a cornerstone of modern web development, working
                      alongside HTML and CSS. JS is a client-side scripting
                      language, meaning it runs directly in the web browser
                      without needing to communicate with a server. However,
                      with the advent of environments like Node.js, JavaScript
                      is now used for server-side development as well. Its
                      non-blocking, event-driven architecture makes it
                      well-suited for handling asynchronous tasks, such as
                      fetching data from an API without reloading the webpage.
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <img src={Image2} alt="" className="w-100" />
                  </div>
                </Col>
              </div>
            </Row>
            {/* features */}
            <Row>
              <div className="background-color-dark d-flex justify-content-center align-items-center">
                <Col>
                  <div>
                    <img src={features} alt="" className="w-100" />
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
                          <strong>Client-Side Scripting:</strong> JavaScript
                          runs directly in the user's browser, enabling dynamic
                          updates of web content without interacting with the
                          server.
                        </li>
                        <li>
                          <strong>Interactivity:</strong> It allows for
                          interactive elements like form validation, animations,
                          sliders, and more.
                        </li>
                        <li>
                          <strong>Event-Driven: </strong>JavaScript responds to
                          user actions, such as clicks, keyboard input, or mouse
                          movements.
                        </li>
                        <li>
                          <strong>Versatility:</strong> Initially a front-end
                          language, JavaScript now extends to server-side
                          programming through Node.js, allowing developers to
                          write both front-end and back-end code in the same
                          language.
                        </li>
                        <li>
                          <strong>Asynchronous Programming:</strong> JavaScript
                          uses event loops and promises to handle tasks
                          asynchronously, which is crucial for tasks like
                          fetching data from a server without freezing the user
                          interface.
                        </li>
                        <li>
                          <strong>Cross-Browser Compatibility:</strong>{" "}
                          JavaScript is supported by all modern web browsers,
                          making it accessible across different platforms and
                          devices.
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
                          <li>
                            <strong>Client-Side Web Development:</strong>
                          </li>
                          <strong>Interactive Websites:</strong> JavaScript
                          enables web pages to be interactive. It is responsible
                          for animations, form validation, dynamic content
                          updates, and more.
                        </li>
                        <li>
                          <li>
                            <strong>Server-Side Development (Node.js):</strong>
                          </li>
                          <strong>Back-End Web Development:</strong> Using
                          Node.js, JavaScript can be used to create server-side
                          applications. It handles HTTP requests, performs
                          database operations, and controls server logic.
                          <br />
                          <strong>API Development:</strong> JavaScript is often
                          used to develop RESTful APIs and handle communication
                          between client and server.
                        </li>
                        <li>
                          <li>
                            <strong>Automation and Scripting:</strong>
                          </li>
                          <strong>Browser Automation:</strong> Tools like
                          Puppeteer allow JavaScript to automate tasks within
                          the browser, such as web scraping or testing.
                          <br />
                          <strong>Task Automation:</strong> JavaScript can be
                          used with task runners like Gulp or Grunt to automate
                          repetitive tasks in development (e.g., minifying
                          files, compiling stylesheets).
                        </li>
                        <li>
                          <li>
                            <strong>Machine Learning and AI :</strong>
                          </li>
                          <strong>Machine Learning in Browser:</strong>
                          Libraries like TensorFlow.js allow for running machine
                          learning models directly in the browser.
                          <br />
                          <strong>AI Applications:</strong> JavaScript can be
                          used for simple AI applications like recommendation
                          engines, chatbots, or pattern recognition in web apps.
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <img src={uses} alt="" className="w-100" />
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

export default JSdetails;
