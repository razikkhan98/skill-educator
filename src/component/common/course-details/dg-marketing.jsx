import React from "react";

const DigitalMarketing = () => {
  const DigitalMarketingData = [
    {
      question: "Who this course is for?",
      list1:
        " This course is targeted towards marketing professionals,entrepreneurs.",
      list2:
        " Anyone interested in enhancing their digital marketing knowledge and skills.",
      list3: "Freshers/Graduates/ Software Testers",
    },
    {
      question: "Why take this course?",
      list1:
        "You’ll learn about various aspects of digital marketing, including SEO, social media marketing, email marketing, content marketing, and analytics.",
      list2:
        " The digital marketing landscape evolves rapidly. A course can help you stay updated on the latest trends, tools, and best practices.",
      list3:
        "Courses often provide opportunities to connect with industry professionals and fellow learners, expanding your professional network.",
    },
  ];
  return (
    <>
      <div className="detail-page py-5" id="Marketing">
        <div className="container">
          <h1 className="text-center">Digital Marketing</h1>
          <div className="row py-5 g-3">
            {DigitalMarketingData.map((items, index) => (
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
export default DigitalMarketing;
