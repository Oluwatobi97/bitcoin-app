import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  FaBitcoin,
  FaChartLine,
  FaShieldAlt,
  FaWallet,
  FaExchangeAlt,
  FaUserFriends,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Background3D from "../components/Background3D";

function Home() {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background3D />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Invest in Bitcoin with Confidence
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join our platform to start your cryptocurrency investment journey
            with secure, reliable, and user-friendly tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Secure Investment
            </h3>
            <p className="text-gray-300">
              Your investments are protected with state-of-the-art security
              measures and encryption.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Real-time Tracking
            </h3>
            <p className="text-gray-300">
              Monitor your investments with live price updates and detailed
              analytics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Expert Support
            </h3>
            <p className="text-gray-300">
              Get assistance from our team of cryptocurrency experts whenever
              you need it.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/signup"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
