import React, { useState } from 'react';
import InputText from './InputText';
import OtherTable from './OtherTable';

const ParentComponent = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (value) => {
    setInputText(value);
  };

  return (
    <div>
      <InputText value={inputText} onChange={handleInputChange} />
      <OtherTable text={inputText} />
    </div>
  );
};

export default ParentComponent;
