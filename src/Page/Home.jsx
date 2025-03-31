import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaBitcoin,
  FaChartLine,
  FaShieldAlt,
  FaWallet,
  FaExchangeAlt,
  FaUserFriends,
  FaArrowRight,
  FaGlobe,
  FaLock,
  FaHeadset,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Background3D from "../components/Background3D";
import { authService } from "../services/authService";

function Home() {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated();

  const stats = [
    { label: "Active Users", value: "1M+" },
    { label: "Trading Volume", value: "$500M+" },
    { label: "Supported Countries", value: "150+" },
    { label: "Security Score", value: "99.9%" },
  ];

  const features = [
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Real-time Trading",
      description:
        "Trade Bitcoin and other cryptocurrencies with real-time market data and advanced charting tools.",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Secure Platform",
      description:
        "Your assets are protected with industry-leading security measures and multi-layer authentication.",
    },
    {
      icon: <FaWallet className="w-8 h-8" />,
      title: "Easy Wallet Management",
      description:
        "Manage your digital assets with our intuitive wallet interface and secure storage solutions.",
    },
    {
      icon: <FaExchangeAlt className="w-8 h-8" />,
      title: "Multiple Payment Options",
      description:
        "Deposit and withdraw using various payment methods including bank transfer and credit cards.",
    },
  ];

  const additionalFeatures = [
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Global Access",
      description:
        "Trade from anywhere in the world with our 24/7 platform access.",
    },
    {
      icon: <FaLock className="w-8 h-8" />,
      title: "Cold Storage",
      description: "Your assets are stored in secure cold storage facilities.",
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Get help anytime with our dedicated customer support team.",
    },
    {
      icon: <FaMobileAlt className="w-8 h-8" />,
      title: "Mobile Trading",
      description: "Trade on the go with our mobile-friendly platform.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <Background3D />
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Invest in Bitcoin with Confidence
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Join our platform to start your cryptocurrency investment journey
            with secure, reliable, and user-friendly tools.
          </p>
          {!isAuthenticated && (
            <div className="flex justify-center space-x-4">
              <Link
                to="/signup"
                className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold flex items-center space-x-2"
              >
                <span>Get Started</span>
                <FaArrowRight />
              </Link>
              <Link
                to="/login"
                className="bg-white/10 text-white hover:bg-white/20 px-8 py-3 rounded-lg text-lg font-semibold"
              >
                Sign In
              </Link>
            </div>
          )}
        </motion.div>

        {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 text-center"
            >
              <div className="text-3xl font-bold text-blue-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
          </motion.div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-500 transition-colors"
              >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Platform Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
          <motion.div
                key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-blue-500 transition-colors"
          >
                <div className="text-blue-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
            </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-gray-300 mb-8">
              Your security is our top priority. We implement multiple layers of
              protection including:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <FaShieldAlt className="text-blue-500 mr-2" />
                    Multi-factor authentication
                  </li>
                  <li className="flex items-center">
                    <FaLock className="text-blue-500 mr-2" />
                    Cold storage for digital assets
                  </li>
                  <li className="flex items-center">
                    <FaUserFriends className="text-blue-500 mr-2" />
                    Dedicated security team
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <FaGlobe className="text-blue-500 mr-2" />
                    Global security compliance
                  </li>
                  <li className="flex items-center">
                    <FaHeadset className="text-blue-500 mr-2" />
                    24/7 security monitoring
                  </li>
                  <li className="flex items-center">
                    <FaMobileAlt className="text-blue-500 mr-2" />
                    Mobile security features
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {!isAuthenticated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Investment Journey?
            </h2>
          <Link
            to="/signup"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold"
          >
              <span>Create Your Account</span>
              <FaArrowRight />
          </Link>
        </motion.div>
        )}
      </div>
    </div>
  );
}

export default Home;
