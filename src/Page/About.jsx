import React from "react";
import {
  FaBitcoin,
  FaShieldAlt,
  FaChartLine,
  FaUsers,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Background3D from "../components/Background3D";

function About() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background3D />
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            About BitcoinApp
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your trusted platform for Bitcoin investment and trading. We provide
            secure, reliable, and user-friendly services for both beginners and
            experienced traders.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <FaBitcoin className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Bitcoin Trading
            </h3>
            <p className="text-gray-300">
              Buy, sell, and trade Bitcoin with competitive rates and low fees.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <FaShieldAlt className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Secure Platform
            </h3>
            <p className="text-gray-300">
              Advanced security measures to protect your investments and
              personal information.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <FaChartLine className="h-12 w-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Real-time Analytics
            </h3>
            <p className="text-gray-300">
              Access detailed market analysis and portfolio tracking tools.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <FaUsers className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Expert Support
            </h3>
            <p className="text-gray-300">
              24/7 customer support to help you with any questions or concerns.
            </p>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-16 border border-white/20"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300">
            At BitcoinApp, we're committed to making Bitcoin investment
            accessible to everyone. Our platform combines cutting-edge
            technology with user-friendly design to provide a seamless trading
            experience. We believe in transparency, security, and innovation as
            we help our users navigate the world of cryptocurrency.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
            >
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">
                John Doe
              </h3>
              <p className="text-gray-300">CEO & Founder</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
            >
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Jane Smith
              </h3>
              <p className="text-gray-300">CTO</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
            >
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Mike Johnson
              </h3>
              <p className="text-gray-300">Head of Security</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
