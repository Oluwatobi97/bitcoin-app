import React from "react";
import { CgProfile } from "react-icons/cg";

function Profile() {
  return (
    <div className="p-6">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-500 text-center mb-3">
          Profile
        </h1>
        <CgProfile
          color="#ADD8E6"
          className="  text-9xl  cursor-pointer "
          onClick={() => navigate("/")}
        />
      </div>
      <div className="text-gray-400 mt-9 font-bold space-y-4 md: text-center">
        <h1>Name: Oluwatobi</h1>
        <h1>Email: victortobi2000@gmail.com</h1>
        <h1>UID: 293684873</h1>
      </div>
    </div>
  );
}

export default Profile;
