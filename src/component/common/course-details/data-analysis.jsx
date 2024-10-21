import React from "react";

const DataAnalysis = () => {
  const DataAnalysisData = [
    {
      question: "Who this course is for?",
      list1:
        " This course is suitable for beginners looking to start a career in data analysis, as well as professionals.",
      list2: "Anyone interested in seeking to enhance their data skills.",
      list3: "Freshers/Graduates/ Software Testers",
    },
    {
      question: "Why take this course?",
      list1:
        "  You’ll learn how to interpret and analyze data, enabling you to make informed decisions based on evidence rather than intuition.",
      list2:
        "Data analysis opens doors to various roles, such as datas analyst, business analyst, or data scientist.",
      list3:
        "Courses often cover essential tools and languages like Excel, SQL, Python, and data visualization software, equipping you with practical skills",
    },
  ];
  return (
    <>
      <div className="detail-page py-5" id="DataAnalysis">
        <div className="container">
          <h1 className="text-center">Data Analysis</h1>
          <div className="row py-5 g-3">
            {DataAnalysisData.map((items, index) => (
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
export default DataAnalysis;
