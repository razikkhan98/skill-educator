import React from "react";

const BackEnd = () => {
  return (
    <React.Fragment>
      <div className="detail-page py-5" id="BackEnd">
        <div className="container">
          <h1 className="text-center">Back-End Development</h1>
          <div className="row py-5 g-3">
            <div className="col-lg-6">
              <div className="shadow border border-0 background-color-cream rounded-3 p-3">
                <h2>Who this course is for?</h2>
                <ul>
                  <li>
                    This course is ideal for aspiring web developers, computer
                    science students, and professionals.
                  </li>
                  <li>
                    Anyone interested in looking to enhance their backend
                    development skills.
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
                    You’ll learn essential programming languages and
                    technologies like Node.js, Python, or Java, which are
                    crucial for server-side development.
                  </li>
                  <li>
                    Back-end courses often cover databases (like SQL, MongoDB)
                    and how to manage data effectively
                  </li>
                  <li>
                    There’s strong demand for back-end developers. Learning
                    these skills can enhance your job prospects and lead to
                    higher-paying positions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="shadow border border-0 background-color-cream rounded-3 p-3">
                <h2>What you will learn?</h2>
                <p>Introduction to Backend Development</p>
                <ul>
                  <li>Overview of web architecture (client-server model)</li>
                  <li>Understanding the role of backend development</li>
                  <li>Differences between frontend and backend development</li>
                </ul>
                <p>Programming Languages</p>
                <ul>
                  <li>Popular Backend Languages:</li>
                  <li>
                    <ul>
                      <li>JavaScript (Node.js)</li>
                      <li>Python (Django, Flask)</li>
                      <li>Ruby (Ruby on Rails)</li>
                      <li>Java (Spring)</li>
                      <li>PHP (Laravel)</li>
                      <li>C# (.NET)</li>
                    </ul>
                  </li>
                </ul>
                <p>
                Web Frameworks
                </p>
                <ul>
                  <li className="fw-bold">Understanding Frameworks:</li>
                 <ul>
                 <li>Purpose of web frameworks in backend development</li>
                 </ul>
                 
                </ul>
                <ul>
                  <li>Specific Frameworks:</li>
              <li>
                <ul>
                  <li>Express.js (Node.js)</li>
                  <li>Django and Flask (Python)</li>
                  <li>Ruby on Rails (Ruby)</li>
                  <li>
                  Spring Boot (Java)
                  </li>
                  <li>Laravel (PHP)</li>
                </ul>
              </li>
                </ul>
                <p className="fw-bold">APIs (Application Programming Interfaces)</p>
                <ul className="list-unstyled">
                  <li className="fw-bold">API introduction</li>
                  <li>
                    <ul>
                      <li>API types</li>
                      <li>
                      API methods
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="fw-bold">RESTful APIs:</li>
                  <li>
                    <ul>
                      <li>Principles of REST</li>
                      <li>Understanding HTTP methods (GET, POST, PUT, DELETE)</li>
                    
                    </ul>
                  </li>
                </ul>
                <p>Databases</p>
                <ul className="list-unstyled">
                  <li className="fw-bold">Database Fundamentals:</li>
                  <li>
                    <ul>
                      <li>
                      Understanding databases vs. file storage
                      </li>
                      
                    </ul>
                  </li>
                </ul>
                {/* <p className="fw-bold">Beyond the Basics:</p> */}
                <ul>
                  <li>
                  SQL Databases:
                  </li>
                  <li>
                    <ul>
                      <li>Introduction to relational databases (MySQL, PostgreSQL)</li>
                      <li>Database design and normalization</li>
                      <li>Writing SQL queries (SELECT, INSERT, UPDATE, DELETE)</li>
                    </ul>
                  </li>
                 
                </ul>
               
                <ul className="list-unstyled">
                  <li className="fw-bold">NoSQL Databases:</li>
                  <li>
                    <ul>
                      <li>Overview of NoSQL databases (MongoDB, Cassandra)</li>
                      <li>Understanding document, key-value, and graph databases</li>
                    </ul>
                  </li>
                </ul>
                <p className="fw-bold">Final Project</p>
                <ul className="list-unstyled">
                  <li className="fw-bold">Project Planning:</li>
                  <li>
                    <ul>
                      <li>Defining requirements and scope</li>
                      <li>Designing architecture (API, database, etc.)</li>
                    </ul>
                  </li>
                </ul>
                <ul className="list-unstyled">
                  <li className="fw-bold">Development:</li>
                  <ul>
                    <li>Building a complete backend application</li>
                    <li>Implementing features and testing</li>
                  </ul>
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

export default BackEnd;
