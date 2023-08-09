import React from "react";
import Navigation from "./components/Navigation/Navigation";
import ImageCarousel from "./components/ImageCarousel";
import ServicesCard from "./components/ServicesCard/ServicesCard";
import About from "./components/About";
import Estimate from "./components/Estimate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div className='sticky top-0 z-50'>
        <Navigation />
      </div>
      <div id='carousel' className='pt-[13rem] flex justify-center'>
        <ImageCarousel />
      </div>
      <div id='services' className='pt-[15rem]'>
        <ServicesCard />
      </div>
      <div id='about' className='pt-[15rem] flex justify-center'>
        <About />
      </div>
      <div id='estimate' className='pt-[15rem] flex justify-center'>
        <Estimate />
      </div>
      <div id='contact' className='pt-[15rem] flex justify-center'>
        <Contact />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
