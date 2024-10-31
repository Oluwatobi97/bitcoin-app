import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="mt-10 ml-11 ">
      <div className="bg-gray-50 shadow-lg w-[300px] md:w-[500px] p-3 rounded-lg mt-[-20px] md:ml-96 md:mb-4  flex items-center">
        <FaSearch />

        <input
          type="text"
          placeholder="BTC/USDT"
          className="outline-none px-[35px]  bg-gray-50 "
        />
      </div>
    </div>
  );
}

export default Search;
