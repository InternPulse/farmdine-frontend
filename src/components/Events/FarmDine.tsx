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

const FarmDine: React.FC<FarmDineProps> = ({
  title,
  description,
  imageUrl,
  textIcon,
  imageIcon,
  buttonText,
  buttonOnClick,
}) => {
  return (
    <div className="bg-gray-50 rounded-lg pl-20 shadow-sm">
      <div className="w-[1200px] flex items-center space-x-2 mb-10 pt-7 pb-12 pl-8">
        <div className="w-2/4"> 
          <img src={textIcon} alt="person icon" className="w-12 h-12" />
            <h2 className="text-3xl font-semibold mb-4">
              {title}
            </h2>
            <p className="text-gray-700 text-justify">{description}</p>
            {buttonText && buttonOnClick && (
              <button
                className="bg-lime-500 hover:bg-lime-400 text-black text-xs font-bold py-2 px-4 rounded mt-4"
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
