import React from 'react';
import Hero from './hero';
import Awards from './award';
import Stats from './stats';
import Pricing from './pricing';
import Education from './education';
import OpenAccount from '../openaccount'; 
import Footer from '../footer';   
import Navbar from '../Navbar';
function homepage() {
    return ( 
        <>
       
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      
        </>
     );
}

export default homepage;