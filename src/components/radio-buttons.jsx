import React from "react";

const MyRadioButtons = ({ filter, setFilter }) => {
  const options = ["open", "inProgress", "done"];
  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name="answer"
            value={option}
            style={{ marginBottom: "15px" }}
            onChange={(e) => setFilter(e.target.value)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default MyRadioButtons;
