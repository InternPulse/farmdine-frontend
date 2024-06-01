import React from 'react';
import logo from '../../assets/farm-dine-logo.svg'

const SideBar: React.FC = () => {
  return (
    <div className="w-72 h-96 relative bg-white">
      <div className="w-72 h-28 p-2.5 left-0 top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-72 h-28 p-2.5 flex-col justify-center items-center gap-2.5 flex">
          <div className="justify-center items-center gap-0.5 inline-flex">
            <div className="w-16 h-16 relative">
              <img src={logo} alt="farm-dine-logo" />
            </div>
            <div>
              <span className="text-lime-400 text-4xl font-semibold font-['Roboto']">Farm</span>
              <span className="text-black text-4xl font-semibold font-['Roboto']">dine</span>
            </div>
          </div>
        </div>
      </div>
      <div className="left-0 top-[161px] absolute flex-col justify-center items-center gap-3 inline-flex">
        <div className="w-72 h-14 p-3 flex-col justify-center items-center gap-3 flex">
          <div className="w-64 h-14 p-3 bg-lime-400 rounded-xl shadow flex-col justify-center items-start gap-3 flex">
            <div className="justify-center items-center gap-2.5 inline-flex">
              <div className="w-7 h-7 justify-center items-center flex">
                <div className="w-7 h-7 relative">
                  {/* Insert Icon Here */}
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-white text-lg font-medium font-['Inter']">Dashboard</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 h-14 p-3 flex-col justify-center items-center gap-3 flex">
          <div className="w-64 h-14 p-3 bg-white rounded-xl flex-col justify-center items-start gap-3 flex">
            <div className="justify-center items-center gap-2.5 inline-flex">
              <div className="w-7 h-7 justify-center items-center flex">
                <div className="w-7 h-7 relative">
                  {/* Insert Icon Here */}
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-neutral-700 text-lg font-medium font-['Roboto']">Products</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 h-14 p-3 flex-col justify-center items-center gap-3 flex">
          <div className="w-64 h-14 p-3 bg-white rounded-xl flex-col justify-center items-start gap-3 flex">
            <div className="justify-center items-center gap-2.5 inline-flex">
              <div className="w-7 h-7 justify-center items-center flex">
                <div className="w-7 h-7 relative">
                  {/* Insert Icon Here */}
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-neutral-700 text-lg font-medium font-['Roboto']">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-72 h-14 p-3 flex-col justify-center items-center gap-3 flex">
          <div className="w-64 h-14 p-3 bg-white rounded-xl justify-start items-center gap-20 inline-flex">
            <div className="justify-center items-center gap-2.5 flex">
              <div className="w-7 h-7 flex-col justify-center items-center inline-flex">
                <div className="w-7 h-7 relative">
                  {/* Insert Icon Here */}
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-neutral-700 text-lg font-medium font-['Inter']">Messages</div>
              </div>
            </div>
            <div className="w-7 h-7 p-2.5 bg-lime-400 rounded flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-lg font-medium font-['Inter']">3</div>
            </div>
          </div>
        </div>
        <div className="w-72 h-14 p-3 flex-col justify-center items-center gap-3 flex">
          <div className="w-64 h-14 p-3 bg-white rounded-xl justify-start items-center gap-16 inline-flex">
            <div className="justify-center items-center gap-2.5 flex">
              <div className="w-7 h-7 justify-center items-center flex">
                <div className="w-7 h-7 relative">
                  {/* Insert Icon Here */}
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-neutral-700 text-base font-medium font-['Inter']">Notifications</div>
              </div>
            </div>
            <div className="w-7 h-7 p-2.5 bg-lime-400 rounded flex-col justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-lg font-medium font-['Inter']">5</div>
            </div>
          </div>
        </div>
        <div className="w-72 h-14 p-3 flex-col justify-center items-center gap-3 flex">
          <div className="w-64 h-14 p-3 bg-white rounded-xl flex-col justify-center items-start gap-3 flex">
            <div className="justify-center items-center gap-2.5 inline-flex">
              <div className="w-7 h-7 flex-col justify-center items-center inline-flex">
                <div className="w-7 h-7 relative">
                  {/* Insert Icon Here */}
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-neutral-700 text-lg font-medium font-['Inter']">Profile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-72 left-0 top-[866.27px] absolute flex-col justify-center items-center gap-3.5 inline-flex">
        <div className="w-72 h-px border border-zinc-100"></div>
        <div className="flex-col justify-start items-start gap-3 flex">
          <div className="w-72 h-14 p-3 flex-col justify-center items-center gap-3 flex">
            <div className="w-64 h-14 p-3 bg-white rounded-xl flex-col justify-center items-start gap-3 flex">
              <div className="justify-center items-center gap-2.5 inline-flex">
                <div className="w-7 h-7 flex-col justify-center items-center inline-flex">
                  <div className="w-7 h-7 relative">
                    {/* Insert Icon Here */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-neutral-700 text-lg font-medium font-['Inter']">Help</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 h-14 p-3 flex-col justify-center items-center gap-3 flex">
            <div className="w-64 h-14 p-3 bg-white rounded-xl flex-col justify-center items-start gap-3 flex">
              <div className="justify-center items-center gap-2.5 inline-flex">
                <div className="w-7 h-7 justify-center items-center flex">
                  <div className="w-7 h-7 relative">
                    {/* Insert Icon Here */}
                  </div>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-neutral-700 text-base font-medium font-['Inter']">Settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

