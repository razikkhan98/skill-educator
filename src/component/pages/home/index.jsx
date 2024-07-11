import React from "react";

import Navbar from "../../common/navbar";

// Images
import Home1 from "../../assets/images/home/home-1.jpg";
import Home2 from "../../assets/images/home/home-2.jpg";
import Home3 from "../../assets/images/home/home-3.jpg";
const Home = () => {
  return (
    <>
      <Navbar />
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner position-relative d-flex align-items-center ">
          <div class="carousel-item active">
            <img src={Home1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Home2} class="d-block w-100 h-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Home3} class="d-block w-100" alt="..." />
          </div>
          <div className="content position-absolute text-light text-center start-50 translate-middle">
            <h1 className="d-flex justify-content-center text-uppercase font-2xl">
              skill intelligence world
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur, nulla voluptatem maiores veniam, id eos excepturi
              inventore deleniti est expedita doloremque cupiditate. Doloremque
              laboriosam minus, aspernatur dolore eligendi molestiae tenetur?
            </p>
            <a href="#" className="theme-btn">
              Join Now
            </a>

          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default Home;
