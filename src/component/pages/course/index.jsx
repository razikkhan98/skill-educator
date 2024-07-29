import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";

// Icons
import { GrSystem } from "react-icons/gr";
import { SiPython, SiReact } from "react-icons/si"; // Add necessary icons
import { IoLogoJavascript } from "react-icons/io";
import { FcServices, FcDataConfiguration } from "react-icons/fc";

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
      icon: <GrSystem className="h-50 w-50" />,
      title: "Web-Development",
      description:
        "web-Development is to creating, building, and maintaining websites and web applications that run online on a browser",
    },
    {
      bg: "bg-card2",
      icon: <FcServices className="h-50 w-50" />,
      title: "Automation Testing",
      description:
        "Automated testing is a software testing technique that automates the process of validating the functionality of software ",
    },
    {
      bg: "bg-card2",
      icon: <SiPython className="h-50 w-50" />,
      title: "Python",
      description:
        "Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.",
    },
    {
      bg: "bg-card1",
      icon: <FcDataConfiguration className="h-50 w-50" />,
      title: "Machine Learning",
      description:
        "Machine learning is a branch of artificial intelligence and computer science that focuses on the using data and algorithms.",
    },

    {
      bg: "bg-card1",
      icon: <SiReact className="h-50 w-50 text-primary" />,
      title: "React Js",
      description:
        "React.js, a frontend-focused JS library used mainly for building single-page and multi-page interfaces.",
    },
    {
      bg: "bg-card2",
      icon: <IoLogoJavascript className="h-50 w-50 text-warning" />,
      title: "Javascript",
      description:
        "JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods.",
    },
  ];
  return (
    <>
      <div className="bg-image1 background-img">
        <div className="container p-5">
          <div className="text-center text-white mb-5">
            <h1>Our Courses</h1>
            <p>
              Our programs are crafted to help you achieve your professional
              goals.
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
                        <Card.Text className="text-justify">
                          {link.description}
                        </Card.Text>
                        <div className="btn-frame pt-3 ">
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
