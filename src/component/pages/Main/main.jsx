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
import FrontEnd from "../../common/course-details/front-end";
import BackEnd from "../../common/course-details/back-end";
import FullStack from "../../common/course-details/full-stack";
import MachineLearning from "../../common/course-details/machine-Learning";
import Hacking from "../../common/course-details/hacking";
import Automation from "../../common/course-details/automation";
import DigitalMarketing from "../../common/course-details/dg-marketing";
import DataAnalysis from "../../common/course-details/data-analysis";

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
          <Route path="/backEnd" element={<BackEnd />} />
          <Route path="/fullStack" element={<FullStack />} />
          <Route path="/machineLearning" element={<MachineLearning />} />
          <Route path="/hacking" element={<Hacking />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/digitalMarketing" element={<DigitalMarketing/>} />
          <Route path="/dataAnalysis" element={<DataAnalysis/>} />
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
