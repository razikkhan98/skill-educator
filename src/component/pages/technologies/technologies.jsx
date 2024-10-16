import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

// Images
import Logo from "../../assets/img/logo/Intelligence Educator1.png";
import MachineLearning from "../../assets/img/tecnologies/machine-learning (1).png";
import Testing from "../../assets/img/tecnologies/testing.png"; // Automation Testing image
import Js from "../../assets/img/tecnologies/developer.png";
import Reactjs from "../../assets/img/tecnologies/react.png";
import Python from "../../assets/img/tecnologies/python (1).png";

// Icons
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const Technologies = () => {
  const TechnologiesData = [
    
    {
      logo_img: Logo,
      title: "Machine Learning",
      image: MachineLearning,
      style: { position: "relative", right: "123px",},
      page: "mldetails",
    },
    {
      logo_img: Logo,
      title: "Automation Testing",
      image: Testing,
      style: { position: "relative", bottom: "50px" },
      page: "/atdetails",

    },
    {
      logo_img: Logo,
      title: "JS",
      image: Js,
      style: { position: "absolute", bottom: "100px" },
      page: "/jsdetails",

    },
    {
      logo_img: Logo,
      title: "PYTHON",
      image: Python,
      style: { position: "absolute", bottom: "50px" },
      page: "/pydetails",

    },
    {
      logo_img: Logo,
      title: "REACTJS",
      image: Reactjs,
      style: { position: "absolute", bottom: "100px" },
      page: "/rjsdetails",

    },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show three cards
    slidesToScroll: 1, // Slide one card at a time
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="gradient-bg d-flex align-items-center justify-content-center"
        id="Technologies"
      >
        <Container fluid className="pt-5">
          {/* Slider for Technologies */}
          <Slider {...settings}>
            {TechnologiesData.map((tech, index) => (
              <div key={index}>
                <div
                  className="tecnology-card technology-card-bg py-3 d-flex flex-column align-items-baseline justify-content-start"
                  data-aos="zoom-in-up"
                   data-aos-duration="3000"
                     data-aos-easing="ease-in-back"
                  style={{
                    ...tech.style, // Use the style defined for each technology
                  }}
                >
                  <div className="tecnology-card-logo tecnology-logo-bg d-flex align-items-center justify-content-end position-relative techno-logo">
                    {/* <img src={tech.logo_img} alt="Loading" /> */}
                    <img src={tech.logo_img} alt={`${tech.title} logo`} />

                  </div>
                  <div className="d-flex align-items-center w-100 justify-content-center technology-title text-uppercase pt-2 fw-bold fs-6">
                    {tech.title}
                  </div>
                  <div className="d-flex align-items-center w-100 justify-content-center flexcardImg py-4">
                    {/* <img className="technocardimgItem" src={tech.image} alt={tech.title} /> */}
                    <img className="technocardimgItem" src={tech.image} alt={`img of ${tech.title}`} />

                  </div>
                  <div className="d-flex align-items-center w-100 justify-content-center py-2">
                    <NavLink to={tech.page} className="text-decoration-none">
                    <button
                      className="techno-btn position-relative fw-bold py-2 px-3 rounded-pill text-color-dark"
                    >
                      Read More <FaArrowRight className="ms-2" />
                    </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default Technologies;
