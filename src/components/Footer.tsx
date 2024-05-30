import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram as fabInstagram, faSkype as fabSkype, faWhatsapp as fabWhatsapp } from '@fortawesome/free-brands-svg-icons';

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
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <span>+2340784738889</span>
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span>farmdine@gmail.com</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              <span>57 Toyin Stree, Lagos</span>
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
            <img src="/path/to/nigeria-flag.png" alt="Nigeria Flag" className="h-5 w-5 mr-2" />
            <span>Nigeria</span>
          </div>
          <div className="flex items-center">
            <img src="/path/to/ghana-flag.png" alt="Ghana Flag" className="h-5 w-5 mr-2" />
            <span>Ghana</span>
          </div>
          <div className="flex items-center">
            <img src="/path/to/usa-flag.png" alt="USA Flag" className="h-5 w-5 mr-2" />
            <span>USA</span>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-black hover:text-gray-600">
            <FontAwesomeIcon icon={fabInstagram} className="h-6 w-6" />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FontAwesomeIcon icon={fabSkype} className="h-6 w-6" />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FontAwesomeIcon icon={fabWhatsapp} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
