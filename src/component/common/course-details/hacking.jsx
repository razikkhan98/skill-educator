import React from "react";

const Hacking = () => {
  const HackingData = [
    {
      question: "Who this course is for?",
      list1:
        "This course is suitable for IT professionals, security enthusiasts.",
      list2: "Anyone interested in pursuing a career in cybersecurity.",
      list3: "Freshers/Graduates/ Software Testers",
    },
    {
      question: "Why take this course?",
      list1:
        "You’ll learn the legal and ethical aspects of hacking, ensuring you understand the importance of responsible behavior in cybersecurity.",
      list2:
        "Skills in ethical hacking can lead to various roles, such as penetration tester, security analyst, or cybersecurity consultant.",
      list3:
        "Ethical hacking involves critical thinking and creativity to find solutions to complex security challenges.",
    },
  ];
  return (
    <>
      <div className="detail-page py-5" id="Hacking">
        <div className="container">
          <h1 className="text-center">Ethical Hacking</h1>
          <div className="row py-5 g-3">
            {HackingData.map((items, index) => (
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
export default Hacking;
