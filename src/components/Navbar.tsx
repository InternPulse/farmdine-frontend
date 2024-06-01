import navLogo1 from "../assets/nav-logo1.jpg"

const Navbar = () => {
	return (
		<div className='p-4 flex-shrink-0'>
			<nav className='flex items-center justify-between h-[71px]'>
				<img
					src={navLogo1}
					alt='Company Logo'
					className='rounded-full ml-[60px]'
				/>
				<div className='flex justify-center space-x-8'>
					<a
						href='/'
						className='text-[#8bc34a] no-underline mr-12 leading-[1.6] hover:text-[#8bc34a]'
					>
						Home
					</a>
					<a
						href='/'
						className='text-[#1e1e1e] no-underline mr-16 leading-[1.6] hover:text-[#8bc34a]'
					>
						Product Listing
					</a>
					<a
						href='/'
						className='text-[#1e1e1e] no-underline mr-16 leading-[1.6] hover:text-[#8bc34a]'
					>
						Contact
					</a>
					<a
						href='/'
						className='text-[#1e1e1e] no-underline mr-16 leading-[1.6] hover:text-[#8bc34a]'
					>
						Help
					</a>
				</div>
				<div className='flex items-center space-x-4'>
					<a
						href='/'
						className='text-[#1e1e1e] no-underline hover:text-[#8bc34a]'
					>
						Log in
					</a>
					<a
						href='/'
						className='bg-[#8bc34a] text-[#1e1e1e] px-5 py-2 rounded cursor-pointer no-underline'
					>
						Sign Up
					</a>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
