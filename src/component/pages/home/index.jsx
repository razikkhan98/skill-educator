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
// import Home9 from "../../assets/img/home/9.jpg";
// import Home10 from "../../assets/img/home/10.jpg";
import Footer from "../../common/footer";
import Header from "../../common/header";


const Home = () => {
  return (
    <>
    <Header title="w e@e d u c a t o r : ~ $"/>
      <Carousel fade>
        <Carousel.Item>
            <img src={Home1} className="h-100 w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Home2} className="h-100 w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Home3} className="h-100 w-100" alt="Loading" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={Home4}className="h-100 w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Home5} className="h-100 w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Home6} className="w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Home7} className="w-100" alt="Loading" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Home8} className="w-100" alt="Loading" />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img src={Home9} className="w-100" alt="Loading" />      
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <img src={Home10} className="w-100" alt="Loading" />
        </Carousel.Item> */}
      </Carousel>
      <Footer/>
    </>
  );
};
export default Home;
