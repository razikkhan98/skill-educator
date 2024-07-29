import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";

// Images
import Html from "../../assets/images/courses/html.png";
// import Css from "../../assets/images/courses/css.jpg";
// import Js from "../../assets/images/courses/js.jpg";
// import Angular from "../../assets/images/courses/angular.png";

// Icons
import { FaHtml5 } from "react-icons/fa";
import { GrSystem } from "react-icons/gr";
import { SiPython, SiJavascript, SiReact, SiMachinelearning } from "react-icons/si"; // Add necessary icons

const Course = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // dots: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const CourseData = [
    {
      bg: "bg-card1",
      icon: <GrSystem  className="h-50 w-50"/> ,
      title: "Web-Development",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      bg: "bg-card2",
      icon: <FaHtml5 className="h-50 w-50" />,
      title: "Automation Testing",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      bg: "bg-card1",
      icon: <FaHtml5 className="h-50 w-50"/>,
      title: "Machine Learning",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      bg: "bg-card2",
      icon:<SiPython className="h-50 w-50" />,
      title: "Python",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      bg: "bg-card1",
      icon: <SiReact className="h-50 w-50" />,
      title: "React Js",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      bg: "bg-card2",
      icon: <SiJavascript className="h-50 w-50" />,
      title: "Javascript",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  return (
    <>
      <div className="bg-image">
        <div className="container p-5">
          <div className="text-center text-white mb-5">
            <h1>Our Courses</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ratione accusantium, odio
            </p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {CourseData.map((link, index) => (
                <div className="course-card  pb-5">
                  <div className=" d-flex justify-content-around">
                    <Card className="m-3">
                      {/* <Card.Img variant="top" src={link.image} /> */}
                      <div
                        className={`p-3 ${link.bg} border-bottom m-1 d-flex justify-content-center align-items-center`}
                      >
                        {link.icon}
                        {/* <FaHtml5 className="h-50 w-50" /> */}
                      </div>
                      <Card.Body>
                        <Card.Title>{link.title}</Card.Title>
                        <Card.Text>{link.description}</Card.Text>
                        <div className="btn-frame pt-5 ">
                          <button class="custom-btn btn-9">Read More</button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Course;
