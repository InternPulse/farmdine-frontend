import ProductCard from "./ProductCard";

const ProductSection: React.FC = () => {


  return (
    
      <div className="container mx-auto relative">
        <div className='text-center'>
          <h1 className=" inline-block rounded-full bg-lime-100 text-lime-500 font-medium text-center mt-1 px-5 py-2 text-sm">Products</h1>
          <p className='text-2xl mb-10 mt-2 font-semibold'>
            Providing the operational support your food business needs
          </p>
        </div>
        <div className="flex space-x-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
       
    </div>
  );
};

export default ProductSection;
