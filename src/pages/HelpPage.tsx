import CardData from "../CardData"
import icon from "../assets/search-normal.svg"
import HelpPageCard from "../components/HelpPageCard"
import lady from "../assets/help-page-lady.png"

const HelpPage = () => {
	return (
		<div className='bg-signup-form-background w-full h-full'>
			<div className='flex-col text-center max-w-3xl mx-auto justify-center items-center'>
				<div className='text-4xl font-medium font-sans pb-6'>Help Center</div>

				<div className='font-openSans text-xl font-normal pb-6'>
					Explore our Farm<span className='text-green-500'>dine</span> Help
					Center for answers to your questions and support with your experience.
				</div>

				<div className='relative mb-16'>
					<img
						src={icon}
						alt='search'
						className='absolute left-5 top-1/2 -translate-y-1/2'
					/>
					<input
						placeholder='Search your keyword'
						type='search'
						className='border w-full py-6 rounded-lg pl-14'
					/>
				</div>
			</div>

			<div className='max-w-full pb-20'>
				<div className='flex flex-wrap gap-x-5 gap-y-12 justify-center'>
					{CardData.map((card) => (
						<HelpPageCard
							title={card.title}
							cardText={card.cardText}
							image={card.img}
						/>
					))}
				</div>
			</div>

			<div className='max-w-5xl mx-auto pb-20'>
				<div className='flex justify-between items-center gap-40'>
					<div className='flex-col max-w-lg font-sans'>
						<h1 className='text-4xl font-medium mb-6'>
							Need Personal Assistance?
						</h1>
						<p className='text-xl mb-6'>
							If you couldn't find information you need, our support team is
							ready to assist you. Submit a ticket, and we will get back to you
							as soon as possible.
						</p>
						<button
							type='submit'
							className='bg-green-500 px-5 py-4 text-lg font-semibold rounded-lg'
						>
							Submit a Ticket
						</button>
					</div>

					<div className='max-w-lg'>
						<img src={lady} alt='lady' />
					</div>
				</div>
			</div>

			<div className='max-w-4xl mt-40 flex justify-center flex-col items-center mx-auto pb-72'>
				<div className='bg-green-500 rounded-2xl border flex mx-auto justify-between items-center px-16 py-5 w-full'>
					<h1 className='text-white font-semibold text-xl'>
						Can't find the answer you are looking for?
					</h1>
					<button className='bg-white text-green-600 rounded-xl text-base font-medium px-12 py-5'>
						Get In Touch!
					</button>
				</div>
				<h1 className='text-4xl font-bold text-center mt-12'>
					We are dedicated to fostering the expansion of food enterprises, one
					purchase at a time.
				</h1>
				<button className='bg-green-500 text-lg font-medium mt-10 px-12 py-5 rounded-xl'>
					Sign up
				</button>
			</div>
		</div>
	)
}

export default HelpPage
