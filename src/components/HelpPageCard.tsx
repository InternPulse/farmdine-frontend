import arrow from "../assets/arrow-right.svg"

interface Props {
	title: string
	cardText: string
	image: string
}

const HelpPageCard = ({ title, cardText, image }: Props) => {
	return (
		<div className='bg-white hover:bg-green0 border rounded-xl max-w-72'>
			<div className='flex flex-col text-center justify-center mx-7 my-8 items-center'>
				<div className='flex justify-center items-center border shadow-sm border-gray-400 w-11 h-11 bg-gray-50 rounded-3xl font-openSans'>
					<img src={`/public/icons/${image}`} alt={image} />
				</div>
				<div className='font-semibold text-xl pt-4'>{title}</div>
				<div className='pt-5 pb-6'>{cardText}</div>
				<div className='font-semibold text-lg'>
					<a href='#'>
						Learn More <img src={arrow} alt='arrow' className='inline' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default HelpPageCard
