import React from "react";

const Automation = () => {
  const AutomationData = [
    {
      question: "Who this course is for?",
      list1:
        " This course is ideal for software testers, developers looking to enhance their testing skills.",
      list2:
        "  Anyone interested in pursuing a career in software quality assurance.",
      list3: "Freshers/Graduates/ Software Testers",
    },
    {
      question: "Why take this course?",
      list1:
        "   You'll learn how to create automated tests that speed up the testing process, allowing teams to deliver software faster and with fewer bugs",
      list2:
        "  With automation testing skills, you can position yourself for higher-level roles, such as QA lead or test architect.",
      list3:
        " Courses often cover various testing frameworks and tools (like Selenium, JUnit, or TestNG), equipping you with a diverse skill set.",
    },
  ];
  return (
    <>
      <div className="detail-page py-5" id="Automation">
        <div className="container">
          <h1 className="text-center">Automation Testing</h1>
          <div className="row py-5 g-3">
            {AutomationData.map((items, index) => (
              <div className="col-lg-6">
                <div className="shadow border border-0 background-color-cream rounded-3 p-3">
                  <h2>{items.question}</h2>
                  <ul>
                    <li> {items.list1}</li>
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
    </>
  );
};
export default Automation;
