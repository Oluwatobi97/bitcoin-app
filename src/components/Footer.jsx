import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-sm">
            © 2024 Bitcoin App. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <Link to="/about" className="text-gray-500 hover:text-gray-700">
              About
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-gray-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
