import React from "react";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center  shadow-md px-9 h-screen">
      <div className="w-96 p-6 shadow-lg bg-blue-50 rounded-md">
        <div className="text-center text-3xl font-bold text-blue-600">
          <h1>Register</h1>
        </div>
        <form>
          <div className=" text-center py-6">
            <input
              type="text"
              placeholder="UserName"
              className="border w-full text-base px-2 py-1 mt-4 shadow-lg focus:outline-none focus:ring-0 focus:border-blue-100 bg-blue-50"
            />
            <input
              type="email"
              placeholder="Email"
              className="border w-full text-base px-2 py-1 mt-4 shadow-lg focus:outline-none focus:ring-0 focus:border-blue-100 bg-blue-50"
            />
            <input
              type="password"
              placeholder="Password"
              className="border w-full text-base px-2 py-1 mt-4 shadow-lg focus:outline-none focus:ring-0 focus:border-blue-100 bg-blue-50"
            />
            <input
              type="number"
              placeholder="Number"
              className="border w-full text-base px-2 py-1 mt-4 shadow-lg focus:outline-none focus:ring-0 focus:border-blue-100 bg-blue-50"
            />
          </div>
        </form>
        <button
          className="border rounded-lg inline-block bg-blue-500 px-4 py-1 shadow-md font-bold text-gray-200 "
          onClick={() => navigate("/Sigin")}
        >
          Sign Up
        </button>
        <div className="text-sm text-blue-400 mt-3">
          <a className="mr-5" onClick={() => navigate("/Sigin")}>
            LogIn
          </a>
          <a>Forgot Password</a>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
