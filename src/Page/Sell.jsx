import React, { useState } from "react";

function Sell() {
  const [amount, setAmount] = useState("");
  const [withdrawalMethod, setWithdrawalMethod] = useState("bank");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the sell transaction here
    console.log("Selling Bitcoin:", { amount, withdrawalMethod });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Sell Bitcoin</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Amount (BTC)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount in BTC"
            step="0.00000001"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Withdrawal Method
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="bank"
                checked={withdrawalMethod === "bank"}
                onChange={(e) => setWithdrawalMethod(e.target.value)}
                className="mr-2"
              />
              Bank Account
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="crypto"
                checked={withdrawalMethod === "crypto"}
                onChange={(e) => setWithdrawalMethod(e.target.value)}
                className="mr-2"
              />
              Cryptocurrency Wallet
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium mb-2">Transaction Summary</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Amount: {amount || "0.00000000"} BTC</p>
            <p>Estimated USD: ${(amount * 50000).toFixed(2)}</p>
            <p>Network Fee: 0.0001 BTC</p>
            <p className="font-medium">Total: {amount || "0.00000000"} BTC</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
        >
          Sell Bitcoin
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          Note: The actual USD amount will be calculated based on the current
          market price.
        </p>
        <p>Please ensure you have sufficient Bitcoin in your wallet.</p>
        <p>Network fees may vary depending on current network conditions.</p>
      </div>
    </div>
  );
}

export default Sell;
