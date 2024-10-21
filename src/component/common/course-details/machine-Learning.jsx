import React from "react";

const MachineLearning = () => {
  const MachineData = [
    {
      question: "Who this course is for?",
      list1: "This course is ideal for students, professionals",
      list2:
        "Anyone interested in gaining a foundational understanding of AI and machine learning.",
      list3: "Freshers/Graduates/ Software Testers",
    },
    {
      question: "Why take this course?",
      list1:
        "You’ll learn about various algorithms and techniques used in machine learning, equipping you to solve complex problems",
      list2:
        " The field is rapidly evolving; a course can help you stay updated on the latest trends, tools, and technologies.",
      list3:
        "Knowledge of machine learning can open doors to roles like data scientist, machine learning engineer, or AI researcher.",
    },
  ];
  return (
    <>
      <div className="detail-page py-5" id="MachineLearning">
        <div className="container">
          <h1 className="text-center">Machine Learning</h1>
          <div className="row py-5 g-3">
            {MachineData.map((items, index) => (
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
    </>
  );
};
export default MachineLearning;
