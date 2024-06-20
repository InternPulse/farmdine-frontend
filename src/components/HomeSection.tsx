import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import arrow from "../assets/arrow-right.png"
import homeSection from "../assets/HomeSection.jpg"

const HomeSection = () => {
	useEffect(() => {
			const handleScroll = () => {
			const elements = document.querySelectorAll('.left-slide-in, .right-slide-in');
			elements.forEach(el => {
			const rect = el.getBoundingClientRect();
			if (rect.top < window.innerHeight && rect.bottom > 0) {
				if (el.classList.contains('left-slide-in')) {
					el.classList.add('animate-slideInLeft');
				} else if (el.classList.contains('right-slide-in')) {
					el.classList.add('animate-slideInRight');
				}
			}
		});
	};

	window.addEventListener('scroll', handleScroll);
	handleScroll(); 
	return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navigate = useNavigate();

    const changeToSignup = () => {
        navigate('/signup');
    };

	return (
		<div className='container mx-auto pb-9 mb-20'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 px-4 md:px-24'>
				<div className='pt-16 md:pt-64 left-slide-in animate__animated animate__fadeInLeft'>
					<h1 className='text-xl md:text-4xl font-bold'>
						<span className='bg-gradient-to-r from-lime-300 via-lime-500 to-lime-700 inline-block text-transparent bg-clip-text pr-2'>
							FarmDine
						</span>
						links food entrepreneurs with farmers worldwide, fostering global
						collaborations.
					</h1>

					<button
						onClick={changeToSignup}
						className='flex items-center align-baseline my-7 px-2.5 py-2.5 bg-lime-500 hover:bg-lime-400 gap-2 text-black text-sm font-medium rounded-lg'
					>
						Get started <img src={arrow} alt='Arrow' className='w-6 h-6' />
					</button>
				</div>
				<div className='right-slide-in animate__animated animate__fadeInRight'>
					<img src={homeSection} alt='Home Section' className='mt-10 md:mt-40' />
				</div>
			</div>
		</div>
	);
};

export default HomeSection
