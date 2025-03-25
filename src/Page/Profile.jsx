import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaWallet,
  FaBitcoin,
  FaChartLine,
  FaHistory,
} from "react-icons/fa";
import { authService } from "../services/authService";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalInvested: 0,
    totalWithdrawn: 0,
    profitLoss: 0,
    transactionCount: 0,
  });

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      // Get user's transaction history from localStorage
      const transactions = JSON.parse(
        localStorage.getItem(`transactions_${currentUser.id}`) || "[]"
      );

      // Calculate statistics
      const totalInvested = transactions
        .filter((t) => t.type === "buy")
        .reduce((sum, t) => sum + t.amount, 0);

      const totalWithdrawn = transactions
        .filter((t) => t.type === "sell")
        .reduce((sum, t) => sum + t.amount, 0);

      setStats({
        totalInvested,
        totalWithdrawn,
        profitLoss: totalWithdrawn - totalInvested,
        transactionCount: transactions.length,
      });
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Please log in to view your profile
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <FaUser className="w-12 h-12 text-blue-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-full">
              <FaWallet className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Invested</p>
              <p className="text-2xl font-bold text-gray-900">
                ${stats.totalInvested.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <FaBitcoin className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Bitcoin Balance</p>
              <p className="text-2xl font-bold text-gray-900">
                {user.bitcoin.toFixed(8)} BTC
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaChartLine className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Profit/Loss</p>
              <p
                className={`text-2xl font-bold ${
                  stats.profitLoss >= 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                ${stats.profitLoss.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <FaHistory className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Transactions</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.transactionCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {JSON.parse(localStorage.getItem(`transactions_${user.id}`) || "[]")
            .slice(0, 5)
            .map((transaction, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`p-2 rounded-full ${
                      transaction.type === "buy" ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    {transaction.type === "buy" ? (
                      <FaBitcoin className="w-5 h-5 text-green-500" />
                    ) : (
                      <FaBitcoin className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {transaction.type === "buy" ? "Bought" : "Sold"} Bitcoin
                    </p>
                    <p className="text-sm text-gray-500">
                      {new Date(transaction.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-medium ${
                      transaction.type === "buy"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "buy" ? "+" : "-"}
                    {transaction.amount} BTC
                  </p>
                  <p className="text-sm text-gray-500">
                    ${transaction.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
