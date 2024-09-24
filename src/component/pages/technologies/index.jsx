import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Images
import Logo from "../../assets/img/logo/2-nd-logo.png";
import Html from "../../assets/img/tecnologies/html (1).png";
import Css from "../../assets/img/tecnologies/css-3.png";
import Js from "../../assets/img/tecnologies/developer.png";
import Python from "../../assets/img/tecnologies/python (1).png";

// Icons
import { FaArrowRight } from "react-icons/fa";
const Technologies = () => {
  const TechnologiesData = [
    {
      logo_img: Logo,
      title: "HTML",
      image: Html,
    },
    {
      logo_img: Logo,
      title: "CSS",
      image: Css,
    },
    {
      logo_img: Logo,
      title: "JS",
      image: Js,
    },
    {
      logo_img: Logo,
      title: "PYTHON",
      image: Python,
    },
  ];

  return (
    <>
      <div className="gradient-bg py-5 d-flex align-items-center justify-content-center" id="Technologies">
        <Container>
          <Row className="g-4">
            {TechnologiesData.map((items, index) => (
              <Col lg={3} md={6} sm={12}>
                <div class="tecnology-card flexcardGreen py-4 d-flex flex-column align-items-baseline justify-content-start">
                  <div class="flexcardNumber flexcardNumberGreen d-flex align-items-center justify-content-end position-relative techno-logo">
                    <img src={items.logo_img} alt="Loading" />
                  </div>
                  <div class="d-flex align-items-center w-100 justify-content-center flexcardTitle text-uppercase fw-bold fs-4">
                    {items.title}
                  </div>
                  <div class="d-flex align-items-center w-100 justify-content-center flexcardImg py-3">
                    <img
                      class="flexcardimgItem"
                      src={items.image}
                      alt="Loading"
                    />
                  </div>
                  <div className="d-flex align-items-center w-100 justify-content-center">
                    <a
                      className="techno-btn position-relative fw-bold py-2 px-3 rounded-pill text-decoration-none text-color-dark"
                      href="/"
                    >
                      Read More <FaArrowRight className="ms-2" />
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Technologies;
