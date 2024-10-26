import React from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0 text-2xl font-bold text-white">
            DiwaliShop
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            {['Home', 'Best Sellers', 'About Us', 'Blog', 'Gift Set', 'Rewards'].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <FaSearch className="text-white text-xl cursor-pointer hover:text-yellow-400" />
            <FaShoppingCart className="text-white text-xl cursor-pointer hover:text-yellow-400" />
            <FaUser className="text-white text-xl cursor-pointer hover:text-yellow-400" />
            <button className="ml-4 text-sm bg-yellow-400 text-black px-4 py-2 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
