import React from "react";

const FullStack = () => {
  const FullStackData = [
    {
      question: "Who this course is for?",
      list1:
        "This course is suitable for beginners looking to enter the tech industry, as well as professionals.",
      list2:
        "Anyone interested in seeking to expand their skill set in web development.",
      list3: "Freshers/Graduates/ Software Testers",
    },
    {
      question: "Why take this course?",
      list1:
        " You'll learn both front-end and back-end technologies, giving you a well-rounded understanding of the entire development process.",
      list2:
        "There's a high demand for full-stack developers, as many organizations prefer hiring individuals who can handle multiple roles.",
      list3: "Full-stack courses often cover a wide range of technologies, keeping you up-to-date with the latest trends in web development.",
    },
  ];
  return (
    <React.Fragment>
      <div className="detail-page py-5" id="FullStack">
        <div className="container">
          <h1 className="text-center">Full-Stack Development</h1>
          <div className="row py-5 g-3">
            {FullStackData.map((items, index) => (
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
