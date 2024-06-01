import React from 'react';
import googleLogo from '../assets/google.png';
import appleLogo from '../assets/Apple.png';

const Login: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6">Login to your account</h1>
                <div className="mb-4">
                    <label htmlFor="emailOrPhone" className="block mb-1">Email or phone number</label>
                    <input type="text" id="emailOrPhone" placeholder="Enter your email or phone number" className="border rounded px-3 py-2 w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-1">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" className="border rounded px-3 py-2 w-full" />
                </div>
                <div className="flex items-center mb-4">
                    <input type="checkbox" id="rememberMe" className="mr-2" />
                    <label htmlFor="rememberMe" className="mr-4">Remember me</label>
                    <span className="ml-auto mr-4 cursor-pointer text-blue-500 underline">Forgot your password?</span>
                </div>
                <button className="bg-lime-500 text-white px-3 py-2 rounded-lg w-full mb-4">Sign in</button>
                <div className="flex justify-center space-x-2 mb-4">
                    <button className="bg-slate-100 text-black px-4 py-2 rounded-lg flex items-center justify-center w-full">
                        <img src={googleLogo} alt="Google logo" className="w-6 h-6 mr-2" />
                        Sign in with Google
                    </button>
                    <button className="bg-slate-100 text-black px-4 py-2 rounded-lg flex items-center justify-center w-full">
                        <img src={appleLogo} alt="Apple logo" className="w-6 h-6 mr-2" />
                        Sign in with Apple
                    </button>
                </div>
                <div className="text-center">
                    <div>Don't have an account? <span className="text-lime-500 cursor-pointer underline">Sign up now</span></div>
                </div>
            </div>
        </div>
    );
}

export default Login;
