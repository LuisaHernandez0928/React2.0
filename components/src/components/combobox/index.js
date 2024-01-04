import React, { useState } from 'react';

const ComboBox = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options =  ["Toy Story 1", "El museo del oro", "Cacería en venecia", "Como entrenar a tu dragón"]

  const dropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        <button  onClick={dropDown}>
          {selectedOption || 'Select an option'}
        </button>
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionSelected(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComboBox;
