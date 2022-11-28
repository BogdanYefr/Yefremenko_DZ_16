import React from "react";

const MyInput = ({
  formValue,
  setFormValue,
  handleSubmit,
  label,
  name,
  placeholder,
}) => {
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <label>
      {label}
      <br />
      <input
        className="input-form"
        value={formValue[name]}
        type="text"
        name={name}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder={placeholder}
      />
    </label>
  );
};
export default MyInput;
