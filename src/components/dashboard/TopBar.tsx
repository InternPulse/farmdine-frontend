import SearchBar from "./SearchBar";
import Pic from "../../assets/profilePicture.jpg";

const TopBar = () => {
    return (
        <div className="h-[80px] bg-white p-[10px] flex justify-between items-center">
            <div>
                <SearchBar />
            </div>
            <div className="flex flex-row gap-2 items-center mx-2">
                <div className="flex flex-row items-center gap-2">
                    {/* Cart */}
                    <div className="bg-[#F5F5F5] h-[30px] w-[30px] rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </div>
                    {/* Notifications*/}
                    <div className="bg-[#F5F5F5] h-[30px] w-[30px] rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="absolute w-5 h-5">
                            <circle cx="6" cy="6" r="3" fill="#8BC34A" />
                        </svg>
                    </div>
                </div>

                {/* Profile */}
                <div className="flex flex-row gap-1 items-center p-2">
                    <div className="bg-white h-[42px] w-[42px] rounded-full">
                        <img src={Pic} alt="profile_pic" className="rounded-full"/>
                    </div>
                    <div className="text-[12px] text-center font-semi-bold font-['Roboto']">Aisha Stephani</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#BFBFBF" className="size-4 pr-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                
            </div>
        </div>
    );
}
export default TopBar;

