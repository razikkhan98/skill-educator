import React from "react";

// Component
import Home from "../home";
import Footer from "../../common/footer";
import WhatWeDo from "../what-we-do";
import Technologies from "../technologies";
import Header from "../../common/header";
<<<<<<< HEAD
import Aboutuscard from "../about";
=======
import Courses from "../courses";
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212

const Main = () => {
  return (
    <React.Fragment>
      <Home />
      <Header />
<<<<<<< HEAD
      <Aboutuscard/>
      <WhatWeDo />
      <Technologies />
      <Footer />
     </React.Fragment>
=======
      <WhatWeDo />
      <Technologies />
      <Courses/>
      <Footer />
    </React.Fragment>
>>>>>>> 768288e017722bba87a8ae9babad9b0c918ae212
  );
};

export default Main;
