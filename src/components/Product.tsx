import React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  imageUrl: string;
  discount: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Cabbage",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/cabbage.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 2,
    name: "Pineapple",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/pineapple.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 3,
    name: "Cabbage",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/cabbage.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 4,
    name: "Pineapple",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/pineapple.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 5,
    name: "Cabbage",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/cabbage.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 6,
    name: "Pineapple",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/pineapple.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 7,
    name: "Cabbage",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/cabbage.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 8,
    name: "Pineapple",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/pineapple.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 9,
    name: "Cabbage",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/cabbage.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 10,
    name: "Pineapple",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/pineapple.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 11,
    name: "Cabbage",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/cabbage.jpg",
    discount: "20% Off",
    rating: 5,
  },
  {
    id: 12,
    name: "Pineapple",
    price: "$50.00",
    oldPrice: "$70.00",
    imageUrl: "src/assets/images/pineapple.jpg",
    discount: "20% Off",
    rating: 5,
  },
];

const Product: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-8 space-x-2">
        <button
          className="bg-[#8BC34A] text-black font-bold uppercase py-3 px-8 rounded shadow"
          style={{
            boxShadow: "0 4px 6px -1px rgba(139, 195, 74, 0.5)",
            transition: "all 0.3s ease",
          }}
        >
          Fruits
        </button>
        <button
          className="bg-white text-black font-bold uppercase py-3 px-8 rounded shadow hover:bg-[#8BC34A] hover:text-black"
          style={{
            boxShadow: "0 4px 6px -1px rgba(139, 195, 74, 0.5)",
            transition: "all 0.3s ease",
          }}
        >
          Fresh Veg
        </button>
        <button
          className="bg-white text-black font-bold uppercase py-3 px-8 rounded shadow hover:bg-[#8BC34A] hover:text-black"
          style={{
            boxShadow: "0 4px 6px -1px rgba(139, 195, 74, 0.5)",
            transition: "all 0.3s ease",
          }}
        >
          Rice & Pasta
        </button>
        <button
          className="bg-white text-black font-bold uppercase py-3 px-8 rounded shadow hover:bg-[#8BC34A] hover:text-black"
          style={{
            boxShadow: "0 4px 6px -1px rgba(139, 195, 74, 0.5)",
            transition: "all 0.3s ease",
          }}
        >
          Cereals
        </button>
        <button
          className="bg-white text-black font-bold uppercase py-3 px-8 rounded shadow hover:bg-[#8BC34A] hover:text-black"
          style={{
            boxShadow: "0 4px 6px -1px rgba(139, 195, 74, 0.5)",
            transition: "all 0.3s ease",
          }}
        >
          Live Stock
        </button>
      </div>
      <h2 className="text-xl font-bold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`border p-4 rounded shadow-sm h-full bg-white min-h-[25rem] flex flex-col justify-between transform transition duration-300 hover:scale-105`}
          >
            <div className="relative flex justify-center items-center flex-1 mb-2">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-36 h-36 object-cover"
              />
              <span className="absolute top-2 bg-[#DBEACB] right-2 bg-discount-bg text-black font-bold text-xs p-2 rounded">
                {product.discount}
              </span>
            </div>
            <div className="text-left w-full">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <div className="flex items-center mt-2">
                <span className="text-green-500 text-lg">{product.price}</span>
                <span className="text-gray-500 line-through ml-2">
                  {product.oldPrice}
                </span>
              </div>
              <div className="flex mt-2 space-x-1">
                {Array.from({ length: product.rating }, (_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500" // Increased size of stars
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049.927c.3-.921 1.603-.921 1.902 0l1.58 4.852a1 1 0 00.95.69h5.1c.969 0 1.37 1.24.588 1.81l-4.12 3.004a1 1 0 00-.364 1.118l1.581 4.852c.3.921-.755 1.688-1.538 1.118l-4.121-3.004a1 1 0 00-1.175 0l-4.12 3.004c-.783.57-1.838-.197-1.539-1.118l1.58-4.852a1 1 0 00-.364-1.118L.439 7.28c-.782-.57-.381-1.81.588-1.81h5.1a1 1 0 00.95-.69L9.049.927z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-[#8BC34A] text-black font-bold py-2 px-6 rounded">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Product;
