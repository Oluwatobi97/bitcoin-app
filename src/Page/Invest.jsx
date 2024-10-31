import React from "react";
import { BsPatchQuestion } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Dropdown from "../Componet/Dropdown";

function Invest() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <div className="text-center font-bold flex flex-col items-center">
        <h1 className="text-3xl text-blue-600">Invest</h1>
        <div>
          <Dropdown options={["Eth", "BTC"]} />
        </div>
        <div className="mt-12">
          <label className="mr-64 text-gray-700">Amount</label>
          <input
            type="text"
            placeholder="0.00"
            required
            className="border border-blue-400 rounded-lg py-1 px-16 text-black text-sm focus:outline-none focus:ring-2 w-full mr-10 "
          />
          <div className="flex justify-between">
            <p className=" text-xs mr-12 mt-3 text-gray-700">
              The Minimum Amount Of Your Investment is
            </p>
            <p className="mt-3 text-xs text-gray-700">$100</p>
          </div>
          <div className="flex justify-between">
            <p className=" text-xs mr-12 mt-3 text-gray-700">
              The Minimum Bitcoin Investment is
            </p>
            <p className="mt-3 text-xs text-gray-700">0.00001</p>
          </div>
          <div className="flex justify-between">
            <p className=" text-xs mr-12 mt-3 text-gray-700">
              The Minimum ETH Investment is
            </p>
            <p className="mt-3 text-xs text-gray-700">0.00001</p>
          </div>
        </div>
        <div className="mt-12">
          <label className="mr-72 text-gray-700">Period</label>
          <input
            type="text"
            placeholder=""
            required
            className="border border-blue-400 rounded-lg py-1 px-16 text-black text-sm focus:outline-none focus:ring-2 w-full mr-10 "
          />
          <p className="  text-xs mr-36 mt-3 text-gray-700">
            Choose the days of to Investment ?
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="border hover:bg-blue-700 py-2 px-2 rounded-xl hover:text-white mt-4  border-blue-300 bg-gray-100 font-bold text-gray-700"
      >
        Invest
      </button>
      <div className="mt-5">
        <a>
          <h3 className="flex text-gray-700 font-bold ">
            Need Help <BsPatchQuestion className="ml-3 mt-1" />
          </h3>
        </a>
        <a
          className="text-gray-700 font-bold flex"
          onClick={() => navigate("/")}
        >
          Home{" "}
        </a>
      </div>
    </div>
  );
}

export default Invest;
