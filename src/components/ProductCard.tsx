// ProductCard.tsx

import React from 'react';
import Star from '../assets/Star.png';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className='py-4'>
      <div className="p-4 bg-white shadow-md rounded-md">
        <p className='bg-lime-100 inline-block py-1 pl-4 rounded-lg text-xs ml-28 w-20'>20% off</p>
        <img src={image} className='w-50 h-50' alt={`${name} image`} />
        <div>
          <p className='font-semibold text-slate-700'>{name}</p>
          <div className='flex text-sm mb-1'>
            <p>${price.toFixed(2)}</p> {/* Display price with 2 decimal places */}
            <p className="text-slate-500 line-through ml-2">$70.00</p>
          </div>
          <div className='flex py-1'>
            <img src={Star} alt="star icon" className='w-3 h-3'/>
            <img src={Star} alt="star icon" className='w-3 h-3'/>
            <img src={Star} alt="star icon" className='w-3 h-3'/>
            <img src={Star} alt="star icon" className='w-3 h-3'/>
            <img src={Star} alt="star icon" className='w-3 h-3'/>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
