import logo from "../assets/farm-dine-logo.svg"

const SignUpSelectionPage = () => {
	return (
		<>
			<div className='absolute'>
				<img
					src={logo}
					alt='FarmDine logo'
					className='w-16 h-16 relative top-5 left-16'
				/>
			</div>

			<div className='py-44 mx-auto min-h-svh bg-gray-300 flex justify-center'>
				<div className=' max-w-3xl items-center border border-solid px-20 py-28 border-black rounded-3xl'>
					<div>
						<h1 className='text-center text-4xl text-green-500 font-sans font-semibold pb-5'>
							Farm<span className='text-black'>dine</span>
						</h1>
						<form className='bg-white rounded-2xl shadow-md px-20 pb-24'>
							<h1 className='text-center text-2xl font-semibold pt-20 pb-10'>
								Choose your sign up method
							</h1>
							<div className='font-openSans font-semibold text-lg'>
								<button className='block pl-7 py-5 pr-56 mb-6 rounded-xl border shadow-sm'>
									Sign up as a customer
								</button>
								<button className='block pl-6 pr-60 py-5 rounded-xl border shadow-sm'>
									Sign up as a supplier
								</button>
							</div>
						</form>
						<h1 className='text-center font-openSans font-semibold text-gray-400 pt-10'>
							Already have an account?
							<span>
								<a href='#' className='text-green-500 pl-1'>
									Log in
								</a>
							</span>
						</h1>
					</div>
				</div>
			</div>
		</>
	)
}

export default SignUpSelectionPage
