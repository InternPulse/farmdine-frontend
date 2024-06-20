// ProductSection.tsx

import React from 'react';
import ProductCard from './ProductCard';
import products from './ProductData';
import { Product } from './ProductData';

const ProductSection: React.FC = () => {
  return (
    <div className="container mx-auto relative">
      <div className='text-center'>
        <h1 className="inline-block rounded-full bg-lime-100 text-lime-500 font-medium text-center mt-1 px-5 py-2 text-sm">Products</h1>
        <p className='text-2xl mb-10 mt-2 font-semibold'>
          Providing the operational support your food business needs
        </p>
      </div>
      <div className="flex overflow-x-auto space-x-2 hide-scrollbar">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default ProductSection;
