import React from "react";

// Component
import Home from "../home/home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "../about/about";
// import Footer from "../../common/footer/footer";
// import WhatWeDo from "../what-we-do/whatWeDo";
// import Technologies from "../technologies/technologies";
// import Feedback from "../feedback/feedback";
// import Header from "../../common/header/header";
// import Courses from "../courses/course";
// import Team from "../team/team";
import FrontEnd from "../../common/front-end-course/front-end";

const Main = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontEnd" element={<FrontEnd />} />
       
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default Main;
