import React from "react";
import { FormSchema } from "../../design-system/forms/FormSchema";
import { signInFields } from "./constants";
import { useState } from "react";

export const AuthLayout = ({ layoutName, children }) => {
  return (
    <div className="flex justify-center items-center  shadow-md px-9 h-screen">
      <div className="w-96 p-6 shadow-lg bg-blue-50 rounded-md">
        <div className="text-center text-3xl font-bold text-blue-600">
          <h1>{layoutName}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};
const Signin = () => {
  const [userDetails] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <AuthLayout layoutName={"SignIn"}>
      <FormSchema
        fields={signInFields}
        className={
          "border w-full text-base px-2 py-1 mt-4 shadow-lg focus:outline-none focus:ring-0 focus:border-blue-100 bg-blue-50"
        }
        error={""}
        options={["btc", "eth", "usdt"]}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </AuthLayout>
  );
};

export default Signin;
