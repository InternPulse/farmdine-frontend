import FarmDine from './FarmDine';
import circletick from '/images/tick-circle.jpg';

const EventSectionOne = () => {
  const imageUrl1 = '../images/section1.png'; 
  const imageUrl2 = '../images/section2.jpg';
  const imageIcon1 = '../images/partners03.png';
  const imageIcon01 = '../images/partners01.png';
  const imageIcon2 = '../images/partners02.png';
  const imageIcon02 = '../images/infinity.svg.png';

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
        buttonOnClick={() => { /* Handle button click */ }}
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
        buttonOnClick={() => { /* Handle button click */ }}
      />
      <div className="flex justify-center items-center card -mt-52">
        <div className="bg-white text-slate-900 p-4 rounded-lg shadow-md text-center">
          <img className = "m-auto pb-2" src={circletick} alt="tick icon" />
          <h2>Buy/Sell</h2>
          <p>Transaction Successfull</p>
          <button className="bg-slate-900 hover:bg-slate-700 text-white text-xs py-1 rounded mt-4 w-60">Done</button>
        </div>
      </div>
    </div>
  );
};

export default EventSectionOne;
