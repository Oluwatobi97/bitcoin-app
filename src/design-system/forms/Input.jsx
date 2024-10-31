const Input = (props) => {
  const { type, name, id, className, error, handleInputChange } = props;
  console.log(name);
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={className}
      placeholder={`enter your ${type}`}
      onChange={handleInputChange}
    />
  );
};

export const LabelAndError = (props) => {
  const { type, name, id, className, error, handleInputChange } = props;

  return (
    <label htmlFor={type}>
      <Input {...{ name, id, className, error, handleInputChange }} />
    </label>
  );
};
