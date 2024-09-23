import React from 'react';

// Component
import Home from '../home';
import Footer from '../../common/footer';
import WhatWeDo from '../what-we-do';
import Technologies from '../technologies';


const Main = () => {
    return (
        <React.Fragment>
           <Home/>
           <WhatWeDo/>
           <Technologies/>
           <Footer/>
        </React.Fragment>
    )
}


export default Main;