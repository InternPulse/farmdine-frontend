import CardData from "../CardData"
import icon from "../assets/search-normal.svg"
import HelpPageCard from "../components/HelpPageCard"
import lady from "../assets/help-page-lady.png"
import Subscribe from "../components/Subscribe"

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

			<Subscribe />
		</div>
	)
}

export default HelpPage
