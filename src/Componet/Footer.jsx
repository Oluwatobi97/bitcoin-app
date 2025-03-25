import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bitcoin Investment</h3>
            <p className="text-gray-300">
              Your trusted platform for cryptocurrency investment and trading.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/trades"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Trades
                </Link>
              </li>
              <li>
                <Link
                  to="/invest"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Invest
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/buy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Buy Bitcoin
                </Link>
              </li>
              <li>
                <Link
                  to="/sell"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sell Bitcoin
                </Link>
              </li>
              <li>
                <Link
                  to="/send"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Send Bitcoin
                </Link>
              </li>
              <li>
                <Link
                  to="/receive"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Receive Bitcoin
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Bitcoin Investment. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
