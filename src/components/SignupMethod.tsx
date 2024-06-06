import React from "react";
import navLogo2 from "../assets/nav-logo2.jpg";

const SignupMethod: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <img src={navLogo2} alt="Logo" className="pl-4 pt-2" />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="border-black rounded-lg border-2 p-20  flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold mb-4 text-center">
            <span className="text-[#8BC34A]">Farm</span>dine
          </h1>
          <div className="bg-white rounded-lg shadow-md w-[30rem] pb-8">
            <p className="text-black-600 mb-6 text-center font-bold pt-10">
              Choose your sign up method
            </p>
            <div className="flex flex-col space-y-4 p-4">
              <button className="bg-white-500 hover:bg-[#8BC34A] text-black text-left w-[27rem] p-4 rounded-lg border-gray border-2">
                Sign up as a customer
              </button>
              <button className="bg-white-500 hover:bg-[#8BC34A] text-black text-left w-[27rem] p-4 rounded-lg border-gray border-2">
                Sign up as a supplier
              </button>
            </div>
          </div>
          <p className="mt-6 text-center text-gray-500">
            Already have an account?{" "}
            <a href="#" className="text-[#8BC34A] hover:text-blue-700">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignupMethod;
