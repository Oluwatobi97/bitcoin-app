import React, { useState } from "react";

function Balance() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleItemClick = (item) => {
    console.log(`You clicked ${item}`);
    // Close the dropdown after an item is clicked
    setIsOpen(false);
  };
  return (
    <div className="flex justify-center">
      <div className=" py-7 text-7xl text-blue-400">
        <h1>1000.00</h1>
      </div>
      <div></div>
      <div>
        <div>
          <button
            type="button"
            className="inline-flex justify-center mt-14 ml-1 w-full    px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded={isOpen}
            onClick={toggleDropdown}
          >
            USDT
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleItemClick("USDT")}
              >
                USDT
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleItemClick("BTC")}
              >
                BTC
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleItemClick("ETH")}
              >
                ETH
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Balance;
