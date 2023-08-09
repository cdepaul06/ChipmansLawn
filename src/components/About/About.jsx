import React from "react";
import { aboutContent, aboutImage, schedule } from "../../constants";

const About = () => {
  const scheduleArray = Object.entries(schedule);

  return (
    <div
      id='about'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
      className='border-2 border-green-500 bg-[#eeeeee] w-full lg:w-1/2 mx-auto my-10 rounded-lg'
    >
      <h1 className='text-2xl font-bold text-[#029c15] p-5'>About</h1>
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
          className='sm:w-[50%] lg:w-[30%]'
        />
        <div className='sm:w-full lg:w-1/2 p-10 break-words mt-5 rounded-lg'>
          <p>{aboutContent.description}</p>
        </div>
      </div>
      <ul className='mt-5 mb-5'>
        <p className='underline font-bold ml-8'>Our Availibility</p>
        {scheduleArray.map(([day, time], index) => (
          <li key={index} className='flex flex-col mt-2'>
            <span className='text-sm'>
              {day}: {time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
