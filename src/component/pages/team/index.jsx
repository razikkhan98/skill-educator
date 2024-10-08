import React, { useState } from "react";
import image1 from "../../assets/img/team/avatar1.jpg";
import image2 from "../../assets/img/team/avatar10.jpeg";
import image3 from "../../assets/img/team/avatar13.jpg";
import image4 from "../../assets/img/team/avatar12.jpg";
import image5 from "../../assets/img/team/avatar16.jpg";

const items = [
  {
    header: "SAYYED FAIZAN ALI",
    image: image1,
    text: `Specialization :- Automation, Python, Cloud, Machine Learning, Data Science, Cryptocurrencies, Financial Assistant & Business Analyst.`,
  },

  {
    header: "SHOEB KHAN",
    image: image2,
    text: `Specialization :- Human Resource Development, Training & Placement, Marketing Accounting.`,
  },

  {
    header: "SHUMAIYLA KHAN",
    image: image3,
    text: `Image description`,
  },
  {
    header: "ADIBA KHAN",
    image: image4,
    text: "Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
  },
  {
    header: "RAZIK KHAN",
    image: image5,
    text: `Specialization :- React js, tailwind Css, Css, Html, Js, Node js, React Native`,
  },
];

const Team = () => {
  const [activeIndex, setActiveId] = useState(null);

  const toggleActive = (index) => {
    setActiveId(activeIndex === index ? null : index);
  };

  return (
    <>
      <div
        className="node-bg-img py-5 d-flex flex-column justify-content-center"
        id="Team"
      >
        <div className="tagline fs-1 text-color-dark text-center">
          IF , AT FIRST YOU DO NOT SUCCEED , CALL IT VERSION 1.0
        </div>
        <div className="container mt-5 pt-2 z-1">
          <div className="row image-accordion gap-3 d-flex justify-content-around">
            {items.map((item, index) => {
              const isActive = activeIndex === index ? "active" : "";

              return (
                <div
                  key={item.id}
                  className={`image-accordion-item ${isActive}`}
                  onClick={() => toggleActive(index)}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <img src={item.image} alt={item.header} />
                  <div className="content">
                    <h2>{item.header}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
