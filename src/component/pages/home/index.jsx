import React, { useEffect, useRef } from "react";

// Icons
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// Images
import Home1 from "../../assets/img/home/1.jpg";
import Home2 from "../../assets/img/home/2.jpg";
import Home3 from "../../assets/img/home/3.jpg";
import Home4 from "../../assets/img/home/4.jpg";
import Home5 from "../../assets/img/home/5.jpg";
import Home6 from "../../assets/img/home/6.jpg";

// Components
import Menu from "../../common/menu";


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
    <React.Fragment>
    
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

   
    </React.Fragment>
  );
};
export default Home;
