import React from "react";
import { LabelAndError } from "./Input";

const FormInput = ({
  type,
  name,
  id,
  placeholder,
  className,
  error,
  handleInputChange,
}) => {
  const formProps = {
    type,
    name,
    id,
    placeholder,
    className,
    error,
    handleInputChange,
  };

  return <LabelAndError {...formProps} />;
};

export default FormInput;
