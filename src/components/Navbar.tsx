import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import navLogo1 from "../assets/nav-logo1.jpg";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='p-4 flex-shrink-0'>
			<nav className='flex items-center justify-between h-[71px] m-0 px-3'>
				<img
					src={navLogo1}
					alt='Company Logo'
					
					className='rounded-full'
				/>
				<div className='hidden md:flex justify-center space-x-8'>
					<Link
						to='/'
						className='text-[#8bc34a] no-underline mr-12 leading-[1.6] hover:text-[#8bc34a]'
					>
						Home
					</Link>
					<Link
						to='/productListing'
						className='text-[#1e1e1e] no-underline mr-16 leading-[1.6] hover:text-[#8bc34a]'
					>
						Product Listing
					</Link>
					<Link
						to='/contact'
						className='text-[#1e1e1e] no-underline mr-16 leading-[1.6] hover:text-[#8bc34a]'
					>
						Contact
					</Link>
					<Link
						to='/help'
						className='text-[#1e1e1e] no-underline mr-16 leading-[1.6] hover:text-[#8bc34a]'
					>
						Help
					</Link>
				</div>
				<div className='hidden md:flex items-center space-x-4'>
					<Link
						to='/login'
						className='text-[#1e1e1e] no-underline hover:text-[#8bc34a]'
					>
						Log in
					</Link>
					<Link
						to='/signup'
						className='bg-[#8bc34a] text-[#1e1e1e] px-5 py-2 rounded cursor-pointer no-underline'
					>
						Sign Up
					</Link>
				</div>
				<div className='md:hidden flex items-center'>
					<button onClick={toggleMenu} className='focus:outline-none'>
						{isOpen ? <FaTimes size={38} className="text-[#b3dd6e]" /> : <FaBars size={38} className="text-[#b3dd6e]"/>}
					</button>
				</div>
			</nav>
			{isOpen && (
				<div className='md:hidden flex flex-col items-center space-y-4 mt-4'>
					<Link
						to='/'
						className='text-[#8bc34a] no-underline hover:text-[#8bc34a]'
						onClick={toggleMenu}
					>
						Home
					</Link>
					<Link
						to='/productListing'
						className='text-[#1e1e1e] no-underline hover:text-[#8bc34a]'
						onClick={toggleMenu}
					>
						Product Listing
					</Link>
					<Link
						to='/contact'
						className='text-[#1e1e1e] no-underline hover:text-[#8bc34a]'
						onClick={toggleMenu}
					>
						Contact
					</Link>
					<Link
						to='/help'
						className='text-[#1e1e1e] no-underline hover:text-[#8bc34a]'
						onClick={toggleMenu}
					>
						Help
					</Link>
					<Link
						to='/login'
						className='text-[#1e1e1e] no-underline hover:text-[#8bc34a]'
						onClick={toggleMenu}
					>
						Log in
					</Link>
					<Link
						to='/signup'
						className='bg-[#8bc34a] text-[#1e1e1e] px-5 py-2 rounded cursor-pointer no-underline'
						onClick={toggleMenu}
					>
						Sign Up
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
