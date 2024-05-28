import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

const TopBar: React.FC = () => {
  return (
    <div className="w-96 h-28 px-8 pt-7 pb-6 bg-white justify-center items-center inline-flex">
      <div className="self-stretch justify-start items-center gap-64 inline-flex">
        <div className="w-96 h-14 px-5 py-2.5 bg-neutral-100 rounded-lg flex-col justify-center items-start gap-2.5 inline-flex">
          <div className="justify-center items-center gap-2.5 inline-flex">
            <div className="w-7 h-7 justify-center items-center flex">
              <FontAwesomeIcon icon={faSearch} className="text-gray-500" />
            </div>
            <div className="flex-col justify-start items-start inline-flex">
              <div className="text-stone-300 text-lg font-normal font-['Inter']">Search here...</div>
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-6 flex">
          <div className="justify-start items-start gap-4 flex">
            <div className="p-2.5 bg-neutral-100 rounded-full justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 justify-center items-center flex">
                <FontAwesomeIcon icon={faBell} className="text-gray-500" />
              </div>
            </div>
            <div className="justify-start items-start gap-2.5 flex">
              <div className="p-2.5 bg-neutral-100 rounded-full justify-start items-start gap-2.5 flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <FontAwesomeIcon icon={faUser} className="text-gray-500" />
                </div>
              </div>
              <div className="w-1.5 h-1.5 bg-lime-400 rounded-full" />
            </div>
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <div className="justify-start items-center gap-1.5 flex">
              <div className="w-14 h-14 justify-center items-center flex">
                <img className="w-14 h-14 relative rounded-3xl" src="../../assets/profile pic.png" alt="Profile pic" />
              </div>
              <div className="flex-row justify-start items-start gap-1.5 inline-flex">
                <div className="text-stone-950 text-base font-medium font-['Roboto']">Aisha Stephanie</div>
              </div>
            </div>
            <div className="w-4 h-4 justify-center items-center flex">
              {/* Insert another icon here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

