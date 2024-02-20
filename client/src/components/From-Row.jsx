import React from "react";

const FromRow = ({ name, labelText, defaultValue, type, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ""}
        className="form-input"
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FromRow;
