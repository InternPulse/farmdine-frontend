const Categories = () => {
    return (
        <div className="bg-white p-4 h-[50%] rounded-lg">
            <div className="w-96 h-96 pl-3.5 pr-4 pt-5 pb-8 bg-white rounded-lg flex-col justify-start items-center gap-0.5 inline-flex">
                <div className="self-stretch justify-start items-center gap-14 inline-flex">
    <div className="text-black text-xl font-medium font-['Roboto']">Top categories</div>
    <div className="p-2.5 bg-stone-100 rounded-lg flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="justify-start items-center gap-1.5 inline-flex">
        <div className="text-black text-base font-normal font-['Roboto']">This Month</div>
        <div className="w-4 h-4 justify-center items-center flex">
          <div className="w-4 h-4 relative">
          </div>
        </div>
      </div>
    </div>
                </div>
                <div className="h-80 pt-0.5 flex-col justify-center items-center inline-flex">
                            <div className="w-80 h-80 relative flex-col justify-start items-start flex">
                            <div className="w-24 h-12 relative">
                                <div className="w-24 h-9 p-2.5 left-0 top-0 absolute bg-black rounded-md justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-sm font-medium font-['Roboto']">$8 738.93</div>
                                </div>
                            </div>
                            <div className="w-6 h-6 relative bg-white rounded-3xl border-8 border-lime-400/opacity-20" />
                            <div className="w-64 h-64 origin-top-left rotate-[-18.58deg] rounded-full border-8 border-amber-500" />
                            <div className="w-64 h-64 origin-top-left rotate-[-18.58deg] rounded-full border-8 border-lime-400" />
                            <div className="w-64 h-64 origin-top-left rotate-[-18.58deg] rounded-full border-8 border-yellow-300" />
                                <div className="flex-col justify-start items-center gap-1 inline-flex">
        <div className="text-black text-base font-normal font-['Roboto']">May 2024</div>
        <div className="text-black text-base font-medium font-['Roboto']">$20 826.27</div>
                                </div>
                                <div className="p-2 justify-start items-start gap-2 inline-flex">
        <div className="w-20 h-9 p-2 bg-yellow-300 rounded-lg justify-center items-center gap-1 flex">
          <div className="w-5 h-5 relative" />
          <div className="text-white text-xs font-medium font-['Roboto']">Meat</div>
        </div>
        <div className="w-28 h-9 p-2 bg-amber-500 rounded-lg justify-center items-center gap-1 flex">
          <div className="w-5 h-5 relative" />
          <div className="text-white text-xs font-medium font-['Roboto']">Vegetables</div>
        </div>
        <div className="w-20 h-9 p-2 bg-lime-400 rounded-lg justify-center items-center gap-1 flex">
          <div className="w-5 h-5 relative" />
          <div className="text-white text-xs font-medium font-['Roboto']">Fruit</div>
        </div>
                                </div>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;