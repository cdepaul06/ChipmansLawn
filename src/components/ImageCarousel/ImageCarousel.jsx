import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { lawnImages } from "../../constants";

const ImageCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup - remove the event listener when the component is unmounted
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className='mx-auto w-[67%] border-2 border-black shadow-lg mt-8'>
      <Carousel
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        emulateTouch
        autoPlay
        stopOnHover
        interval={windowWidth > 768 ? 3000 : 5000}
        transitionTime={windowWidth > 768 ? 1000 : 2000}
        centerMode={windowWidth > 768}
        centerSlidePercentage={windowWidth > 768 ? 33.33 : 100}
      >
        {lawnImages.map((image, index) => (
          <div
            key={index}
            className='h-[60vh] overflow-hidden border border-black'
          >
            <img
              src={image.src}
              alt={image.alt}
              className='h-full w-auto object-cover'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
