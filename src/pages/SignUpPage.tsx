// import icon from "../assets/icon-question-mark.svg"
// import logo from "../assets/farm-dine-logo.svg"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js"
import { GetCountries, GetState, GetCity } from "react-country-state-city"
// import GetState from "react-country-state-city"
// import GetCity from "react-country-state-city"
import { useEffect, useState } from "react"
import axios from "axios"

const SupplyCategories = ["Wholesales", "Retails"] as const

const schema = z.object({
	firstName: z
		.string()
		.min(3, { message: "Name must be at least 3 characters" }),
	lastName: z
		.string()
		.min(3, { message: "Last name must be at least 3 characters" }),
	businessName: z
		.string()
		.min(3, { message: "Business name must be at least 3 characters" }),
	business: z.string().min(3).optional().or(z.literal("")),
	supplyCategory: z.enum(SupplyCategories, {
		errorMap: () => ({ message: "Category is required" }),
	}),
	phoneCode: z.string().min(2, { message: "Select Code" }),
	phoneNumber: z
		.number({ invalid_type_error: "Enter a valid phone number" })
		.min(6),
	email: z.string().min(6, { message: "Email is required" }).email({
		message: "Must be a valid email",
	}),
	businessAddress: z
		.string()
		.min(10, { message: "Enter a valid business address" }),
	country: z.string().min(1, { message: "Select a country" }),
	state: z.string().min(1, { message: "Select a state" }),
	city: z.string().min(1, { message: "Select a city" }),
	vicinity: z.string().min(3, { message: "Enter a vicinity" }),
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 characters" }),
	checkbox: z.literal(true, {
		errorMap: () => ({ message: "You must accept Terms and Conditions" }),
	}),
})

type FormData = z.infer<typeof schema>

