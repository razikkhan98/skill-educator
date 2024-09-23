import React, { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// Components
import Menu from "../../common/menu";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Images
import Home1 from "../../assets/img/home/1.jpg";
import Home2 from "../../assets/img/home/2.jpg";
import Home3 from "../../assets/img/home/3.jpg";
import Home4 from "../../assets/img/home/4.jpg";
import Home5 from "../../assets/img/home/5.jpg";
import Home6 from "../../assets/img/home/6.jpg";
import Home7 from "../../assets/img/home/7.jpg";
import Home8 from "../../assets/img/home/8.jpg";

const slides = [
  { src: Home1, alt: "Slide 0" },
  { src: Home2, alt: "Slide 1" },
  { src: Home3, alt: "Slide 2" },
  { src: Home4, alt: "Slide 3" },
  { src: Home5, alt: "Slide 4" },
  { src: Home6, alt: "Slide 5" },
  { src: Home7, alt: "Slide 6" },
  { src: Home8, alt: "Slide 7" },
];

// import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [currentSlide]);
  const handleImageClick = (index) => {
    setCurrentSlide(index);
  };
  const slickOptions = {
    centerMode: true,
    centerPadding: "0px",
    vertical: true,
    infinite: true,
    slidesToShow: 5,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    beforeChange: (current, next) => {
      setTimeout(() => {
        setCurrentSlide(next);
      }, 500);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          vertical: false, // Disable vertical mode on smaller screens
          slidesToScroll: 1, // Adjust as needed
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          vertical: false,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      {/* Menu Button Start */}
      <Menu />
      {/* Menu Button End */}

      <div className="gradient-bg">
        <div className="row">
          <div className="col-lg-10">
            <div
              className="image-container"
              data-aos="zoom-in-right"
              key={animationKey}
            >
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "auto",
                  transition: "opacity 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
                }}
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="scrollable-slider">
              <div className="slick">
                <Slider {...slickOptions}>
                  {slides.map((slide, index) => (
                    <div className="item" key={index}>
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        style={{ height: "100%" }}
                        onClick={() => handleImageClick(index)}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Home;
