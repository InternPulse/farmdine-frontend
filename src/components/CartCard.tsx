interface Props {
	image: string
	discountTag: string
	heading: string
	price: string
	discountPrice: string
}

const CartCard = ({
	image,
	discountPrice,
	discountTag,
	price,
	heading,
}: Props) => {
	return (
		<div className='flex gap-x-4 mt-[30px]  space-y-4'>
			<div className='relative h-[230px] w-[248px] bg-[#F6F6F6] rounded-md drop-shadow'>
				<div className='bg-[#DBEACB] rounded-lg absolute top-4 right-2 font-sans font-semibold text-center px-[10px] py-[5px]'>
					{discountTag}
				</div>
				<div className='flex justify-center items-center h-full w-[100%]'>
					<img
						className='mix-blend-darken w-[50%] object-contain'
						src={`/public/${image}`}
						alt='product'
					/>
				</div>
			</div>

			<div>
				<h1 className='font-semibold font-sans text-3xl'>{heading}</h1>
				<h2 className='font-semibold text-xl mt-2 mb-4'>
					{price}{" "}
					<span className='text text-[#6F6F6F] line-through text-lg'>
						{discountPrice}
					</span>
				</h2>
				<div className='flex gap-x-2 mb-10'>
					<h1 className='font-semibold text-lg'>Qty</h1>
					<button className='bg-white border-black border w-6 h-full rounded-lg'>
						-
					</button>
					<div>1</div>
					<button className='bg-[#8BC34A] border border-white text-white w-6 h-full rounded-lg'>
						+
					</button>
				</div>
				<button className='px-4 py-1 rounded-2xl font-semibold text-sm bg-[#8BC34A]'>
					REMOVE
				</button>
			</div>
		</div>
	)
}

export default CartCard
