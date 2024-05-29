import React from 'react';
import FarmDine from './FarmDine';

const EventSectionOne: React.FC = () => {
  const imageUrl1 = 'src/assets/section1.png'; 
  const imageUrl2 = 'src/assets/section2.jpg';
  const imageIcon1 = 'src/assets/partners03.png';
  const imageIcon01 = 'src/assets/partners01.png';
  const imageIcon2 = 'src/assets/partners02.png';
  const imageIcon02 = 'src/assets/infinity.svg.png';

  return (
    <div>
      <FarmDine
      textIcon = {imageIcon1}
        title={
          <>
            FarmDine: Revolutionizing Agricultural Trade with{' '}
            <span className="text-orange-500">One-to-One <br></br> Online Connections</span>
          </>
        }
        description={<> - Instant connections with potential buyers <br></br> - Real-time communication and negotiation <br></br>- Secure and seamless transactions <br></br> - Increased sales and growth </>}
        imageUrl={imageUrl1}
        imageIcon = {imageIcon01}
        buttonText="Sign up for free"
        buttonOnClick={() => { /* Handle button click here */ }}
      />
      <FarmDine
       textIcon = {imageIcon2}
          title={
            <>
              FarmDine: Revolutionizing Agricultural Trade with{' '}
              <span className="text-orange-500">One-to-One <br></br>Online </span> Payment Connections
            </>
          }
        description={<> - Instant connections with potential buyers <br></br> - Real-time communication and negotiation <br></br>- Secure and seamless transactions <br></br> - Increased sales and growth </>}
        imageUrl={imageUrl2}
        imageIcon = {imageIcon02}
        buttonText="Sign up for free"
        buttonOnClick={() => { /* Handle button click here */ }}
      />
    </div>
  );
};

export default EventSectionOne;
