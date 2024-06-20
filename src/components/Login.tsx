import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '../services/apiService';
import googleLogo from "../assets/images/google.png";
import appleLogo from "../assets/images/Apple.png";

const schema = z.object({
  emailOrPhone: z.string().min(1, 'Email or phone number is required'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormInputs = z.infer<typeof schema>;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setLoading(true);
    setError('');

    try {
      const response = await login(data.emailOrPhone, data.password);
      console.log('Login successful:', response);
      // Handle successful login (e.g., save token, redirect)
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Login to your account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="emailOrPhone" className="block mb-1">Email or phone number</label>
            <input
              type="text"
              id="emailOrPhone"
              placeholder="Enter your email or phone number"
              className="border rounded px-3 py-2 w-full"
              {...register('emailOrPhone')}
            />
            {errors.emailOrPhone && <p className="text-red-500">{errors.emailOrPhone.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="border rounded px-3 py-2 w-full"
              {...register('password')}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="mr-4">Remember me</label>
            <span className="ml-auto mr-4 cursor-pointer text-blue-500 underline">Forgot your password?</span>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="bg-lime-500 text-white px-3 py-2 rounded-lg w-full mb-4"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Sign in'}
          </button>
        </form>
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
