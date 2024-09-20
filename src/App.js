// import logo from './logo.svg';
import "./App.css";
import CompanyName from "./component/common/company-name";
import Footer from "./component/common/footer";
import Loader from "./component/common/loader";
import Home from "./component/pages/home";
import WhatWeDo from "./component/pages/what-we-do";

function App() {
  return (
    <>
    <Loader/>
      <CompanyName/>
      <Home />
      <WhatWeDo/>
    <Footer/>
    </>


  );
}

export default App;
