import React from "react";

const TestimonialSection: React.FC = () => {
  return (
    <div className="container flex justify-center items-center w-full h-full px-4 py-12 md:px-24 md:py-16 flex-col gap-10">
      <section className="testimonial-section py-16 bg-white flex flex-col items-center">
        <div className="flex justify-center items-center w-auto px-6 py-3 mx-auto bg-lime-custom rounded-full">
          <h1 className="bg-lime-100 text-lime-500 font-medium text-center text-sm px-5 py-2 rounded-full">
            Client Testimonials
          </h1>
        </div>
        <div className="text-center text-2xl md:text-4xl font-roboto font-bold text-black mt-5">
          What clients say about us
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 testimonials-container">
          <div className="p-testimonials bg-lime-50 rounded-lg shadow-lg backdrop-blur-md p-6">
            <div className="flex flex-col justify-center px-6 py-4 rounded-lg">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-snug mb-4">
                Tunde Badmus
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                FarmDine has transformed my farm. Now, I can reach buyers who value
                locally grown, organic produce. The platform showcases my authenticity,
                ensuring steady sales and supporting sustainable farming.
              </p>
            </div>
          </div>

          <div className="p-testimonials bg-lime-50 rounded-lg shadow-lg backdrop-blur-md p-6">
            <div className="flex flex-col justify-center px-6 py-4 rounded-lg">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-snug mb-4">
                Gloria Enam
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                FarmDine catapulted my homemade food business to new heights. With
                their platform, I expanded distribution while preserving recipe
                integrity. A game-changer for passionate small producers like me.
              </p>
            </div>
          </div>

          <div className="p-testimonials bg-lime-50 rounded-lg shadow-lg backdrop-blur-md p-6">
            <div className="flex flex-col justify-center px-6 py-4 rounded-lg">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-snug mb-4">
                Aisha Rashid
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                Timely supply and affordable prices, It is good to do business Thanks
                to FarmDine, ingredient sourcing for my restaurant is effortless. No
                more endless searches or quality concerns.
              </p>
            </div>
          </div>
          <div className="p-testimonials bg-lime-50 rounded-lg shadow-lg backdrop-blur-md p-6">
            <div className="flex flex-col justify-center px-6 py-4 rounded-lg">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-snug mb-4">
              Chioma Wheeler
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                Timely supply and affordable prices, It is good to do business Thanks
                to FarmDine, ingredient sourcing for my restaurant is effortless. No
                more endless searches or quality concerns.
              </p>
            </div>
          </div>
          <div className="p-testimonials bg-lime-50 rounded-lg shadow-lg backdrop-blur-md p-6">
            <div className="flex flex-col justify-center px-6 py-4 rounded-lg">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-snug mb-4">
                Aziz Sameer
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                Timely supply and affordable prices, It is good to do business Thanks
                to FarmDine, ingredient sourcing for my restaurant is effortless. No
                more endless searches or quality concerns.
              </p>
            </div>
          </div>
          <div className="p-testimonials bg-lime-50 rounded-lg shadow-lg backdrop-blur-md p-6">
            <div className="flex flex-col justify-center  px-6 py-4 rounded-lg">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-snug mb-4">
                Charity Devine
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                Timely supply and affordable prices, It is good to do business Thanks
                to FarmDine, ingredient sourcing for my restaurant is effortless. No
                more endless searches or quality concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialSection;
