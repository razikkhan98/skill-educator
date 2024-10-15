import React from "react";
import { Container } from "react-bootstrap";
// import features from "../../assets/img/technodetails/JSfeatures.png";
import Logo from "../../assets/img/logo/1.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image1 from "../../assets/img/technodetails/2.png";
// import Image2 from "../../assets/img/technodetails/uses.png";

const ReactJSdetails = () => {
  return (
    <>
      <div className="detail-page" id="reactjs">
        <Container>
          {/* heading */}
          <Row>
            <div className="heading-text">REACT JS</div>
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
                      ReactJS was developed by Jordan Walke, a software engineer
                      at Facebook (now Meta), and was first released in 2013. It
                      originated as an internal tool at Facebook to manage the
                      growing complexity of their web applications, particularly
                      for improving the performance of their newsfeed. Facebook
                      needed a solution that would make UI updates more
                      efficient, and React's key innovation—the Virtual
                      DOM—allowed for faster updates by minimizing direct
                      interactions with the real DOM. React quickly gained
                      popularity due to its simplicity, component-based
                      architecture, and flexibility. In 2015, Facebook released
                      React Native, extending React’s capabilities to mobile app
                      development for iOS and Android, further expanding its
                      adoption. Since then, React has become one of the most
                      widely used libraries for building user interfaces in both
                      web and mobile development.
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
                      ReactJS is a popular JavaScript library for building user
                      interfaces, particularly single-page applications where a
                      dynamic and responsive user experience is essential.
                      Developed and maintained by Facebook (now Meta) along with
                      a community of individual developers and companies, React
                      has become a cornerstone in modern web development. Below
                      is an in-depth overview of ReactJS, covering its key
                      aspects, features, ecosystem, and more. ReactJS, commonly
                      referred to as React, is an open-source JavaScript library
                      designed for building user interfaces, especially for
                      single-page applications (SPAs). It enables developers to
                      create large web applications that can update and render
                      efficiently in response to data changes. React's main goal
                      is to be fast, scalable, and simple, making it an
                      excellent choice for both small and large-scale projects.
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
                          <strong>Declarative UI: </strong>React makes it easy
                          to create interactive UIs by designing simple views
                          for each state in your application.
                        </li>
                        <li>
                          <strong>Component-Based Architecture: </strong>Build
                          encapsulated components that manage their own state,
                          then compose them to make complex UIs.
                        </li>
                        <li>
                          <strong>Learn Once, Write Anywhere: </strong>You can
                          develop new features in React without rewriting
                          existing code, and React can also render on the server
                          using Node and power mobile apps using React Native.
                        </li>
                        <li>
                          <strong>Virtual DOM: </strong>Efficiently updates and
                          renders components by using a virtual representation
                          of the DOM.
                        </li>
                        <li>
                          <strong>JSX: </strong>A syntax extension that allows
                          mixing HTML with JavaScript, making the code more
                          readable and easier to write.
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
                          <strong>Single-Page Applications (SPAs): </strong>
                          React is ideal for building SPAs where content
                          dynamically updates without full page reloads.
                        </li>
                        <li>
                          <strong>Dynamic Web Applications: </strong>
                          Applications that require real-time updates, such as
                          social media platforms or dashboards.
                        </li>
                        <li>
                          <strong>Mobile Applications: </strong>
                          Using React Native, developers can build mobile apps
                          for iOS and Android with a shared codebase.
                        </li>
                        <li>
                          <strong>E-commerce Platforms: </strong>
                          Highly interactive and dynamic product listings,
                          shopping carts, and user profiles.
                        </li>
                        <li>
                          <strong>Content Management Systems (CMS): </strong>
                          Interactive interfaces for managing content with
                          real-time previews.
                        </li>
                        <li>
                          <strong>Dashboards and Analytics Tools: </strong>
                          Real-time data visualization and interactive controls.
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

export default ReactJSdetails;
