import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signin from "../views/auth/Signin";

function Sigin() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Username !== "Tobi" || password !== "victor") {
      setErrorMessage("Incorrect UserName and Password");
    } else {
      navigate("/");
    }
  };

  return (
    // <div className="flex justify-center items-center  shadow-md px-9 h-screen">
    //   <div className="w-96 p-6 shadow-lg bg-blue-50 rounded-md">
    //     <div className="text-center text-3xl font-bold text-blue-600">
    //       <h1>LogIn</h1>
    //     </div>
    //     <form onSubmit={handleSubmit}>
    //       <div className=" text-center py-6">
    //         <input
    //           type="text"
    //           placeholder="UserName"
    //           id="username"
    //           value={Username}
    //           onChange={(e) => setUsername(e.target.value)}
    //           required
    //           className="border w-full text-base px-2 py-1 mt-4 shadow-lg focus:outline-none focus:ring-0 focus:border-blue-100 bg-blue-50"
    //         />

    //         <input
    //           type="password"
    //           placeholder="Password"
    //           id="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //           className="border w-full text-base px-2 py-1 mt-4 shadow-lg focus:outline-none focus:ring-0 focus:border-blue-100 bg-blue-50"
    //         />
    //       </div>
    //       <button
    //         className="border rounded-lg inline-block bg-blue-500 px-4 py-1 shadow-md font-bold text-gray-200 "
    //         type="submit"
    //       >
    //         LogIn
    //       </button>
    //     </form>
    //     {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    //     <div className="text-sm text-blue-400 mt-3">
    //       <a className="mr-5" onClick={() => navigate("/Login")}>
    //         Register
    //       </a>
    //       <a>Forgot Password</a>
    //     </div>
    //   </div>
    // </div>
    <Signin />
  );
}

export default Sigin;
