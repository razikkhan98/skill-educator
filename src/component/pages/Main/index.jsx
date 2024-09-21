import React from 'react';

// Component
import Home from '../home';
import Footer from '../../common/footer';
import WhatWeDo from '../what-we-do';


const Main = () => {
    return (
        <React.Fragment>
           <Home/>
           <WhatWeDo/>
           <Footer/>
        </React.Fragment>
    )
}


export default Main;