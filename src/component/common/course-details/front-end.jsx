import React from "react";
const FrontEnd = () => {
  const FrontEndData = [
    {
      question: "Who this course is for?",
      list1:
        "Manual testers, non-programming aware testers interested in learning Automation.",
      list2: "Any Software engineer who are interested in Mobile Technologies",
      list3: "Freshers/Graduates/ Software Testers",
    },
    {
      question: "Why take this course?",
      list1:
        " You'll learn essential skills like HTML, CSS, and JavaScript, which are fundamental for building user interfaces",
      list2:
        "It allows you to express your creativity by designing visually appealing and interactive websites.",
      list3:
        "This course offer practical projects that can build your portfolio, showcasing your skills to potential employers.",
    },
  ];
  return (
    <React.Fragment>
      <div className="detail-page py-5" id="FrontEnd">
        <div className="container">
          <h1 className="text-center">Front-End Development</h1>
          <div className="row py-5 g-3">
            {FrontEndData.map((items, index) => (
              <div className="col-lg-6">
                <div className="shadow border border-0 background-color-cream rounded-3 p-3">
                  <h2>{items.question}</h2>
                  <ul>
                    <li>{items.list1}</li>
                    <li>{items.list2}</li>
                    <li>{items.list3}</li>
                  </ul>
                </div>
              </div>
            ))}

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
                <p className="fw-bold">CSS:</p>
                <ul>
                  <li>CSS basics</li>
                  <li>Styling Text and Layout</li>
                  <li>Positioning and Layout</li>
                  <li>Responsive Design</li>
                  <li>Advanced CSS</li>
                </ul>
                <p className="fw-bold">Javascript:</p>
                <ul>
                  <li>JavaScript Basics</li>
                  <li>DOM Manipulation</li>
                  <li>Event Handling</li>
                  <li>Asynchronous JavaScript</li>
                </ul>
                <p className="fw-bold">Frontend Frameworks:</p>
                <ul className="list-unstyled">
                  <li className="fw-bold">Introduction to Frameworks:</li>
                  <li>
                    <ul>
                      <li>Benefits of using frameworks</li>
                      <li>
                        Overview of popular frameworks (React, Vue, Angular)
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="fw-bold">React</li>
                  <li>
                    <ul>
                      <li>Component-based architecture</li>
                      <li>Props and state management</li>
                      <li>Lifecycle methods and hooks</li>
                      <li>Managing side effects with useEffect</li>
                      <li>Routing (React Router)</li>
                    </ul>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="fw-bold">State Management</li>
                  <li>
                    <ul>
                      <li>
                        Introduction to state management libraries (Redux, Vuex)
                      </li>
                      <li>Context API (for React)</li>
                    </ul>
                  </li>
                </ul>
                <p className="fw-bold">Beyond the Basics:</p>
                <ul>
                  <li>
                    Accessibility: Make your website easy to use for everyone,
                    including people with disabilities.
                  </li>
                  <li>
                    Performance: Make your website load fast and run smoothly.
                  </li>
                  <li>
                    Version Control: Keep track of your code changes using Git.
                  </li>
                  <li>
                    Testing: Make sure your website works as expected by writing
                    tests.
                  </li>
                  <li>
                    Deployment: Put your website online for the world to see.
                  </li>
                </ul>
                <p className="fw-bold">Final Project</p>
                <ul className="list-unstyled">
                  <li className="fw-bold">Project Planning:</li>
                  <li>
                    <ul>
                      <li>Defining project scope and requirements</li>
                      <li>UI design</li>
                    </ul>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="fw-bold">Development:</li>
                  <li>
                    <ul>
                      <li>Building a complete web application or website</li>
                      <li>Testing and debugging</li>
                    </ul>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="fw-bold">Presentation:</li>
                  <ul>
                    <li>Demonstrating the final project</li>
                    <li>Gathering and implementing feedback</li>
                  </ul>
                </ul>
                <p className="fw-bold">
                  Continuous Learning and Best Practices
                </p>
                <p>
                  Practice sets will be given after completion of every topic
                  for stet by step growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FrontEnd;
