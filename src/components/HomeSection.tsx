import arrow from "../assets/arrow-right.png"
import homeSection from "../assets/HomeSection.jpg"

const HomeSection = () => {
	return (
		<div className='container mx-auto pb-9'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-20 px-24'>
				<div className='pt-64 left-slide-in animate__animated animate__fadeInLeft'>
					<h1 className='text-4xl font-bold'>
						<span className='bg-gradient-to-r from-lime-300 via-lime-500 to-lime-700 inline-block text-transparent bg-clip-text pr-2'>
							FarmDine
						</span>
						links food entrepreneurs with farmers worldwide, fostering global
						collaborations.
					</h1>

					<button className='flex items-center align-baseline my-7 px-2.5 py-2.5 bg-lime-500 hover:bg-lime-400 gap-2 text-black text-sm font-medium rounded-lg'>
						Get started <img src={arrow} alt='' className='w-6 h-6' />
					</button>
				</div>
				<div className="right-slide-in animate__animated animate__fadeInRight">
					<img src={homeSection} alt='homeSection Image' className='mt-40' />
				</div>
			</div>
		</div>
	)
}

export default HomeSection
