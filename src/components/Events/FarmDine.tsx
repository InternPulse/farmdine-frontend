import React from 'react';

interface FarmDineProps {
  title: React.ReactNode; // Change to ReactNode to accept JSX
  description: React.ReactNode;
  imageUrl: string;
  textIcon: string;
  imageIcon: string;
  buttonText?: string; // Optional button text
  buttonOnClick?: () => void; // Optional button click handler
}

const FarmDine  = ({
  title,
  description,
  imageUrl,
  textIcon,
  imageIcon,
  buttonText,
  buttonOnClick,
}: FarmDineProps ) => {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md h-screen mx-auto px-8 py-10">
      <div className="flex items-center space-x-32 ml-32 mt-10">
        <div className="w-2/5"> 
        <img src={textIcon} alt="person icon" className="w-12 h-12" />
          <h2 className="text-2xl font-semibold mb-4 tracking-wider">
            {title}
          </h2>
          <p className="text-gray-700 text-justify">{description}</p>
          {buttonText && buttonOnClick && (
            <button
              className="bg-green0 bg-lime-500 hover:bg-lime-600 text-black text-xs font-bold py-2 px-4 rounded mt-4"
              onClick={buttonOnClick}
            >
              {buttonText}
            </button>
          )}
        </div>
        <div>
        <img src={imageIcon} alt="person icon" className="w-12 h-12 ml-96" />
          <img
            src={imageUrl}
            alt={typeof title === 'string' ? title : 'FarmDine Image'}
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FarmDine;
