import React from "react";

// Component
import Home from "../home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "../about/about";
// import Footer from "../../common/footer/footer";
// import WhatWeDo from "../what-we-do/whatWeDo";
// import Technologies from "../technologies/technologies";
// import Feedback from "../feedback/feedback";
// import Header from "../../common/header/header";
// import Courses from "../courses/course";
// import Team from "../team/team";
import FrontEnd from "../../common/front-end-course/front-end";
import JSdetails from "../../pages/technodetails/javascript";
import PYdetails from "../../pages/technodetails/python";
import ReactJS from "../../pages/technodetails/reactjs";
import MLdetails from "../../pages/technodetails/machinelearning";
import ATdetails from "../../pages/technodetails/automation";

const Main = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontEnd" element={<FrontEnd />} />
          <Route path="/jsdetails" element={<JSdetails />} />
          <Route path="/pydetails" element={<PYdetails />} />
          <Route path="/rjsdetails" element={<ReactJS />} />
          <Route path="/mldetails" element={<MLdetails />} />
          <Route path="/atdetails" element={<ATdetails />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default Main;
