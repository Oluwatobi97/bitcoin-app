import React, { useState } from "react";
import RenderForm from "./RenderForm";
import { useNavigate } from "react-router-dom";

export const FormSchema = ({
  fields,
  className,
  error,
  options,
  handleInputChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <RenderForm
          className={className}
          error={error}
          name={fields.name}
          placeholder={field.type}
          type={field.type}
          options={options}
          handleInputChange={handleInputChange}
          key={index}
        />
      ))}
      <button
        className="border shadow-lg px-2 text-base mt-6 border-blue-400 rounded-lg bg-blue-600 text-white mr-64"
        onClick={() => navigate("/")}
      >
        LogIn
      </button>
      {/* <div className="text-base flex flex-col mr-40 mt-6 font-sans">
        <a>Forgotten Password</a>
        <a className="mr-16 mt-3">I Need Help </a>
      </div> */}
    </form>
  );
};
