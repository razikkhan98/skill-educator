import React from "react";

const FullStack = () => {
  return (
    <React.Fragment>
      <div className="detail-page py-5" id="FullStack">
        <div className="container">
          <h1 className="text-center">Full-Stack Development</h1>
          <div className="row py-5 g-3">
            <div className="col-lg-6">
              <div className="shadow border border-0 background-color-cream rounded-3 p-3">
                <h2>Who this course is for?</h2>
                <ul>
                  <li>
                    This course is suitable for beginners looking to enter the
                    tech industry, as well as professionals.
                  </li>
                  <li>
                    Anyone interested in seeking to expand their skill set in
                    web development.
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
                    You'll learn both front-end and back-end technologies,
                    giving you a well-rounded understanding of the entire
                    development process.
                  </li>
                  <li>
                    There's a high demand for full-stack developers, as many
                    organizations prefer hiring individuals who can handle
                    multiple roles.
                  </li>
                  <li>
                    Full-stack courses often cover a wide range of technologies,
                    keeping you up-to-date with the latest trends in web
                    development.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="shadow border border-0 background-color-cream rounded-3 p-3">
                <h2>What you will learn?</h2>
                <p>
                  {" "}
                  HTML is the standard markup language for creating web pages.
                  It describes the structure of a document, including the text,
                  images, links, and other elements. HTML is the standard markup
                  language for creating web pages. It describes the structure of
                  a document, including the text, images, links, and other
                  elements.
                </p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FullStack;
