import React from "react";
import { aboutContent, aboutImage } from "../../constants";

const About = () => {
  return (
    <div
      id='about'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 className='text-2xl font-bold text-[#029c15]'>About</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={aboutImage.src}
          alt='Lawn'
          style={{
            width: "35%",
            height: "25%",
            objectFit: "contain",
          }}
        />
        <div className='border border-green-500 rounded-lg p-10 w-1/2 break-words'>
          <p>{aboutContent.description}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
