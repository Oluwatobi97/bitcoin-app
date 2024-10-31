import FormInput from "./FormInput";
import SelectForm from "./SelectForm";

const RenderForm = ({
  type,
  name,
  id,
  placeholder,
  className,
  error,
  options,
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
  switch (type) {
    case "text":
    case "password":
    case "email":
      return <FormInput {...formProps} />;
    case "select":
      return <SelectForm options={options} />;
  }
};

export default RenderForm;
