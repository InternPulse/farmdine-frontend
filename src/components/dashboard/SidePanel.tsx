import logo from "../../assets/nav-logo1.jpg"
import Shopping from "../../assets/shopping-cart.svg"
import Message from "../../assets/message.svg"
import Notification from "../../assets/document-text.svg"
import bag from "../../assets/shopping-bag.svg"
import profile from "../../assets/profile.svg"
import Warning from "../../assets/warning-2.svg"
import settings from "../../assets/setting-2.svg"

const SidePanel = () => {
  return (
    <div className="col-span-3 bg-white text-center w-full h-96 gap-3 flex flex-col justify-between" >
            {/* TOP SECTION */}
              {/* Logo */}
              <div className="bg-white w-72 h-28 px-auto p-2.5 mb-5 flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="justify-center items-center gap-0.5 inline-flex">
                  <div className="w-16 h-16 relative">
                    <img src={logo} alt="farm-dine-logo" />
                  </div>
                  <div>
                    <span className="text-lime-400 text-3xl font-semibold font-['Roboto']">Farm</span>
                    <span className="text-black text-3xl font-semibold font-['Roboto']">dine</span>
                  </div>
                </div>
              </div>

            {/* MIDDLE SECTION */}
            <div className="relative">
              {/* Dashboard */}
              <div className="w-64 h-16 p-3 bg-lime-400 rounded-xl shadow flex-col justify-center items-start gap-3 inline-flex">
                  <div className="justify-center items-center gap-2.5 inline-flex">
                    <div className="flex-col justify-start items-start inline-flex">
                            <div className="text-white text-lg font-medium font-['Inter']">Dashboard</div>
                    </div>
                  </div>
              </div>
              {/* Products */}
              <div className="w-64 h-16 p-3 bg-white rounded-xl flex-col justify-center items-start gap-3 inline-flex">
                <div className="justify-center items-center gap-2.5 inline-flex">
                  <div className="w-7 h-7 justify-center items-center flex">
                    <div className="w-7 h-7 relative">
                      <img src={bag} alt="product" />
                    </div>  
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                                <div className="text-neutral-700 text-lg font-medium font-['Roboto']">Products</div>
                  </div>
                </div>
              </div>
              {/* Add To Cart  */}
              <div className="w-64 h-16 p-3 bg-white rounded-xl flex-col justify-center items-start gap-3 inline-flex">
                  <div className="justify-center items-center gap-2.5 inline-flex">
                    <div className="w-7 h-7 justify-center items-center flex">
                    <div className="w-7 h-7 relative">
                      <img src={Shopping} alt="Shopping_cart"/>
                    </div>
                    </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-neutral-700 text-lg font-medium font-['Roboto']">Add To Cart</div>
                    </div>
                  </div>
              </div>
              {/* Messages */}
              <div className="w-64 h-16 p-3 bg-white justify-start items-center gap-20 inline-flex">
                <div className="justify-center items-center gap-2.5 flex">
                  <div className="w-7 h-7 flex-col justify-center items-center inline-flex">
                  <div className="w-7 h-7 relative">
                    <img src={Message} alt="Message" />
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
              {/* Notifications */}
              <div className="w-64 h-16 p-3 bg-white justify-start items-center gap-20 inline-flex">
                <div className="justify-center items-center gap-2.5 flex">
                  <div className="w-7 h-7 flex-col justify-center items-center inline-flex">
                    <div className="w-7 h-7 relative">
                      <img src={Notification} alt="Notification" />
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-neutral-700 text-lg font-medium font-['Inter']">Notifications</div>
                  </div>
                </div>
                <div className="w-7 h-7 p-2.5 bg-lime-400 rounded flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-lg font-medium font-['Inter']">5</div>
                </div>
              </div>
              {/*  Profile   */}
              <div className="w-64 h-16 p-3 bg-white rounded-xl flex-col justify-center items-start gap-3 inline-flex">
                <div className="justify-center items-center gap-2.5 inline-flex">
                  <div className="w-7 h-7 justify-center items-center flex">
                    <div className="w-7 h-7 relative">
                      <img src={profile} alt="profile"/>
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-neutral-700 text-lg font-medium font-['Roboto']">Profile</div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM SECTION */}  
            <div className="flex flex-col w-72 text-center gap-5 mx-auto px-6 py-5">
              {/* Help */}
              <div className=" bg-white gap-2 justify-start items-center inline-flex">
                <img src={Warning} alt="help_icon"/>
                <div className="text-neutral-700 text-base font-normal font-['Open Sans']">Help</div>
              </div>
              {/* Settings */}
                <div className=" bg-white gap-2 justify-start items-start inline-flex">
                  <img src={settings} alt="settings" />
                <div className="text-neutral-700 text-base font-normal font-['Open Sans']">Settings</div>
                </div>
            </div>
    </div>    
  );
};

export default SidePanel;