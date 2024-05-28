import React, { useState } from 'react';
import product1 from '../assets/product1.PNG';
import product2 from '../assets/product2.PNG';
import product3 from '../assets/product3.PNG';
import product4 from '../assets/product4.PNG';

const ProductSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <section id="product-section" className="text-center py-12 relative">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-18 h-18 border-2 border-lime-100 bg-lime-100 rounded-full flex items-center justify-center p-2">
            <h1 className="text-lg font-bold text-green-500">Products</h1>
          </div>
        </div>
      </div>
      <p className="text-xl mb-8">Providing the operational support your food business needs</p>
      <div className="flex justify-center flex-wrap gap-6">
        <div className="bg-gray-200 p-6 rounded-lg w-40 text-center hover:scale-105 transition-transform">
          <img src={product1} alt="Product 1" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-200 p-6 rounded-lg w-40 text-center hover:scale-105 transition-transform">
          <img src={product2} alt="Product 2" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-200 p-6 rounded-lg w-40 text-center hover:scale-105 transition-transform">
          <img src={product3} alt="Product 3" className="w-full h-full object-cover" />
        </div>
        <div className="bg-gray-200 p-6 rounded-lg w-40 text-center hover:scale-105 transition-transform">
          <img src={product4} alt="Product 4" className="w-full h-full object-cover" />
        </div>
      </div>
      {showMore && (
        <div className="flex justify-center flex-wrap gap-6 mt-8">
          {/* Additional products go here */}
        </div>
      )}
      <button onClick={handleShowMore} className="bg-lime-500 text-white px-4 py-2 rounded-lg mt-4 absolute bottom-0 right-0">
        Show More
      </button>
    </section>
  );
};

export default ProductSection;
