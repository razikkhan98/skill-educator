import React from "react";

// Component
import Home from "../home";
import Footer from "../../common/footer";
import WhatWeDo from "../what-we-do";
import Technologies from "../technologies";
import Header from "../../common/header";
import Courses from "../courses";

const Main = () => {
  return (
    <React.Fragment>
      <Home />
      <Header />
      <WhatWeDo />
      <Technologies />
      <Courses/>
      <Footer />
    </React.Fragment>
  );
};

export default Main;
