import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBitcoin,
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaExchangeAlt,
  FaWallet,
  FaHistory,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaUserFriends,
  FaShieldAlt,
} from "react-icons/fa";

function Dashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  // Mock data - replace with actual data from your backend
  const portfolioData = {
    totalBalance: 12500.5,
    btcBalance: 0.25,
    btcValue: 10000,
    usdBalance: 2500.5,
    profitLoss: 1250.75,
    profitLossPercentage: 12.5,
  };

  const recentTransactions = [
    {
      id: 1,
      type: "buy",
      amount: 0.1,
      price: 45000,
      date: "2024-03-15 14:30",
      status: "completed",
    },
    {
      id: 2,
      type: "sell",
      amount: 0.05,
      price: 46000,
      date: "2024-03-14 09:15",
      status: "completed",
    },
    {
      id: 3,
      type: "transfer",
      amount: 0.02,
      address: "bc1q...xyz",
      date: "2024-03-13 16:45",
      status: "completed",
    },
  ];

  const activityFeed = [
    {
      id: 1,
      type: "login",
      description: "Successful login from New York, USA",
      date: "2024-03-15 15:00",
    },
    {
      id: 2,
      type: "trade",
      description: "Bought 0.1 BTC at $45,000",
      date: "2024-03-15 14:30",
    },
    {
      id: 3,
      type: "security",
      description: "Two-factor authentication enabled",
      date: "2024-03-14 10:15",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <FaBell className="h-6 w-6" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <FaCog className="h-6 w-6" />
              </button>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-red-500 flex items-center space-x-2"
              >
                <FaSignOutAlt className="h-6 w-6" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Overview */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <FaBitcoin className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Balance</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${portfolioData.totalBalance.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center">
              <FaChartLine className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">BTC Balance</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {portfolioData.btcBalance} BTC
                </p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center">
              <FaWallet className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm text-gray-600">USD Balance</p>
                <p className="text-2xl font-semibold text-gray-900">
                  ${portfolioData.usdBalance.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center">
              {portfolioData.profitLoss >= 0 ? (
                <FaArrowUp className="h-8 w-8 text-green-600" />
              ) : (
                <FaArrowDown className="h-8 w-8 text-red-600" />
              )}
              <div className="ml-4">
                <p className="text-sm text-gray-600">Profit/Loss</p>
                <p
                  className={`text-2xl font-semibold ${
                    portfolioData.profitLoss >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  ${Math.abs(portfolioData.profitLoss).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab("overview")}
              className={`${
                activeTab === "overview"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("transactions")}
              className={`${
                activeTab === "transactions"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
            >
              Transactions
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              className={`${
                activeTab === "activity"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              } whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm`}
            >
              Activity
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart Section */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Portfolio Performance
                </h3>
                <div className="h-64 flex items-center justify-center text-gray-500">
                  Chart will be implemented here
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {activityFeed.slice(0, 3).map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex-shrink-0">
                        {activity.type === "login" && (
                          <FaUserFriends className="h-5 w-5 text-blue-500" />
                        )}
                        {activity.type === "trade" && (
                          <FaExchangeAlt className="h-5 w-5 text-green-500" />
                        )}
                        {activity.type === "security" && (
                          <FaShieldAlt className="h-5 w-5 text-purple-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-900">
                          {activity.description}
                        </p>
                        <p className="text-xs text-gray-500">{activity.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-2 rounded-full ${
                        transaction.type === "buy"
                          ? "bg-green-100"
                          : transaction.type === "sell"
                          ? "bg-red-100"
                          : "bg-blue-100"
                      }`}
                    >
                      {transaction.type === "buy" && (
                        <FaArrowUp className="h-5 w-5 text-green-600" />
                      )}
                      {transaction.type === "sell" && (
                        <FaArrowDown className="h-5 w-5 text-red-600" />
                      )}
                      {transaction.type === "transfer" && (
                        <FaExchangeAlt className="h-5 w-5 text-blue-600" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {transaction.type.charAt(0).toUpperCase() +
                          transaction.type.slice(1)}{" "}
                        {transaction.amount} BTC
                      </p>
                      <p className="text-xs text-gray-500">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      ${transaction.price?.toLocaleString() || "N/A"}
                    </p>
                    <p className="text-xs text-green-600">
                      {transaction.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "activity" && (
            <div className="space-y-4">
              {activityFeed.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    {activity.type === "login" && (
                      <FaUserFriends className="h-5 w-5 text-blue-500" />
                    )}
                    {activity.type === "trade" && (
                      <FaExchangeAlt className="h-5 w-5 text-green-500" />
                    )}
                    {activity.type === "security" && (
                      <FaShieldAlt className="h-5 w-5 text-purple-500" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
