import React from "react";
import photo1 from "../assets/images/photo1.jpg";

function About() {
  return (
    <div className="p-6 ">
      <div className="text-center font-bold flex flex-col items-cente ">
        <h1 className="text-3xl  text-blue-600">About</h1>
        <img src={photo1} className="w-[100px]  mt-4 mx-auto" />
        <p className="mt-5 text-blue-400">Versoin 7.16.2</p>
      </div>
      <div className="mt-14 shadow-md  bg-blue-200">
        <div className="shadow-lg rounded-md  ">
          {/* <h1 className="">hello</h1> */}
        </div>
      </div>
    </div>
  );
}

export default About;
