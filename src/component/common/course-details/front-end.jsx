import React from "react";
const FrontEnd = () => {
  return (
    <React.Fragment>
      <div className="detail-page py-5" id="FrontEnd">
        <div className="container">
          <h1 className="text-center">Front-End Development</h1>
          <div className="row py-5 g-3">
            <div className="col-lg-6">
              <div className="shadow border border-0 background-color-brown text-white rounded-3 p-3">
                <h2>Who this course is for?</h2>
                <ul>
                  <li>
                    Manual testers, non-programming aware testers interested in
                    learning Automation.
                  </li>
                  <li>
                    Any Software engineer who are interested in Mobile
                    Technologies
                  </li>
                  <li>Freshers/Graduates/ Software Testers</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shadow border border-0 background-color-cream rounded-3 p-3">
                <h2>Why take this course?</h2>
                <ul>
                  <li>
                    You'll learn essential skills like HTML, CSS, and
                    JavaScript, which are fundamental for building user
                    interfaces
                  </li>
                  <li>
                    It allows you to express your creativity by designing
                    visually appealing and interactive websites.
                  </li>
                  <li>
                    This course offer practical projects that can build your
                    portfolio, showcasing your skills to potential employers.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="shadow border border-0 background-color-cream rounded-3 p-3">
                <h2>What you will learn?</h2>
                <p>Introduction to Web Development </p>
                <ul>
                  <li>Overview of web technologies</li>
                  <li>Client-server architecture</li>
                  <li>How the web works (HTTP/HTTPS)</li>
                </ul>

                <p className="fw-semibold">HTML Basic</p>
                <ul>
                  {/* <li>Building Blocks: Think of HTML as the skeleton of your webpage. It defines the structure using elements like <div>, <p>, and <a>.</li> */}
                  <li>
                    Meaningful Markup: Use the right HTML elements for the job
                    to make your website easier to understand for both humans
                    and machines.
                  </li>
                  <li>
                    Forms and Data: Create forms for users to enter information
                    and tables to organize data neatly.
                  </li>
                </ul>
                <p>
                  After learning the basics you will be able to create a webpage
                  using HTML.
                </p>
                <p>CSS:</p>
                <ul>
                  <li>CSS basics</li>
                  <li>Styling Text and Layout</li>
                  <li>Positioning and Layout</li>
                  <li>Responsive Design</li>
                  <li>Advanced CSS</li>
                </ul>
                <p>Javascript:</p>
                <ul>
                  <li>JavaScript Basics</li>
                  <li>DOM Manipulation</li>
                  <li>Event Handling</li>
                  <li>Asynchronous JavaScript</li>
                </ul>
                <p>Frontend Frameworks:</p>
                <ul>
                  <li>Introduction to Frameworks:</li>
                  <li>Benefits of using frameworks</li>
                  <li>Overview of popular frameworks (React, Vue, Angular)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FrontEnd;
