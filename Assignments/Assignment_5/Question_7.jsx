import React from 'react';

const ColorPicker = ({ onColorChange }) => {
  const handleColorChange = (event) => {
    onColorChange(event.target.value);
  };

  return (
    <div>
      <input type="color" onChange={handleColorChange} />
    </div>
  );
};

export default ColorPicker;

