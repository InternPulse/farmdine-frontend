import Star from '../assets/Star.png'
import Carbbage from '../assets/images/cabbage.jpg'

const ProductCard: React.FC = () => {


  return (
    <div className='w-full py-4'>
        <div className="p-4 w-1/4 bg-white shadow-md rounded-md">
        <p className='bg-lime-100 inline-block py-1 px-2 rounded-lg text-sm ml-48'>20% off</p>
        <img src={Carbbage} className='w-50 h-50' alt="fruit/vegetable image" />
        <div>
            <p>Cabbage</p>
            <div className='flex'>
            <p>$50.00</p>
            <p className="text-slate-500 line-through ml-2">$70.00</p>
            </div>
            <div className='flex'>
            <img src={Star} alt="star icon" className='w-4 h-4'/>
            <img src={Star} alt="star icon" className='w-4 h-4'/>
            <img src={Star} alt="star icon" className='w-4 h-4'/>
            <img src={Star} alt="star icon" className='w-4 h-4'/>
            <img src={Star} alt="star icon" className='w-4 h-4'/>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ProductCard;
