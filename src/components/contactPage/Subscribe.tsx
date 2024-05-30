import React from 'react';

const Subscribe: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-100 py-10">
      <div className="w-4/5 max-w-4xl relative p-8 rounded-lg">
        <div className="flex flex-col justify-center items-center gap-12">
          <div className="w-full h-28 px-16 py-6 bg-lime-400 rounded-2xl flex justify-between items-center">
            <div className="text-white text-sm font-normal font-['Roboto'] leading-loose">
              Can’t find the answer you are looking for?
            </div>
            <div className="px-12 py-5 bg-white rounded-xl shadow flex justify-center items-center">
              <div className="text-center text-lime-400 text-base font-small font-['Roboto'] leading-normal">
                Get In Touch!
              </div>
            </div>
          </div>
          <div className="w-full h-52 flex flex-col justify-start items-center gap-10">
            <div className="pb-4 flex-col justify-start items-start flex">
              <div className="h-24 px-7 flex flex-col justify-start items-center">
                <div className="w-full text-center text-black text-4xl font-bold font-['Roboto'] leading-10">
                  We are dedicated to fostering the expansion of food enterprises, one purchase at a time.
                </div>
              </div>
            </div>
            <div className="w-40 h-14 px-12 py-5 bg-lime-400 rounded-xl shadow flex justify-center items-center">
              <div className="text-center text-stone-900 text-lg font-medium font-['Roboto'] leading-normal">
                Sign up
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
