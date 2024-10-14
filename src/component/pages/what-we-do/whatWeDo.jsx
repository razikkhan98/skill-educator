import React,{useEffect} from "react";

// Bootstrap
import { Container } from "react-bootstrap";

// Components
// import Header from "../../common/header/index";


const WhatWeDo = () => {
  const CardsData = [
    {
      heading: "Skilled Instructors –",
      text: "Intelligence educators have best skilled and professional instructors or educators that help students in their learning in an easy and effective way. we create and administer assessments to measure learning progress. By this, the educators will be able to know about the weaknesses of each student so that they will focus on those things individually for each student.",
    },
    {
      heading: "Modes Of Classes –",
      text: "Classes are conducted in various modes including offline, online over the internet and a combination of online and offline allowing for flexibility and diverse learning experiences. Each mode has its own strengths and can be chosen based on the learning objectives, the subject matter, and the needs of the students.",
    },
    {
      heading: "Personalized Support & Guidance –",
      text: "Your success is our priority. We offer personalized support through dedicated advisors, career counselors, and tutors to help you stay on track, overcome challenges, and achieve your goals.",
    },
    {
      heading: "Career Service –",
      text: "Helping students with career planning, resume building, and interview preparation. Also, Connecting students with internship or job opportunities. Additional help for students struggling with course content.",
    },
    {
      heading: "Lifelong Learning Commitment –",
      text: "Education doesn’t stop at graduation. We offer lifelong learning opportunities, including advanced courses, professional development, and alumni resources, to help you stay ahead in your career and continue your personal growth. Choose Intelligence Educators for a learning experience that is not only educational but also empowering, engaging, and transformative. Your future starts here, and we’re excited to be a part of your journey!",
    },

  ];

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll(".timeline li");
      items.forEach((item) => {
        if (isElementInViewport(item)) {
          item.classList.add("in-view");
        }
      });
    };
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 20 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline node-bg-img" id="WhatWeDo">
      <div className="">
        <Container fluid className="py-5 px-1">
          <ul className="list-unstyled pt-5">
            {CardsData.map((item, index) => (
              <li
                key={index}
                className="position-relative text-color-light pt-4"
              >
                <div className="position-relative bottom-0 background-color-brown p-3">
                  <p className="fw-bold fs-5">{item.heading}</p>
                  <p> {item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </div>
  );
};
export default WhatWeDo;
