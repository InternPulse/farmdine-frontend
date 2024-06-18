import React, { useState, useEffect } from 'react';
import EventSectionOne from './Events/EventSectionOne';
import rightarrow from '../assets/arrow-right-bold.png'; 
import sliderdots from '../assets/slider-dots.png';
import { FaArrowLeft } from "react-icons/fa";

// Data for the carousel
const eventData = [
  { id: 1, title: "World's Farmers Day", description: "World Farmers' Day, also known as National Farmers' Day, is celebrated on December 23rd every year. It is a day to recognize and appreciate the contributions of farmers to our society. Farmers play a vital role in feeding our communities, preserving natural resources, and supporting local economies." },
  { id: 2, title: "Get The Best Farm Produce", description: "Fresh, seasonal produce delivered on your schedule. Save time and enjoy the best nature has to offer. Order today!" },
  { id: 3, title: "Experience the difference farm-fresh makes", description: "Elevate your meals with the freshest, highest-quality farm produce. Locally sourced fruits and vegetables bursting with flavor and packed with nutrients." },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(true);

  // Function to handle next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % eventData.length);
    setAutoSlide(false); // Stop auto sliding on manual interaction
  };

  // Function to handle previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + eventData.length) % eventData.length);
    setAutoSlide(false); // Stop auto sliding on manual interaction
  };

  // Effect for auto sliding
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoSlide) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex: number) => (prevIndex + 1) % eventData.length);
      }, 5000); // Adjust the interval as needed (5000ms = 5 seconds)
    }

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount or state change
    };
  }, [autoSlide]);

  return (
    <div className="flex justify-center items-center flex-col ml-3 mt-20">
      <h1 className="inline-block rounded-full bg-lime-100 text-lime-500 font-medium text-center mt-1 px-5 py-2 text-sm">
        Events
      </h1>
      <p className="text-center mt-4 text-xl md:text-3xl px-4">
        Farming events unite the agricultural community <br className="hidden md:block" /> to celebrate, share, and innovate.
      </p>

      <div className="relative w-full md:w-[800px] lg:w-[1050px] my-10 h-96 md:h-screen text-white overflow-hidden rounded-lg">
        <img src="../images/eventsbg.jpg" alt="Event background image" className="absolute inset-0 object-cover w-full h-full z-0" />

        <div className="text-center p-6 transition-transform duration-500 ease-in-out transform z-10">
          <div className="absolute w-full md:w-3/5 text-left top-60 md:top-80 left-4 md:left-10 transform -translate-y-1/2 md:translate-y-0">
            <h2 className="text-2xl md:text-3xl font-semibold">{eventData[currentIndex].title}</h2>
            <p className="mt-4 md:mt-8 text-sm md:text-base">{eventData[currentIndex].description}</p>
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2  shadow focus:outline-none p-2"
        >
         <FaArrowLeft className=" md:w-20 md:h-20"/> 
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 rounded focus:outline-none p-2"
        >
          <img src={rightarrow}  alt="arrow right" className="w-4 h-4 md:w-20 md:h-20"/>
        </button>

        <div className="absolute bottom-4 md:bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <img src={sliderdots} alt="slider dots" />
        </div>
      </div>

      <EventSectionOne />
    </div>
  );
};

export default Events;
