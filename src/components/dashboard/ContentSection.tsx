import Balance from "./Balance.js";
import Expenses from "./Expenses.js";
import Orders from "./Orders.js";
import Categories from "./Categories.js";
import History from "./History.js";

const ContentSection = () => {
  return (
    <div className=" grid-template-rows-3 h-[86.4%] bg-[#F5F5F5] flex flex-row justify-between gap-4 p-4">
      {/* Left section */}
      <div className="bg-[#f5f5f5] col-span-2 w-[70%]">
                        {/* Top */}
                        <div className="bg-[#F5F5F5] h-[30%] gap-3 pb-3 flex flex-row">
                            {/* Balance */}
                            <Balance />
                            {/* Expenses */}
                            <Expenses />
                        </div>
                        {/* Bottom */}
                          {/* History */}
                          <History />
      </div>
      {/* Right Section */}
      <div className="bg-white col-span-1 w-[30%] flex-row justify-between">
        {/* Orders */}
        <Orders />
        {/* Categories */}
        <Categories />
      </div>
    </div>
  );
};

export default ContentSection;