import React, { useState } from 'react';

// data for the carousel
const eventData = [
  { id: 1, title: "Event 1", description: "World Farmers' Day, also known as National Farmers' Day, is celebrated on December 23rd every year. It is a day to recognize and appreciate the contributions of farmers to our society. Farmers play a vital role in feeding our communities, preserving natural resources, and supporting local economies." },
  { id: 2, title: "Event 2", description: "Description of Event 2" },
  { id: 3, title: "Event 3", description: "Description of Event 3" },
];

const Events: React.FC = (): React.ReactElement => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % eventData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + eventData.length) % eventData.length);
  };

  return (

    <div>
        <h1 className="text-3xl font-bold text-center">Events</h1>
        <p className="text-center mt-4">Farming events unite the agricultural community to celebrate, share, and innovate.</p>

        <div className="relative w-full max-w-lg mx-auto mt-8 overflow-hidden bg-slate-500 ">
            <div className="text-center p-6 transition-transform duration-500 ease-in-out transform">
            <h2 className="text-2xl font-semibold">{eventData[currentIndex].title}</h2>
            <p className="mt-2">{eventData[currentIndex].description}</p>
            </div>
            <button 
            onClick={handlePrev} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded shadow hover:bg-gray-100 focus:outline-none"
            >
            Previous
            </button>
            <button 
            onClick={handleNext} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white border border-gray-300 p-2 rounded shadow hover:bg-gray-100 focus:outline-none"
            >
            Next
            </button>
        </div>
        
    </div>
  );
};

export default Events;
