import React,{useEffect} from "react";
import { Container } from "react-bootstrap";

import Header from "../../common/header/index";
const WhatWeDo = () => {
  const CardsData = [
    {
      // heading: "Name",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi.",
    },
    {
      // heading: "Name",
      text: "Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi, Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. ",
    },
    {
      // heading: "Name",
      text: "Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor. Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi.",
    },
    {
      // heading: "Name",
      text: "In mattis elit vitae odio posuere, nec maximus massa varius. Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi.",
    },
    {
      // heading: "Name",
      text: "In mattis elit vitae odio posuere, nec maximus massa varius. Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi.",
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
        rect.top >= 0 &&
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
    <div className="timeline gradient-bg">
      <Header title="w e@e d u c a t o r : ~ $ w h a t w e d o" />
      <div className="side-img-bg">
        <Container fluid className="py-5">
          <ul className="list-unstyled">
            {CardsData.map((item, index) => (
              <li
                key={index}
                className="pt-5 position-relative background-color-brown text-color-light"
              >
                <div className="position-relative bottom-0 background-color-brown p-3">
                  {/* <p className="background-color-cream text-color-dark fs-4 fw-bold">{item.heading}</p> */}
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
