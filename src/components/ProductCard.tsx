import Star from '../assets/Star.png'
import Carbbage from '../assets/images/cabbage.jpg'

const ProductCard: React.FC = () => {


  return (
    <div className=' py-4'>
        <div className="p-4 bg-white shadow-md rounded-md">
            <p className='bg-lime-100 inline-block py-1 pl-4 rounded-lg text-xs ml-28 w-20'>20% off</p>
            <img src={Carbbage} className='w-50 h-50' alt="fruit/vegetable image" />
            <div>
                <p className='font-semibold text-slate-700'>Cabbage</p>
                <div className='flex text-sm mb-1'>
                    <p>$50.00</p>
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
