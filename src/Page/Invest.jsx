import React, { useState, useEffect } from "react";
import { FaBitcoin, FaArrowUp, FaArrowDown, FaChartLine } from "react-icons/fa";
import { authService } from "../services/authService";

function Invest() {
  const [user, setUser] = useState(null);
  const [bitcoinPrice, setBitcoinPrice] = useState(45000); // Simulated price
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("buy");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [priceChange, setPriceChange] = useState(0);

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }

    // Simulate real-time price updates
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 1000;
      setBitcoinPrice((prev) => prev + change);
      setPriceChange(change);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTransaction = async (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const transactionAmount = parseFloat(amount);
      if (isNaN(transactionAmount) || transactionAmount <= 0) {
        throw new Error("Please enter a valid amount");
      }

      const transaction = {
        type,
        amount: transactionAmount,
        price: bitcoinPrice,
        date: new Date().toISOString(),
        total: transactionAmount * bitcoinPrice,
      };

      // Get existing transactions
      const transactions = JSON.parse(
        localStorage.getItem(`transactions_${user.id}`) || "[]"
      );
      transactions.push(transaction);
      localStorage.setItem(
        `transactions_${user.id}`,
        JSON.stringify(transactions)
      );

      // Update user's balance and bitcoin
      const updatedUser = {
        ...user,
        balance:
          type === "buy"
            ? user.balance - transaction.total
            : user.balance + transaction.total,
        bitcoin:
          type === "buy"
            ? user.bitcoin + transactionAmount
            : user.bitcoin - transactionAmount,
      };

      // Update user in localStorage
      const registeredUsers = JSON.parse(
        localStorage.getItem("registeredUsers") || "[]"
      );
      const updatedUsers = registeredUsers.map((u) =>
        u.id === user.id ? updatedUser : u
      );
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setUser(updatedUser);
      setMessage({
        type: "success",
        text: `${
          type === "buy" ? "Bought" : "Sold"
        } ${transactionAmount} BTC successfully!`,
      });
      setAmount("");
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Transaction failed. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Please log in to invest
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Price Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <FaBitcoin className="w-8 h-8 text-yellow-500" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Bitcoin</h2>
              <p className="text-gray-600">BTC/USD</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-gray-900">
              ${bitcoinPrice.toFixed(2)}
            </p>
            <p
              className={`flex items-center justify-end ${
                priceChange >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {priceChange >= 0 ? (
                <FaArrowUp className="w-4 h-4 mr-1" />
              ) : (
                <FaArrowDown className="w-4 h-4 mr-1" />
              )}
              {Math.abs(priceChange).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>

      {/* Transaction Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Trade Bitcoin
          </h2>
          <form onSubmit={handleTransaction} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Transaction Type
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setType("buy")}
                  className={`flex-1 py-2 px-4 rounded-md ${
                    type === "buy"
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Buy
                </button>
                <button
                  type="button"
                  onClick={() => setType("sell")}
                  className={`flex-1 py-2 px-4 rounded-md ${
                    type === "sell"
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  Sell
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (BTC)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00000000"
                step="0.00000001"
                required
              />
            </div>

            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Current Price</span>
                <span className="font-medium">${bitcoinPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Amount</span>
                <span className="font-medium">
                  {amount || "0.00000000"} BTC
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total</span>
                <span className="font-medium">
                  ${((amount || 0) * bitcoinPrice).toFixed(2)}
                </span>
              </div>
            </div>

            {message.text && (
              <div
                className={`p-4 rounded-md ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                type === "buy"
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-red-500 hover:bg-red-600"
              } disabled:opacity-50`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                `${type === "buy" ? "Buy" : "Sell"} Bitcoin`
              )}
            </button>
          </form>
        </div>

        {/* Balance Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Balance</h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600">Available Balance</p>
              <p className="text-2xl font-bold text-gray-900">
                ${user.balance.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Bitcoin Balance</p>
              <p className="text-2xl font-bold text-gray-900">
                {user.bitcoin.toFixed(8)} BTC
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Value</p>
              <p className="text-2xl font-bold text-gray-900">
                ${(user.balance + user.bitcoin * bitcoinPrice).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invest;
