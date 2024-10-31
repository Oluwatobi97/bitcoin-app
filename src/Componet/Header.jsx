import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import photo from "../assets/images/photo.jpg";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center">
      <div>
        <CgProfile
          color="#ADD8E6"
          className="text-4xl ml-2 cursor-pointer md:text-7xl "
          onClick={() => navigate("/Profile")}
        />
      </div>
      <div className="items-center ml-8 md:justify-between md:flex ">
        <img src={photo} className="w-[150px]" />
        <div className="origin-center absolute  cursor-pointer  mt-2 w-56 rounded-md shadow-lg md:shadow-none md:rounded-none md:ring-0 bg-white ring-2 ring-black ring-opacity-5 focus:outline-none">
          <ul
            className={`md:flex text-center font-bold    ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => navigate("/About")}
            >
              About
            </li>
            <li
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => navigate("/Contact")}
            >
              Contact
            </li>
            <li
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => navigate("Sigin/")}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>

      <div>{/* <IoIosMenu className="text-4xl" /> */}</div>
      <div>
        <div className="md:hidden py-3 px-3 cursor-pointer ">
          <button
            onClick={toggleMenu}
            className="text-blue-600 hover:text-blue-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>{" "}
      </div>
    </div>
  );
}

export default Header;
