import React from "react";

const TestimonialSection: React.FC = () => {
  return (
    <div className="container flex justify-center items-center w-full h-full px-[191px] py-[48px] flex-col gap-10">
      <section className="testimonial-section py-16 bg-white flex flex-col items-center gap-">
        <div className="flex justify-center items-center w-[252.283px] p-[11.957px] gap-[11.957px] mx-auto bg-lime-custom rounded-[38.261px]">
        <h1 className="inline-block rounded-full bg-lime-100 text-lime-500 font-medium text-center mt-1 px-5 py-2 text-sm">Client Testimonials</h1>
        </div>
        <div className="text-center text-[40px] font-roboto font-bold text-black mt-[21.522px]">
          What clients say about us
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8 testimonials-container">
          <div className="p-testimonials bg-testimonialsBg rounded-testimonials shadow-testimonials backdrop-blur-testimonials">
            <div className="flex flex-col justify-center bg-lime-50 px-6 py-4">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-[23.913px] mb-4">
                Tunde Badmus
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                FarmDine has transformed my farm. Now, I can reach buyers who value
                locally grown, organic produce. The platform showcases my authenticity,
                ensuring steady sales and supporting sustainable farming.
              </p>
            </div>
          </div>

          <div className="p-testimonials bg-testimonialsBg rounded-testimonials shadow-testimonials backdrop-blur-testimonials">
            <div className="flex flex-col justify-center bg-lime-50 px-6 py-4">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-[23.913px] mb-4">
                Chioma Wheeler
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                FarmDine catapulted my homemade food business to new heights. With
                their platform, I expanded distribution while preserving recipe
                integrity. A game-changer for passionate small producers like me.
              </p>
            </div>
          </div>

          <div className="p-testimonials bg-testimonialsBg rounded-testimonials shadow-testimonials backdrop-blur-testimonials">
            <div className="flex flex-col justify-center bg-lime-50 px-6 py-4">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-[23.913px] mb-4">
                Aisha Ngozi
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                Timely supply and affordable prices, It is good to do business Thanks
                to FarmDine, ingredient sourcing for my restaurant is effortless. No
                more endless searches or quality concerns.
              </p>
            </div>
          </div>

          <div className="p-testimonials bg-testimonialsBg rounded-testimonials shadow-testimonials backdrop-blur-testimonials">
            <div className="flex flex-col justify-center bg-lime-50 px-6 py-4">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-[23.913px] mb-4">
                Tunde Badmus
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                FarmDine has transformed my farm. Now, I can reach buyers who value
                locally grown, organic produce. The platform showcases my authenticity,
                ensuring steady sales and supporting sustainable farming.
              </p>
            </div>
          </div>

          <div className="p-testimonials bg-testimonialsBg rounded-testimonials shadow-testimonials backdrop-blur-testimonials">
            <div className="flex flex-col justify-center bg-lime-50 px-6 py-4">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-[23.913px] mb-4">
                Chioma Wheeler
              </h3>
              <p className="text-[#1E1E1E] font-openSans text-sm font-normal mb-4">
                FarmDine catapulted my homemade food business to new heights. With
                their platform, I expanded distribution while preserving recipe
                integrity. A game-changer for passionate small producers like me.
              </p>
            </div>
          </div>

          <div className="p-testimonials bg-testimonialsBg rounded-testimonials shadow-testimonials backdrop-blur-testimonials">
            <div className="flex flex-col justify-center bg-lime-50 px-6 py-4">
              <h3 className="text-[#1E1E1E] font-roboto font-medium text-lg md:text-xl leading-[23.913px] mb-4">
                Aisha Ngozi
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
