import React from "react";

function Contact() {
  return (
    <div className="flex justify-center items-center  shadow-md px-9 h-screen">
      <div className="w-96 p-6 shadow-lg bg-blue-50 rounded-md">
        <div className="text-center text-3xl font-bold text-blue-600">
          <h1>Contact Us</h1>
        </div>
        <h3 className="text-center text-1xl font-bold text-blue-600">
          How can we be of help to you?.
        </h3>
        <div className="text-center py-6">
          <form method="POST">
            {/* <label className="text-blue-600 font-bold ">Email</label> */}
            <input
              type="text"
              placeholder="Kindly enter your email address"
              required
              className="border w-full text-base px-2 py-2 mt-4 shadow-lg focus:outline-none focus:ring-0 focus:border-blue-100 bg-blue-50"
            />
            {/* <label className="text-blue-600 font-bold mt-5">Message</label> */}
            <input
              type="text"
              placeholder="Message"
              className="border w-full text-base px-2 py-7 mt-4 shadow-lg focus:outline-none focus:ring-0 focus:border-blue-100 bg-blue-50"
            />
          </form>
        </div>
        <button
          className="border rounded-lg inline-block bg-blue-500 px-4 py-1 shadow-md font-bold text-gray-200 "
          onClick={() => navigate("/")}
        >
          Sign Up
        </button>
        <div className="mt-4 text-blue-600">
          <p className="text-sm">+1(802)715-5312</p>
          <p className="text-sm mt-1">victortobi2000@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
