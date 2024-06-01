import React from 'react';
import phone from '../assets/phone-icon.png'
import mail from '../assets/mail-icon.png'
import map from '../assets/mail-icon.png'
import insta from '../assets/instagram.png'
import skype from '../assets/skype-business.png'
import whatsapp from '../assets/whatsapp.png'
import Nigeria from '../assets/nigerian-flag.svg.png'
import Ghana from '../assets/Ghana-flag.png'
import USA from '../assets/USA.png'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* First Column */}
        <div>
          <div className="flex items-center mb-4">
            <img src="/src/assets/farm-dine-logo.svg" className="h-10 w-10" alt="Farmdine Logo" />
            <span className="ml-2 text-2xl font-bold">FARMDINE</span>
          </div>
          <p>Sourcing Hub For Food Enterprises And African Farmers</p>
          <div className="mt-4">
            <div className="flex items-center mb-2">
              <img src={phone} alt="telephone icon"/>
              <span>+2340784738889</span>
            </div>
            <div className="flex items-center mb-2">
              <img src={mail} alt=""/>
              <span>farmdine@gmail.com</span>
            </div>
            <div className="flex items-center">
              <img src={map} alt=""/>
              <span>57 Toyin Street, Lagos</span>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Products</h3>
          <ul>
            <li className="mb-2">Fresh Products</li>
            <li className="mb-2">Organic Vegetables</li>
            <li className="mb-2">Farm Supplies</li>
            <li className="mb-2">Dairy Products</li>
            <li className="mb-2">Seasonal Offerings</li>
            <li className="mb-2">Local Specialties</li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Contact Us</li>
            <li className="mb-2">Events</li>
            <li className="mb-2">FAQ</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Partner</h3>
          <ul>
            <li className="mb-2">For Individuals</li>
            <li className="mb-2">For Farmers</li>
            <li className="mb-2">For Enterprises</li>
          </ul>
        </div>

        {/* Fifth Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Solutions</h3>
          <ul>
            <li className="mb-2">Bridging Farmers and Communities</li>
            <li className="mb-2">Empowering Farmers and Serving You</li>
          </ul>
        </div>
      </div>
      
      {/* New Row with Three Columns */}
      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {/* First Column */}
        <div>
          <p className="mb-4"><strong>© 2024 Farmdine. All rights reserved</strong></p>
          <p>
            <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms and Conditions</a>
          </p>
        </div>

        {/* Second Column */}
        <div className="flex justify-center items-center space-x-4">
          <div className="flex items-center">
            <img src={Nigeria} alt="Nigeria Flag" className="h-5 w-5 mr-2" />
            <span>Nigeria</span>
          </div>
          <div className="flex items-center">
            <img src={Ghana} alt="Ghana Flag" className="h-5 w-5 mr-2" />
            <span>Ghana</span>
          </div>
          <div className="flex items-center">
            <img src={USA}  alt="USA Flag" className="h-5 w-5 mr-2" />
            <span>USA</span>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-black hover:text-gray-600">
            <img src={insta} alt=""/>
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <img src={skype} alt=""/>
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <img src={whatsapp} alt=""/>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
