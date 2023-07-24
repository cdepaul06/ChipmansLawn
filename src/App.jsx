import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ImageCarousel from "./components/ImageCarousel";
import ServicesCard from "./components/ServicesCard/ServicesCard";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className='sticky top-0 z-50'>
          <Navigation />
        </div>
        <div id='carousel' className='pt-[10rem]'>
          <ImageCarousel />
        </div>
        <div id='services' className='mt-[15rem]'>
          <ServicesCard />
        </div>
        <div id='about' className='mt-[15rem]'>
          <About />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <div id='footer'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
