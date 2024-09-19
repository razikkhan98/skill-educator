import React, { useEffect, useRef } from "react";

// import Carousel from "react-bootstrap/Carousel";

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
// import Header from "../../common/header";
import Loader from "../../common/loader";
import Menu from "../../common/menu";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import CompanyName from "../../common/company-name";

const Home = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    function activate(e) {
      const items = slider.querySelectorAll(".item");
      if (!items.length) return;

      if (e.target.matches(".next")) {
        slider.append(items[0]);
      } else if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    }

    document.addEventListener("click", activate);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("click", activate);
    };
  }, []);

  return (
    <>
      {/* Loader Starts */}
      {/* <Loader /> */}
      {/* Loader End */}

      {/* CompanyName Start */}
      {/* <CompanyName /> */}
      {/* CompanyName End */}

      {/* Header start */}
      {/* <Header title="w e@e d u c a t o r : ~ $" /> */}
      {/* Header End */}

      {/* Menu Button Start */}
      <Menu />
      {/* Menu Button End */}

      {/* Carousel Start */}
      <main>
        <div className="slider" ref={sliderRef}>
          <div className="item">
            <img src={Home1} loading="eager" alt="Loading" />
          </div>
          {/* <!-- visibele item --> */}
          <div className="item">
            <img
              src={Home2}
              loading="eager"
              alt="Nobis Omnis"
              className="image"
            />
          </div>
          <div className="item">
            <img
              src={Home3}
              loading="eager"
              alt="Ut Distinctio"
              className="image"
            />
          </div>
          <div className="item">
            <img
              src={Home4}
              loading="eager"
              alt="Commodi Veniam"
              className="image"
            />
          </div>
          <div className="item">
            <img
              src={Home5}
              loading="eager"
              alt="Ipsam Tenetur"
              className="image"
            />
          </div>
          <div className="item">
            <img
              src={Home6}
              loading="eager"
              alt="Nesciunt Consectetur Similique Sit"
              className="image"
            />
          </div>
          {/* <div className="item">
            <img
              src={Home7}
              loading="eager"
              alt="Nesciunt Consectetur Similique Sit"
              className="image"
            />
            
          </div> */}
          {/* <div className="item">
            <img
              src={Home8}
              loading="eager"
              alt="Nesciunt Consectetur Similique Sit"
              className="image"
            />
            
          </div> */}
        </div>
        <nav className="nav">
          <FaArrowCircleLeft
            className="btn prev fs-1"
            name="arrow-back-outline"
          />
          <FaArrowCircleRight
            className="btn next fs-1"
            name="arrow-forward-outline"
          />
        </nav>
      </main>
      {/* Carousel End */}

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};
export default Home;
