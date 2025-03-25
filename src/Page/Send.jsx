import React, { useState } from "react";

function Send() {
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [fee, setFee] = useState("normal");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the send transaction here
    console.log("Sending Bitcoin:", { recipientAddress, amount, fee });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Send Bitcoin</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="recipient"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Recipient Address
          </label>
          <input
            type="text"
            id="recipient"
            value={recipientAddress}
            onChange={(e) => setRecipientAddress(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
            placeholder="Enter Bitcoin address"
            required
          />
          <p className="mt-1 text-sm text-gray-500">
            Make sure to double-check the address before sending
          </p>
        </div>

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
            Network Fee
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="slow"
                checked={fee === "slow"}
                onChange={(e) => setFee(e.target.value)}
                className="mr-2"
              />
              Slow (Lower fee, longer confirmation time)
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="normal"
                checked={fee === "normal"}
                onChange={(e) => setFee(e.target.value)}
                className="mr-2"
              />
              Normal (Recommended)
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="fast"
                checked={fee === "fast"}
                onChange={(e) => setFee(e.target.value)}
                className="mr-2"
              />
              Fast (Higher fee, faster confirmation)
            </label>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium mb-2">Transaction Summary</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Amount: {amount || "0.00000000"} BTC</p>
            <p>
              Network Fee:{" "}
              {fee === "slow"
                ? "0.0001"
                : fee === "normal"
                ? "0.0002"
                : "0.0003"}{" "}
              BTC
            </p>
            <p className="font-medium">
              Total:{" "}
              {(
                parseFloat(amount || 0) +
                parseFloat(
                  fee === "slow"
                    ? "0.0001"
                    : fee === "normal"
                    ? "0.0002"
                    : "0.0003"
                )
              ).toFixed(8)}{" "}
              BTC
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Send Bitcoin
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          Note: The transaction will be irreversible once confirmed on the
          blockchain.
        </p>
        <p>
          Please ensure you have sufficient Bitcoin in your wallet to cover the
          amount plus network fees.
        </p>
        <p>Network fees may vary depending on current network conditions.</p>
      </div>
    </div>
  );
}

export default Send;
