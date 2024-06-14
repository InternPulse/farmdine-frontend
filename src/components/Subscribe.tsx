const Subscribe = () => {
	return (
		<div>
			<div className='relative overflow-hidden max-w-4xl py-40 flex justify-center flex-col items-center mx-auto'>
				
			<div className='relative rounded-2xl border flex mx-auto justify-between items-center px-16 py-5 w-full'>
				<img src="../images/subscribebg.png" alt="subscribe background image" className="absolute inset-0 object-cover w-full h-full z-0 rounded-2xl" />
				<h1 className='relative z-10 text-white font-semibold text-xl'>
					Can't find the answer you are looking for?
				</h1>
				<button className='relative z-10 bg-white text-lime-600 rounded-xl text-base font-medium px-12 py-5'>
					Get In Touch!
				</button>
			</div>
				<h1 className='text-4xl font-bold text-center mt-12'>
					We are dedicated to fostering the expansion of food enterprises, one
					purchase at a time.
				</h1>
				<button className='bg-lime-500 text-lg font-medium mt-10 px-12 py-5 rounded-xl'>
					Sign up
				</button>
			</div>
		</div>
	)
}

export default Subscribe
