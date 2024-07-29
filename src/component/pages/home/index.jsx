import React, { useEffect, useState } from "react";
import {Carousel} from "react-bootstrap";
import Navbar from "../../common/navbar/index";
// Images
import Home1 from "../../assets/images/home/bg-1.jpg";
import Home2 from "../../assets/images/home/bg-4.jpg";
import Home3 from "../../assets/images/home/bg-animation.jpg";

// AOS Animation
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  //  AOS Animation
  useEffect(() => {
    AOS.init({});
  }, []);

 
  return (
    <>
    <section id="Home">
      <Navbar />
      <Carousel controls={false} fade className="parent position-relative">
        <Carousel.Item interval={1000}>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <img src={Home1} alt="Loading" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <img src={Home2} alt="Loading" />
        </Carousel.Item>
        <Carousel.Item interval={500} >
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <img src={Home3} alt="Loading" />
        </Carousel.Item>
      </Carousel>

      <div
        className="border-box  p-1 home-content text-light d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle rounded"
        data-aos="zoom-in-up"
        data-aos-duration="3000"
      >
        <div className="border-animation p-4">
          <h1 className="text-center text-uppercase font-2xl">
            skill intelligence world
          </h1>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus nobis placeat omnis quam dolorum, quos repellendus,
            maxime consectetur harum repellat ipsa possimus adipisci saepe
            recusandae quia libero accusantium cumque laborum!
          </p>
          {/* Modal button */}
          <div className="btn-frame text-center ">
            <button
              class="custom-btn btn-9"
            >
              Registration
            </button>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
export default Home;
