import React, { useState } from 'react';
import product1 from '../assets/product1.PNG';
import product2 from '../assets/product2.PNG';
import product3 from '../assets/product3.PNG';
import product4 from '../assets/product4.PNG';

const products = [product1, product2, product3, product4, product1, product2, product3, product4]; // Add all products

const ProductSection: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const handleShowMore = () => {
        setVisibleCount(prevCount => prevCount + 4);
    };

    return (
        <section className="text-center py-12 relative border border-gray-300 rounded-md">
            <div className="flex justify-center mb-8">
                <div className="relative">
                    <div className="w-18 h-18 border-2 border-lime-100 bg-lime-100 rounded-full flex items-center justify-center p-2">
                        <h1 className="text-lg font-bold text-green-500">Products</h1>
                    </div>
                </div>
            </div>
            <p className="text-xl mb-8">Providing the operational support your food business needs</p>
            <div className="flex justify-center flex-wrap gap-6">
                {products.slice(0, visibleCount).map((product, index) => (
                    <div key={index} className="bg-gray-200 p-6 rounded-lg w-40 text-center hover:scale-105 transition-transform">
                        <img src={product} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
            {visibleCount < products.length && (
                <button onClick={handleShowMore} className="bg-lime-500 text-white px-4 py-2 rounded-lg absolute bottom-4 right-4">
                    Show More
                </button>
            )}
        </section>
    );
};

export default ProductSection;
