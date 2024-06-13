// src/Partners.tsx
import React, { useEffect, useRef } from 'react';

const Partners: React.FC = () => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logosContainer = logosRef.current;

    if (logosContainer) {
      let scrollAmount = 0;

      const scrollLogos = () => {
        if (logosContainer) {
          scrollAmount += 1;
          if (scrollAmount >= logosContainer.scrollWidth / 2) {
            scrollAmount = 0;
          }
          logosContainer.scrollLeft = scrollAmount;
        }
      };

      const intervalId = setInterval(scrollLogos, 20);
      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="bg-lime-100 p-8 mt-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Trusted by 3000+ African Businesses</h2>
        <div className="relative overflow-hidden">
          <div
            ref={logosRef}
            className="flex space-x-8"
            style={{ width: '200%', overflow: 'hidden', whiteSpace: 'nowrap' }}
           >
            <img src="src\assets\img1.png" alt="Logo 1" className="h-26 w-26" />
            <img src="src\assets\img2.png" alt="Logo 2" className="h-26 w-26" />
            <img src="src\assets\img3.png" alt="Logo 3" className="h-26 w-26" />
            <img src="src\assets\img4.png" alt="Logo 4" className="h-26 w-26" />
            <img src="src\assets\img5.png" alt="Logo 5" className="h-26 w-26" />
            {/* Repeat logos for continuous scroll effect */}
            <img src="src\assets\img1.png" alt="Logo 1" className="h-26 w-26" />
            <img src="src\assets\img2.png" alt="Logo 2" className="h-26 w-26" />
            <img src="src\assets\img3.png" alt="Logo 3" className="h-26 w-26" />
            <img src="src\assets\img4.png" alt="Logo 4" className="h-26 w-26" />
            <img src="src\assets\img5.png" alt="Logo 5" className="h-26 w-26" />
            <img src="src\assets\img1.png" alt="Logo 1" className="h-26 w-26" />
            <img src="src\assets\img2.png" alt="Logo 2" className="h-26 w-26" />
            <img src="src\assets\img3.png" alt="Logo 3" className="h-26 w-26" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