const SignUpPage = () => {
	const [countryid, setCountryid] = useState(0)
	const [stateid, setStateid] = useState(0)
	const [cityid, setCityid] = useState(0)

	const [countriesList, setCountriesList] = useState<any[]>([])
	const [stateList, setStateList] = useState<any[]>([])
	const [cityList, setCityList] = useState<any[]>([])

	useEffect(() => {
		GetCountries().then((result: any) => {
			setCountriesList(result)
		})
	}, [])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) })

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		try {
			await axios.post(
				"https://farmdine-backend.onrender.com/api/v1/accounts/register-restaurant",
				data
			)
		} catch (error) {
			console.log(error)
			//todo
		}
	}

	return (
		<>
			{/* <div className='absolute'>
				<img
					src={logo}
					alt='FarmDine logo'
					className='w-16 h-16 relative top-5 left-16'
				/>
			</div> */}

			<div className='flex justify-center mx-auto py-40 min-h-svh bg-gray-300 '>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='bg-white w-5/12  rounded-lg shadow-md font-openSans'
				>
					<div className='text-center text-sm mb-4 pt-4'>
						<h1 className='text-gray-400'>
							Sign up as supplier
							<span>
								<a
									href='#'
									className='text-green0 underline decoration-green-500 ml-2'
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
									{...register("firstName")}
								/>
								{errors.firstName && (
									<p className='text-xs text-red-600'>
										{errors.firstName.message}
									</p>
								)}
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
									{...register("lastName")}
								/>
								{errors.lastName && (
									<p className='text-xs text-red-600'>
										{errors.lastName.message}
									</p>
								)}
							</div>
						</div>

						<div className='mb-4'>
							<label
								className='block text-black text-sm mb-2'
								htmlFor='business-name'
							>
								Registered Business Name
							</label>

							<div className='relative'>
								{/* <img
									src={icon}
									alt='Icon'
									className='absolute right-5 top-1/2 -translate-y-1/2'
								/> */}
								<input
									type='text'
									id='business-name'
									placeholder='Registered Business Name'
									className='w-full px-3 h-12 py-2 border rounded-lg'
									{...register("businessName")}
								/>
								{errors.businessName && (
									<p className='text-xs text-red-600'>
										{errors.businessName.message}
									</p>
								)}
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
								{...register("business")}
							/>
							{errors.business && (
								<p className='text-xs text-red-600'>
									{errors.business.message}
								</p>
							)}
						</div>

						<div className='mb-4'>
							<label
								className='block text-black text-sm mb-2'
								htmlFor='supply-category'
							>
								Supply Category
							</label>

							<select
								{...register("supplyCategory")}
								id='supply-category'
								title='supply-category'
								className='block w-full border text-black rounded-lg  py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-md'
							>
								<option value=''>Select Supply Category</option>
								{SupplyCategories.map((category) => (
									<option value={category} key={category}>
										{category}
									</option>
								))}
							</select>
							{errors.supplyCategory && (
								<p className='text-xs text-red-600'>
									{errors.supplyCategory.message}
								</p>
							)}
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
								{...register("businessAddress")}
							/>
							{errors.businessAddress && (
								<p className='text-xs text-red-600'>
									{errors.businessAddress.message}
								</p>
							)}
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
								{...register("email")}
							/>
							{errors.email && (
								<p className='text-xs text-red-600'>{errors.email.message}</p>
							)}
						</div>

						<div className='flex items-center gap-2 mb-4'>
							<div className='basis-1/5'>
								<select
									{...register("phoneCode")}
									id='co'
									title='Co'
									className='block w-full border text-slate-950 rounded-lg py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-xs'
								>
									<option value=''>Co</option>
									{countriesList.map((item, index) => (
										<option key={index} value={item.phone_code}>
											{item.iso3} +{item.phone_code}
										</option>
									))}
								</select>
								{errors.phoneCode && (
									<p className='text-xs text-red-600'>
										{errors.phoneCode.message}
									</p>
								)}
							</div>

							<div className='grow'>
								<input
									className='w-full border rounded-lg px-3 h-12 py-2'
									id='phone-number'
									type='number'
									placeholder='Phone Number'
									{...register("phoneNumber", { valueAsNumber: true })}
								/>
								{errors.phoneNumber && (
									<p className='text-xs text-red-600'>
										{errors.phoneNumber.message}
									</p>
								)}
							</div>
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
									{...register("country", {
										onChange: (e) => {
											const country = countriesList[e.target.value]
											setCountryid(country.id)
											GetState(country.id).then((result: any) => {
												setStateList(result)
											})
										},
									})}
									id='country'
									title='country'
									className='block w-full border text-black rounded-lg  py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-md'
								>
									<option value=''>Select Country</option>
									{countriesList.map((item, index) => (
										<option key={index} value={index}>
											{item.name}
										</option>
									))}
								</select>
								{errors.country && (
									<p className='text-xs text-red-600'>
										{errors.country.message}
									</p>
								)}
							</div>

							<div className='basis-1/2'>
								<label
									className='block text-gray-700 text-sm mb-2'
									htmlFor='state'
								>
									State
								</label>
								<div>
									<select
										{...register("state", {
											onChange: (e) => {
												const state = stateList[e.target.value]
												setStateid(state.id)
												GetCity(countryid, state.id).then((result: any) => {
													setCityList(result)
												})
											},
										})}
										id='state'
										title='state'
										className='w-full border text-black rounded-lg py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-md'
									>
										<option value=''>Select State</option>
										{stateList.map((item, index) => (
											<option key={index} value={stateid}>
												{item.name}
											</option>
										))}
									</select>
									{errors.state && (
										<p className='text-xs text-red-600'>
											{errors.state.message}
										</p>
									)}
								</div>
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
									{...register("city", {
										onChange: (e) => {
											const city = cityList[e.target.value]
											setCityid(city.id)
										},
									})}
									id='city'
									title='city'
									className='block w-full border text-black rounded-lg  py-2 px-3 h-12 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700 text-md'
								>
									<option value=''>Select City</option>
									{cityList.map((item, index) => (
										<option key={index} value={cityid}>
											{item.name}
										</option>
									))}
								</select>
								{errors.city && (
									<p className='text-xs text-red-600'>{errors.city.message}</p>
								)}
							</div>

							<div className='basis-1/2'>
								<label
									className='block text-gray-700 text-sm mb-2'
									htmlFor='vicinity'
								>
									Vicinity
								</label>

								<input
									{...register("vicinity")}
									type='text'
									id='vicinity'
									placeholder='Vicinity'
									className='h-12 px-3 py-2 w-full border rounded-lg'
								/>
								{errors.vicinity && (
									<p className='text-xs text-red-600'>
										{errors.vicinity.message}
									</p>
								)}
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
								{...register("password")}
							/>
							{errors.password && (
								<p className='text-xs text-red-600'>
									{errors.password.message}
								</p>
							)}
						</div>

						<div className='mb-12'>
							<div className='flex gap-2 justify-start'>
								<input
									className='w-4'
									placeholder='checkbox'
									type='checkbox'
									id='checkbox'
									{...register("checkbox")}
								/>
								<span className='text-sm'>
									I agree to the terms & conditions
								</span>
							</div>

							{errors.checkbox && (
								<p className='text-xs text-red-600'>
									{errors.checkbox.message}
								</p>
							)}
						</div>

						<div className='mb-4'>
							<button
								type='submit'
								className='w-full bg-[#A8A8A8] opacity-60 font-semibold text-white py-2 px-4 rounded-lg hover:bg-gray-500'
							>
								Sign in
							</button>
						</div>

						<div className='mb-4 text-center text-sm'>
							<h1>
								Already have an account?
								<span className='ml-2'>
									<a href='/login' className='text-green-500'>
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
