import React from "react";

// Component
import Home from "../home";
import About from "../../pages/about/index";
import Footer from "../../common/footer";
import WhatWeDo from "../what-we-do";
import Technologies from "../technologies";
import Feedback from "../feedback";
import Header from "../../common/header";
import Courses from "../courses";
import Team from "../team";

const Main = () => {
  return (
    <React.Fragment>
      <Home />
      <About/>
      <Header />
      <WhatWeDo />
      <Technologies />
      <Courses/>
      <Team/>
      <Feedback/>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
