import React from "react";
import {
  FaBitcoin,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaGlobe,
  word,
} from "react-icons/fa";

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About BitcoinApp
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your trusted platform for Bitcoin investment and trading. We provide
          secure, reliable, and user-friendly services for both beginners and
          experienced traders.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaBitcoin className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bitcoin Trading</h3>
          <p className="text-gray-600">
            Buy, sell, and trade Bitcoin with competitive rates and low fees.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaShieldAlt className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
          <p className="text-gray-600">
            Advanced security measures to protect your investments and personal
            information.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaChartLine className="h-12 w-12 text-yellow-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
          <p className="text-gray-600">
            Access detailed market analysis and portfolio tracking tools.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FaUsers className="h-12 w-12 text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
          <p className="text-gray-600">
            24/7 customer support to help you with any questions or concerns.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-blue-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          At BitcoinApp, we're committed to making Bitcoin investment accessible
          to everyone. Our platform combines cutting-edge technology with
          user-friendly design to provide a seamless trading experience. We
          believe in transparency, security, and innovation as we help our users
          navigate the world of cryptocurrency.
        </p>
      </div>

      {/* Team Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
            <p className="text-gray-600">Head of Security</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
