import React from "react"
import icon from "../assets/icon-question-mark.svg"
import logo from "../assets/farm-dine-logo.svg"

const SignUpPage: React.FC = () => {
	return (
		<>
			<div className='absolute'>
				<img
					src={logo}
					alt='FarmDine logo'
					className='w-24 h-24 relative top-5 left-16'
				/>
			</div>

			<div className='px-signup-padding py-40 min-h-svh bg-signup-form-background '>
				<form className='bg-white  rounded-lg shadow-md font-openSans'>
					<div className='text-center text-sm mb-4 pt-4'>
						<h1 className='text-form-gray'>
							Sign up as supplier
							<span>
								<a
									href='#'
									className='text-green0 underline decoration-green0 ml-2'
								>
									Change
								</a>
							</span>
						</h1>
					</div>

					<hr className='text-gray-200 border ' />

					<div className='p-8 text-base'>
						<div className='flex items-center gap-6 mb-4'>
							<div className='basis-1/2'>
								<label
									className='block text-gray-700 text-sm mb-2'
									htmlFor='first-name'
								>
									First Name
								</label>
								<input
									type='text'
									id='first-name'
									placeholder='First Name'
									className='w-full h-12 px-3 py-2 border rounded-lg'
									required
								/>
							</div>

							<div className='basis-1/2'>
								<label
									className='block text-gray-700 text-sm mb-2'
									htmlFor='last-name'
								>
									Last Name
								</label>
								<input
									type='text'
									id='last-name'
									placeholder='Last Name'
									className='w-full h-12 px-3 py-2 border rounded-lg'
									required
								/>
							</div>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm mb-2'
								htmlFor='register'
							>
								Registered Business Name
							</label>

							<div className='relative'>
								<img
									src={icon}
									alt='Icon'
									className='absolute right-5 top-1/2 -translate-y-1/2'
								/>
								<input
									type='text'
									id='register'
									placeholder='Registered Business Name'
									className='w-full px-3 h-12 py-2 border rounded-lg'
									required
								/>
							</div>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm mb-2'
								htmlFor='business'
							>
								Business Name (If different from Registered Business Name)
							</label>

							<input
								type='text'
								id='business'
								placeholder='Business Name'
								className='w-full px-3 h-12 py-2 border rounded-lg'
								required
							/>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm mb-2'
								htmlFor='supply-category'
							>
								Supply Category
							</label>

							<select
								id='supply-category'
								title='supply-category'
								className='block w-full border text-gray-400 rounded-lg  py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-md'
							>
								<option value=''>Select Supply Category</option>
							</select>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm mb-2'
								htmlFor='business-address'
							>
								Business Address
							</label>

							<input
								type='text'
								id='business-address'
								placeholder='Supplier Address'
								className='w-full px-3 h-12 py-2 border rounded-lg'
								required
							/>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm  mb-2'
								htmlFor='email'
							>
								Email
							</label>

							<input
								type='email'
								id='email'
								placeholder='Email'
								className='w-full px-3 h-12 py-2 border rounded-lg'
								required
							/>
						</div>

						<div className='flex items-center gap-2 mb-4'>
							<div>
								<select
									id='co'
									title='Co'
									className='block w-full border text-gray-400 rounded-lg py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-md'
								>
									<option value=''>Co</option>
								</select>
							</div>

							<input
								id='phone-number'
								type='number'
								placeholder='Phone Number'
								className=' grow h-12 px-3 py-2 border rounded-lg'
								required
							/>
						</div>

						<div className='flex items-center gap-6 mb-4'>
							<div className='basis-1/2'>
								<label
									className='block text-gray-700 text-sm mb-2'
									htmlFor='country'
								>
									Country
								</label>

								<select
									id='country'
									title='country'
									className='block w-full border text-gray-400 rounded-lg  py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-md'
								>
									<option value=''>Select Country</option>
								</select>
							</div>

							<div className='basis-1/2'>
								<label
									className='block text-gray-700 text-sm mb-2'
									htmlFor='state'
								>
									State
								</label>

								<select
									id='state'
									title='state'
									className='w-full border text-gray-400 rounded-lg py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-md'
								>
									<option value=''>Select State</option>
								</select>
							</div>
						</div>

						<div className='flex items-center gap-6 mb-4'>
							<div className='basis-1/2'>
								<label
									className='block text-gray-700 text-sm mb-2'
									htmlFor='city'
								>
									City
								</label>

								<select
									id='city'
									title='city'
									className='block w-full border text-gray-400 rounded-lg  py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-md'
								>
									<option value=''>Select City</option>
								</select>
							</div>

							<div className='basis-1/2'>
								<label
									className='block text-gray-700 text-sm mb-2'
									htmlFor='vicinity'
								>
									Vicinity
								</label>

								<input
									type='text'
									id='vicinity'
									placeholder='Vicinity'
									className='h-12 px-3 py-2 w-full border rounded-lg'
									required
								/>
							</div>
						</div>

						<div className='mb-4'>
							<label
								className='block text-gray-700 text-sm mb-2'
								htmlFor='password'
							>
								Password
							</label>

							<input
								type='password'
								id='password'
								placeholder='Password'
								className='h-12 px-3 py-2 w-full border rounded-lg'
								required
							/>
						</div>

						<div className='mb-12 flex gap-2 justify-start'>
							<input
								className='w-4'
								placeholder='checkbox'
								type='checkbox'
								id='checkbox'
							/>
							<span className='text-sm'>I agree to the terms & conditions</span>
						</div>

						<div className='mb-4'>
							<button
								type='submit'
								className='w-full bg-form-gray opacity-60 font-semibold text-white py-2 px-4 rounded-lg hover:bg-gray-500'
							>
								Sign in
							</button>
						</div>
						<div className='mb-4 text-center text-sm'>
							<h1>
								Already have an account?
								<span className='ml-2'>
									<a href='#' className='text-green0'>
										Log in
									</a>
								</span>
							</h1>
						</div>
					</div>
				</form>
			</div>
		</>
	)
}

export default SignUpPage
