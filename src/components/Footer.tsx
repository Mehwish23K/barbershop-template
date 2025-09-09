import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope 
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <img className="w-40 mb-4" src={logo} alt="logo" />
          <p className="text-sm mb-6 text-neutral-400">
            Providing exceptional services with excellence and dedication since 2010.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="bg-neutral-800 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ background: 'linear-gradient(45deg, #1877F2, #0D5C9E)' }}
            >
              <FaFacebookF className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="bg-neutral-800 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ background: 'linear-gradient(45deg, #E1306C, #833AB4)' }}
            >
              <FaInstagram className="w-5 h-5 text-white" />
            </a>
            <a 
              href="#" 
              className="bg-neutral-800 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
              style={{ background: 'linear-gradient(45deg, #1DA1F2, #0F7AB8)' }}
            >
              <FaTwitter className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-red-600 pb-2">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link 
                to="/reservations" 
                className="hover:text-blue-400 transition-colors flex items-center"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                Make A Reservation
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="hover:text-blue-400 transition-colors flex items-center"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className="hover:text-blue-400 transition-colors flex items-center"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/team" 
                className="hover:text-blue-400 transition-colors flex items-center"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                View Our Team
              </Link>
            </li>
            <li>
              <Link 
                to="/services" 
                className="hover:text-blue-400 transition-colors flex items-center"
              >
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                View Our Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-red-600 pb-2">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start">
              <div className="mr-3 p-2 bg-red-600 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="w-4 h-4 text-white" />
              </div>
              <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
            </li>
            <li className="flex items-center">
              <div className="mr-3 p-2 bg-red-600 rounded-full flex items-center justify-center">
                <FaPhone className="w-4 h-4 text-white" />
              </div>
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <div className="mr-3 p-2 bg-red-600 rounded-full flex items-center justify-center">
                <FaEnvelope className="w-4 h-4 text-white" />
              </div>
              <span>info@company.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-white border-b-2 border-red-600 pb-2">Newsletter</h3>
          <p className="text-sm mb-4 text-neutral-400">Subscribe to our newsletter for the latest updates and offers.</p>
          <form className="w-full">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg py-2 px-4 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-neutral-800 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;