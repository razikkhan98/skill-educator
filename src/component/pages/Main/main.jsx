import React from "react";

// Component
import Home from "../home/home";
import About from "../about/about";
import Footer from "../../common/footer/footer";
import WhatWeDo from "../what-we-do/whatWeDo";
import Technologies from "../technologies/technologies";
import Feedback from "../feedback/feedback";
import Header from "../../common/header/header";
import Courses from "../courses/course";
import Team from "../team/team";

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
