import arrow from "../assets/arrow-right.png"
import homeSection from "../assets/HomeSection.png"

const HomeSection = () => {
	return (
		<div className='container mx-auto pb-9'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				<div className='pt-64 ml-20'>
					<h1 className='text-4xl font-bold'>
						<span className='bg-gradient-to-r from-green0 via-green47 to-green100 inline-block text-transparent bg-clip-text pr-2'>
							FarmDine
						</span>
						links food entrepreneurs with farmers worldwide, fostering global
						collaborations.
					</h1>

					<button className='flex items-center align-baseline my-7 px-2.5 py-2.5 bg-green0 gap-2 text-black text-sm font-medium rounded-lg'>
						Get started <img src={arrow} alt='' className='w-6 h-6' />
					</button>
				</div>
				<div>
					<img src={homeSection} alt='' className='mt-40' />
				</div>
			</div>
		</div>
	)
}

export default HomeSection
