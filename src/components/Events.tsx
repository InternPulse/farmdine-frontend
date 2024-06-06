import { useState } from 'react';
import EventSectionOne from './Events/EventSectionOne';
import rightarrow from '../assets/arrow-right-bold.png'; 
import sliderdots from '../assets/slider-dots.png';


// data for the carousel
const eventData = [
  { id: 1, title: "World's Farmers Day", description: "World Farmers' Day, also known as National Farmers' Day, is celebrated on December 23rd every year. It is a day to recognize and appreciate the contributions of farmers to our society. Farmers play a vital role in feeding our communities, preserving natural resources, and supporting local economies." },
  { id: 2, title: "Event 2", description: "Description of Event 2" },
  { id: 3, title: "Event 3", description: "Description of Event 3" },
];

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % eventData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + eventData.length) % eventData.length);
  };

  return (
    <div className="flex justify-center items-center flex-col ml-3 mt-20">
      <h1 className="inline-block rounded-full bg-green-100 text-green-400 text-center mt-1 px-5 py-2 text-xs">Events</h1>
      <p className="text-center mt-4 text-3xl">Farming events unite the agricultural community <br /> to celebrate, share, and innovate.</p>

      <div className="relative w-full ml-4 my-10 h-screen text-white overflow-hidden bg-[url('../images/eventsbg.jpg')] bg-no-repeat rounded">
        <div className="text-center p-6 transition-transform duration-500 ease-in-out transform">
          <div className="absolute w-3/5 text-left top-80 left-10">
            <h2 className="text-3xl font-semibold">{eventData[currentIndex].title}</h2>
            <p className="mt-8">{eventData[currentIndex].description}</p>
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 border rounded shadow focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 rounded focus:outline-none"
        >
          <img src={rightarrow} alt="arrow right" />
        </button>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <img src={sliderdots} alt="slider dots" />
        </div>
      </div>

      <EventSectionOne />
    </div>
  );
};

export default Events;
