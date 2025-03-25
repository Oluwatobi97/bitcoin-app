import React, { useState } from "react";

function Buy() {
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the buy transaction here
    console.log("Buying Bitcoin:", { amount, paymentMethod });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Buy Bitcoin</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Amount (USD)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount in USD"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Payment Method
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Credit/Debit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Bank Transfer
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium mb-2">Transaction Summary</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Amount: ${amount || "0.00"} USD</p>
            <p>Estimated Bitcoin: {(amount / 50000).toFixed(8)} BTC</p>
            <p>Fee: $0.00</p>
            <p className="font-medium">Total: ${amount || "0.00"} USD</p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Buy Bitcoin
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          Note: The actual Bitcoin amount will be calculated based on the
          current market price.
        </p>
        <p>Please ensure you have sufficient funds in your account.</p>
      </div>
    </div>
  );
}

export default Buy;
