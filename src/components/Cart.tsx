import logo from "../assets/farm-dine-logo.svg"
import arrow from "../assets/arrow-left.svg"
import CartData from "../CartData"
import CartCard from "./CartCard"

const Cart = () => {
	return (
		<div className='ml-[64px] mt-[34px] bg-[#FFF] '>
			<div className='h-[48px] w-[48px] mb-4'>
				<img src={logo} alt='logo' />
			</div>
			<a className='flex  space-x-1 content-center' href='#'>
				<img src={arrow} alt='' />
				<h1 className='font-sans font-semibold text-2xl'>My Cart</h1>
			</a>
			{CartData.map((cart) => (
				<CartCard
					key={cart.id}
					image={cart.image}
					discountTag={cart.discountTag}
					discountPrice={cart.discountPrice}
					heading={cart.heading}
					price={cart.price}
				/>
			))}
		</div>
	)
}

export default Cart
