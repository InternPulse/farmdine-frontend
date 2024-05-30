import React from 'react'

const Subscribe: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-1024 bg-neutral-100 py-10">
      <div className="w-96 h-96 relative">
        <div className="h-96 absolute flex-col justify-center items-center gap-12 inline-flex">
          <div className="self-stretch h-28 px-16 py-6 rounded-2xl justify-between items-center inline-flex">
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-white text-xl font-semibold font-['Roboto'] leading-loose">Can’t find the answer you are looking for?</div>
            </div>
            <div className="px-12 py-5 bg-white rounded-xl shadow flex-col justify-start items-center inline-flex">
              <div className="text-center text-lime-400 text-base font-medium font-['Roboto'] leading-normal">Get In Touch!</div>
            </div>
          </div>
          <div className="h-52 flex-col justify-start items-center gap-10 flex">
            <div className="pb-4 flex-col justify-start items-start flex">
              <div className="h-24 px-7 flex-col justify-start items-center flex">
                <div className="w-96 text-center text-black text-4xl font-bold font-['Roboto'] leading-10">We are dedicated to fostering the expansion of food enterprises, one purchase at a time.</div>
              </div>
            </div>
            <div className="w-40 h-14 px-12 p-2.5 bg-lime-400 rounded-xl shadow flex-row justify-center items-center flex">
              <div className="text-center text-stone-900 text-small font-bold font-['Roboto'] ">Sign up</div>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 absolute" />
      </div>
    </div>
  )
}

export default Subscribe
