import React, { useEffect, useRef } from 'react';

interface FarmDineProps {
  title: React.ReactNode; // Change to ReactNode to accept JSX
  description: React.ReactNode;
  imageUrl: string;
  textIcon: string;
  imageIcon: string;
  buttonText?: string; 
  buttonOnClick?: () => void; 
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
  const leftSlideRef = useRef<HTMLDivElement>(null);
  const rightSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const leftSlide = leftSlideRef.current;
    const rightSlide = rightSlideRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === leftSlide) {
            leftSlide?.classList.add('animate-slideInFromLeft');
          } else if (entry.target === rightSlide) {
            rightSlide?.classList.add('animate-slideInFromRight');
          }
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    if (leftSlide) observer.observe(leftSlide);
    if (rightSlide) observer.observe(rightSlide);

    return () => {
      if (leftSlide) observer.unobserve(leftSlide);
      if (rightSlide) observer.unobserve(rightSlide);
    };
  }, []);

  return (
    <div className="bg-gray-50 rounded-lg shadow-sm px-4 py-6 md:py-7 md:pl-24">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-y-0 md:space-x-6 md:w-full mx-auto">
        <div ref={leftSlideRef} className="left-slide flex flex-col items-center md:items-start w-full md:w-2/4 px-4 md:px-0">
          <img src={textIcon} alt="person icon" className="w-12 h-12 mb-4" />
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            {title}
          </h2>
          <p className="text-gray-700 text-justify">
            {description}
          </p>
          {buttonText && buttonOnClick && (
            <button
              className="bg-lime-500 hover:bg-lime-400 text-black text-xs md:text-sm font-bold py-2 px-4 rounded mt-4"
              onClick={buttonOnClick}
            >
              {buttonText}
            </button>
          )}
        </div>
        <div ref={rightSlideRef} className="rigth-slide flex flex-col items-center md:items-end w-full md:w-auto px-4 md:px-0">
          <img src={imageIcon} alt="person icon" className="w-12 h-12 mb-4 md:ml-0" />
          <img
            src={imageUrl}
            alt={typeof title === 'string' ? title : 'FarmDine Image'}
            className="object-cover w-full h-auto max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FarmDine;
