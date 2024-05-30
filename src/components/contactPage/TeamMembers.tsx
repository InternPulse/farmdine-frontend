import React from 'react';
import contactPage1 from '../../assets/images/contactPage1.jpg';
import contactPage2 from '../../assets/images/contactPage2.jpg';
import contactPage3 from '../../assets/images/contactPage3.jpg';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import linkedin from '../../assets/icons/linkedin.png';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/calling.png';

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
              <div className="text-stone-900 text-l font-semibold font-['Roboto'] leading-10">Contact Us</div>
            </div>
          </div>
          {/* Team Members' Images */}
          <div className="w-96 h-96 relative">
            <img className="w-348 h-285 left-[230px] top-0 absolute rounded-2xl" src={contactPage1} alt='TeamMembers' />
            <img className="w-290 h-316 left-0 top-[126px] absolute rounded-2xl" src={contactPage2} alt='TeamMembers' />
            <img className="w-338 h-353 left-[208px] top-[233px] absolute rounded-2xl" src={contactPage3} alt='TeamMembers' />
          </div>
        </div>
        {/* Contact Info Section */}
        <div className="px-60 py-40 justify-start items-center gap-2 inline-flex">
          <div className="justify-start items-center gap-28 flex">
            {/* Social Media */}
            <div className="flex-col justify-start items-start gap-6 inline-flex">
              <div className="text-black/opacity-70 text-xl font-sm font-['Open Sans']">Follow us</div>
              {/* Social Icons */}
              <div className="flex justify-start items-center gap-4">
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="instagram" />
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
              </div>
            </div>
            {/* Border left */}
            <div className="w-40 h-px origin-top-left rotate-90 border-2 border-stone-300"></div>
          </div>
          <div className="justify-start items-center gap-20 flex">
            {/* Phone Number */}
            <div className="justify-start items-start gap-3.5 flex">
              <img src={phone} alt="phone" />
              <div className="text-stone-900 text-base font-normal font-['Open Sans']">+2340784738889</div>
            </div>
            {/* Border Right */}
            <div className="w-40 h-px origin-top-left rotate-90 border-2 border-stone-300"></div>
          </div>
          {/* Address */}
          <div className="justify-start items-start gap-3.5 flex">
            <img src={location} alt="location" />
            <div className="text-stone-900 text-base font-normal font-['Open Sans']">57 Toyin Street Ikeja, Lagos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
