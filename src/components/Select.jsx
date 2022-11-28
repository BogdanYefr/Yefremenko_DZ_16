import React from "react";

const MySelect = ({
  options,
  defaultValue,
  formValue,
  setFormValue,
  className,
  name,
  label,
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

  return (
    <label>
      {label}
      <br />
      <select
        className={className || ""}
        name={name || ""}
        value={formValue[name]}
        onChange={handleChange}
      >
        {defaultValue && <option value="">{defaultValue}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default MySelect;
