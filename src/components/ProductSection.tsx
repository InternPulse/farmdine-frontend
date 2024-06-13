import React, { useState, useEffect } from "react";
import axios from "axios";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  rating: number;
  discount?: string; // Optional discount property
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

  const handleToggleShowMore = () => {
    setShowMore(prevShowMore => !prevShowMore);
  };

  const displayedProducts = showMore ? products : products.slice(0, 4);

  return (
    <div
      id='Product_listing_pg'
      className='text-center py-12 w-full relative pb-48'
      style={{ 
        width: '100%', 
        minHeight: '100vh', 
        backgroundColor: '#F5F5F5',
        position: 'relative', 
        overflow: 'hidden' 
      }}
    >
      <div className="container mx-auto relative">
	  <h1 className="inline-block rounded-full bg-lime-100 text-lime-500 font-medium text-center mt-1 px-5 py-2 text-sm">Products</h1>
        <p className='text-xl mb-8'>
          Providing the operational support your food business needs
        </p>
        <div className='flex justify-center gap-6 flex-wrap' style={{ maxWidth: '1200px', gap: '20px' }}>
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className={`bg-gray-200 p-6 rounded-lg shadow-lg mb-6 relative`}
              style={{
                width: 'calc(25% - 20px)', 
                height: '482.93px', 
                borderRadius: index === 0 ? '6.62px 0px 0px 6.62px' : '0px 6.62px 6.62px 0px', 
                backgroundColor: '#F6F6F6', 
                boxShadow: '0px 2.65px 2.65px 0px #B0B0B080, 2.65px 0px 5.16px 0px #DDDDDD26, 0px 1.32px 2.65px 0px #BFBFBF0A, 2px -2px 4px 0px #D1D1D140', // Updated box shadows
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0px' 
              }}
            >
              <img
                src={product.image}
                alt={`Product ${product.id}`}
                style={{
                  width: '304.97px', 
                  height: '304.97px', 
                  objectFit: 'cover' 
                }}
              />
              <div style={{ textAlign: 'center', width: '100%' }}>
                <h2 style={{ fontSize: '16px', marginBottom: '10px' }}>{product.name}</h2>
                <p style={{ fontSize: '14px', color: '#333', marginBottom: '5px' }}>{product.price}</p>
                <p style={{ fontSize: '14px', color: '#888' }}>{product.rating} stars</p>
              </div>
              {product.discount && (
                <div style={{
                  width: '125px',
                  height: '50px',
                  position: 'absolute',
                  top: '16px',
                  left: '264.23px',
                  padding: '10px 0px 0px 0px',
                  gap: '10px',
                  borderRadius: '10px 0px 0px 0px',
                  backgroundColor: '#DBEACB',
                  textAlign: 'center'
                }}>
                  {product.discount}
                </div>
              )}
            </div>
          ))}
        </div>
        {!showMore && products.length > 4 && (
          <button
            onClick={handleToggleShowMore}
            className='bg-lime-500 text-white px-4 py-2 rounded-lg absolute'
            style={{
              width: '180px', // Fixed width
              height: '60px', // Fixed height
              bottom: '-40px', // Slightly below the product cards
              right: 'calc((100% - 1200px) / 2 + 48px)', // Align with the right side of the product cards container with a small gap and moved a little bit further to the left
              padding: '16px 10px', // Padding
              gap: '10px', // Gap between content
              borderRadius: '8px 0px 0px 0px', // Border radius
              backgroundColor: '#8BC34A', // Background color
              boxShadow: '0px 2.65px 2.65px 0px #B0B0B080, 2.65px 0px 5.16px 0px #DDDDDD26, 0px 1.32px 2.65px 0px #BFBFBF0A, 2px -2px 4px 0px #D1D1D140', // Box shadow
            }}
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductSection;