import React from "react";

const CakesNameField = ({ name, handleChange }) => {
  return (
    <div>
      <input
        className="input"
        placholder="Cakes Name"
        value={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default CakesNameField;
