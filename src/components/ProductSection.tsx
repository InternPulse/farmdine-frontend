import React, { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  image: string;
}

const ProductSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showMore, setShowMore] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://farmdine-backend.onrender.com/api/v1/products/list");
      console.log('API Response:', response.data); // Log the response to check its structure

      // Extract products from the 'results' key
      if (Array.isArray(response.data.results)) {
        setProducts(response.data.results);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
  };

  // Display only the first 4 products initially
  const displayedProducts = showMore ? products : products.slice(0, 4);

  return (
    <section id='product-section' className='text-center py-12'>
      <div className='flex justify-center mb-8'>
        <div className='relative'>
          <div className='w-18 h-18 border-2 border-lime-100 bg-lime-100 rounded-full flex items-center justify-center p-2'>
            <h1 className='text-lg font-bold text-green-500'>Products</h1>
          </div>
        </div>
      </div>
      <p className='text-xl mb-8'>
        Providing the operational support your food business needs
      </p>
      <div className='flex justify-center flex-wrap gap-6'>
        {displayedProducts.map((product, index) => (
          <div
            key={product.id}
            className='bg-gray-200 p-6 rounded-lg w-40 text-center hover:scale-105 transition-transform'
          >
            <img
              src={product.image}
              alt={`Product ${product.id}`}
              className='w-full h-full object-cover'
            />
            {index === 3 && !showMore && products.length > 4 && (
              <div className='mt-8'>
                <button
                  onClick={handleShowMore}
                  className='bg-lime-500 text-white px-4 py-2 rounded-lg'
                >
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
