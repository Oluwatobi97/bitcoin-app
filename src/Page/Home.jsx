import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBitcoin,
  FaChartLine,
  FaShieldAlt,
  FaWallet,
  FaExchangeAlt,
  FaUserFriends,
} from "react-icons/fa";

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
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Invest in the Future</span>
              <span className="block text-blue-200">with Bitcoin</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Join millions of investors worldwide in the most secure and
              user-friendly Bitcoin investment platform.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button
                  onClick={() => navigate("/sign")}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </button>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                  onClick={() => navigate("/about")}
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our Platform
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Experience the best in Bitcoin investment with our comprehensive
              platform
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title} className="relative">
                  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
                    <div className="text-blue-600 mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to start investing?</span>
            <span className="block text-blue-200">
              Start your Bitcoin journey today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => navigate("/sign")}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Need help getting started?</span>
            <span className="block text-blue-600">
              Contact our support team.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
