import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
    onTextChange(event.target.value);
  };

  return (
    <input type="text" value={text} onChange={handleInputChange} />
  );
};

export default TextInput;


