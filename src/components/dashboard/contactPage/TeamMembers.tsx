import React from 'react';

const TeamMembers: React.FC = () => {
  return (
    <div className="w-822 h-1237 px-102 pt-78 pb-49 bg-white justify-center items-center inline-flex">
      <div className="self-stretch flex-col justify-start items-center gap-20 inline-flex">
        <div className="justify-start items-center gap-24 inline-flex">
          <div className="flex-col justify-start items-start gap-5 inline-flex">
            <div className="flex-col justify-start items-start gap-10 flex">
              <div className="flex-col justify-start items-start flex">
                <div className="flex-col justify-start items-start gap-3.5 flex">
                  <div className="w-44 p-2.5 bg-lime-custom rounded-3xl justify-center items-center gap-2.5 inline-flex">
                    <div className="text-lime-400 text-sm font-normal font-['Open Sans']">Team members</div>
                  </div>
                  <div className="text-stone-900 text-5xl font-semibold font-['Roboto']">
                    Meet Our Amazing <br /> Team Members
                  </div>
                  <div className="w-96 h-20 text-stone-900 text-sm font-normal font-['Open Sans'] leading-normal">
                    At Farmdine, our team bridges the gap between farmers and communities with a commitment to sustainable agriculture and fresh, local food. Meet the innovators driving change in agriculture.
                  </div>
                </div>
              </div>
            {/* Contact Us Button */}
            </div>
            <div className="w-52 h-14 p-2.5 bg-lime-400 rounded-lg justify-center items-center gap-2.5 inline-flex">
              <div className="text-stone-900 text-xl font-semibold font-['Roboto'] leading-10">Contact Us</div>
            </div>
          </div>
          {/* Team Members' Images */}
          <div className="w-96 h-96 relative">
            <img className=" left-[230px] top-0 absolute rounded-2xl" src="../../../assets/images/contactPage1.png" alt='TeamMembers' />
            <img className="w-72 h-80 left-0 top-[126px] absolute rounded-2xl" src="../../../assets/images/contactPage2.png" alt='TeamMembers' />
            <img className="w-80 h-96 left-[208px] top-[233px] absolute rounded-2xl" src="../../../assets/images/contactPage3.png" alt='TeamMembers'/>
          </div>
        </div>
        <div className=" justify-start items-center gap-28 inline-flex">
          <div className="justify-start items-center gap-24 flex">
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-black/opacity-70 text-xl font-sm font-['Open Sans']">Follow us</div>
              <div className="justify-start items-start gap-2.5 inline-flex">
                <div className="justify-center items-center gap-2.5 flex">
                  <div className="w-9 h-9 bg-white rounded-full" />
                </div>
                <div className="justify-start items-start gap-2.5 flex">
                  <div className="w-9 h-9 bg-white rounded-full" />
                  <div className="w-5 h-5 relative" />
                </div>
                <div className="justify-start items-start gap-2.5 flex">
                  <div className="w-9 h-9 bg-white rounded-full" />
                </div>
                <div className="justify-center items-center gap-2.5 flex">
                  <div className="w-9 h-9 bg-white rounded-full" />
                  <div className="w-4 h-3.5 relative" />
                </div>
              </div>
            </div>
            <div className="w-40 h-px origin-top-left rotate-90 border-2 border-stone-300"></div>
          </div>
          <div className="justify-start items-center gap-20 flex">
            <div className="justify-start items-start gap-3.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <div className="w-6 h-6 relative">
                  <div className="w-5 h-5 left-[2px] top-[2px] absolute"></div>
                </div>
              </div>
              <div className="text-stone-900 text-base font-normal font-['Open Sans']">+2340784738889</div>
            </div>
            <div className="w-40 h-px origin-top-left rotate-90 border-2 border-stone-300"></div>
          </div>
          <div className="justify-start items-start gap-3.5 flex">
            <div className="text-stone-900 text-base font-normal font-['Open Sans']">57 Toyin Street Ikeja, Lagos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
