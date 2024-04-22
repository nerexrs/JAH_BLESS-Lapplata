import React from 'react';

const InputText = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-lg py-2 px-4 w-full"
    />
  );
};

export default InputText;
