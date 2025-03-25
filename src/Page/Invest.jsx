import React, { useState, useEffect } from "react";
import {
  FaBitcoin,
  FaEthereum,
  FaDollarSign,
  FaQrcode,
  FaCopy,
} from "react-icons/fa";
import { authService } from "../services/authService";
import { QRCodeSVG } from "qrcode.react";

function Invest() {
  const [user, setUser] = useState(null);
  const [bitcoinPrice, setBitcoinPrice] = useState(45000);
  const [ethereumPrice, setEthereumPrice] = useState(2500);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);

  // Wallet addresses (replace with actual addresses)
  const walletAddresses = {
    bitcoin: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    ethereum: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
    usd: "TRX7NBajuiHgHWTJS1OqwiQetEP3VWm2zX",
  };

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }

    // Simulate real-time price updates
    const interval = setInterval(() => {
      const btcChange = (Math.random() - 0.5) * 1000;
      const ethChange = (Math.random() - 0.5) * 100;
      setBitcoinPrice((prev) => prev + btcChange);
      setEthereumPrice((prev) => prev + ethChange);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCopyAddress = (address) => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const investmentAmount = parseFloat(amount);
      if (isNaN(investmentAmount) || investmentAmount <= 0) {
        throw new Error("Please enter a valid amount");
      }

      // Here you would typically send this data to your backend
      const investment = {
        type: selectedCrypto,
        amount: investmentAmount,
        walletAddress: walletAddresses[selectedCrypto],
        date: new Date().toISOString(),
        status: "pending",
      };

      // Store investment in localStorage
      const investments = JSON.parse(
        localStorage.getItem(`investments_${user.id}`) || "[]"
      );
      investments.push(investment);
      localStorage.setItem(
        `investments_${user.id}`,
        JSON.stringify(investments)
      );

      setMessage({
        type: "success",
        text: "Investment request submitted successfully! Please send the funds to the provided wallet address.",
      });
      setAmount("");
      setShowQR(true);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Failed to submit investment request.",
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
      {/* Price Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <FaBitcoin className="w-8 h-8 text-yellow-500" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Bitcoin</h2>
              <p className="text-2xl font-bold text-gray-900">
                ${bitcoinPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <FaEthereum className="w-8 h-8 text-blue-500" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">Ethereum</h2>
              <p className="text-2xl font-bold text-gray-900">
                ${ethereumPrice.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4">
            <FaDollarSign className="w-8 h-8 text-green-500" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">USD</h2>
              <p className="text-2xl font-bold text-gray-900">$1.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Make an Investment
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Cryptocurrency
              </label>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedCrypto("bitcoin")}
                  className={`p-4 rounded-lg border-2 ${
                    selectedCrypto === "bitcoin"
                      ? "border-yellow-500 bg-yellow-50"
                      : "border-gray-200"
                  }`}
                >
                  <FaBitcoin className="w-6 h-6 text-yellow-500 mx-auto" />
                  <span className="block mt-2 text-sm">Bitcoin</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCrypto("ethereum")}
                  className={`p-4 rounded-lg border-2 ${
                    selectedCrypto === "ethereum"
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                >
                  <FaEthereum className="w-6 h-6 text-blue-500 mx-auto" />
                  <span className="block mt-2 text-sm">Ethereum</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCrypto("usd")}
                  className={`p-4 rounded-lg border-2 ${
                    selectedCrypto === "usd"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200"
                  }`}
                >
                  <FaDollarSign className="w-6 h-6 text-green-500 mx-auto" />
                  <span className="block mt-2 text-sm">USD</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
                step="0.00000001"
                required
              />
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
              className="w-full py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Submit Investment"}
            </button>
          </form>
        </div>

        {/* Wallet Information */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Wallet Information
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-2">
                Send {selectedCrypto.toUpperCase()} to this address:
              </p>
              <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md">
                <code className="flex-1 text-sm break-all">
                  {walletAddresses[selectedCrypto]}
                </code>
                <button
                  onClick={() =>
                    handleCopyAddress(walletAddresses[selectedCrypto])
                  }
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <FaCopy className="w-5 h-5" />
                </button>
                {copied && (
                  <span className="text-sm text-green-500">Copied!</span>
                )}
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => setShowQR(!showQR)}
                className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
              >
                <FaQrcode className="w-5 h-5" />
                <span>{showQR ? "Hide QR Code" : "Show QR Code"}</span>
              </button>
            </div>

            {showQR && (
              <div className="flex justify-center p-4 bg-white rounded-lg">
                <QRCodeSVG
                  value={walletAddresses[selectedCrypto]}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
            )}

            <div className="bg-yellow-50 p-4 rounded-md">
              <h3 className="font-medium text-yellow-800 mb-2">
                Important Notes:
              </h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>
                  • Send only {selectedCrypto.toUpperCase()} to this address
                </li>
                <li>• Double-check the address before sending</li>
                <li>
                  • Minimum investment amount: 0.0001{" "}
                  {selectedCrypto.toUpperCase()}
                </li>
                <li>• Transaction may take 10-30 minutes to confirm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invest;
