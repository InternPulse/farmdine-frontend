import React, { useState } from 'react';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';

const products = [
  { id: 1, image: product1 },
  { id: 2, image: product2 },
  { id: 3, image: product3 },
  { id: 4, image: product4 },
  // Add more products here if needed
];

const ProductSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <section id="product-section" className="text-center py-12">
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="w-18 h-18 border-2 border-lime-100 bg-lime-100 rounded-full flex items-center justify-center p-2">
            <h1 className="text-lg font-bold text-green-500">Products</h1>
          </div>
        </div>
      </div>
      <p className="text-xl mb-8">Providing the operational support your food business needs</p>
      <div className="flex justify-center flex-wrap gap-6">
        {products.map((product, index) => (
          <div key={product.id} className="bg-gray-200 p-6 rounded-lg w-40 text-center hover:scale-105 transition-transform">
            <img src={product.image} alt={`Product ${product.id}`} className="w-full h-full object-cover" />
            {index === 3 && !showMore && (
              <div className="mt-8">
                <button onClick={handleShowMore} className="bg-lime-500 text-white px-4 py-2 rounded-lg">
                  Show More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
