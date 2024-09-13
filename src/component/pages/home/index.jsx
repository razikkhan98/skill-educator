import React from "react";

import Carousel from "react-bootstrap/Carousel";

// Images
import Home1 from "../../assets/img/home/1.jpg";
import Home2 from "../../assets/img/home/2.jpg";
import Home3 from "../../assets/img/home/3.jpg";
import Home4 from "../../assets/img/home/4.jpg";
import Home5 from "../../assets/img/home/5.jpg";
import Home6 from "../../assets/img/home/6.jpg";
import Home7 from "../../assets/img/home/7.jpg";
import Home8 from "../../assets/img/home/8.jpg";

import Footer from "../../common/footer";
import Header from "../../common/header";
import Loader from "../../common/loader";
import Menu from "../../common/menu";

const Home = () => {
  return (
    <>
      {/* Loader Starts */}
      {/* <Loader /> */}
      {/* Loader End */}

      {/* Header start */}
      {/* <Header title="w e@e d u c a t o r : ~ $" /> */}
      {/* Header End */}

      {/* Menu Button Start */}
      <Menu />
      {/* Menu Button End */}

      {/* Carousel Start */}
      <Carousel fade>
        <Carousel.Item className="h-100">
          {/* <div className="home-img1 h-100 w-100"></div> */}
          <img src={Home1} className="h-100 w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="home-img2"></div> */}
          <img src={Home2} className="h-100 w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="home-img3"></div> */}
          <img src={Home3} className="h-100 w-100" alt="Loading" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={Home4} className="h-100 w-100" alt="Loading" />
          {/* <div className="home-img4"></div> */}
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="home-img5"></div> */}
          <img src={Home5} className="h-100 w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="home-img6"></div> */}
          <img src={Home6} className="w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="home-7"></div> */}
          <img src={Home7} className="w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          {/* <div className="home-img8"></div> */}
          <img src={Home8} className="w-100" alt="Loading" />
        </Carousel.Item>
      </Carousel>
      {/* Carousel End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default Home;
