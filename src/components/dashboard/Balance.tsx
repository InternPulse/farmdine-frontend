const Balance = () => {
    return (
        <div className="bg-white w-[50%] rounded-lg">
            <div className="w-80 h-60 px-7 py-8 bg-white rounded-lg flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="justify-start items-start inline-flex">
                    <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <div className="justify-start items-start gap-4 inline-flex">
                                        <div className="p-4 bg-lime-100 rounded-full justify-start items-start gap-4 flex">
                                        <div className="w-6 h-6 justify-center items-center flex">
                                        <div className="w-9 h-9 relative">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#BFBFBF" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>

                                        </div>
                                        </div>
                                        </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-3.5 flex">
                        <div className="text-black text-3xl font-medium font-['Roboto']">$55 283.29</div>
                        <div className="text-black text-lg font-normal font-['Roboto']">Total Balance</div>
                        <div className="text-stone-500 text-md font-normal font-['Roboto']">17 May - 10 June 2024</div>
                        </div>
                    </div>
                    <div className="w-24 h-9 p-2.5 rounded-lg shadow justify-center items-center gap-1 flex">
                    <div className="text-[#008000] text-lg font-semibold font-['Roboto']">+15.5%</div>
                    <div className="w-5 h-5 justify-center items-center flex">
                        <div className="w-5 h-5 relative">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#008000" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                            </svg>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Balance;