import { useState } from "react";

const CustomCascader = ({ options }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelect = (value, level) => {
    // Update the selected values based on the level
    const newValues = selectedValues.slice(0, level - 1).concat(value);
    setSelectedValues(newValues);
  };

  const renderOptions = (options, level) => {
    return (
      <ul>
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleSelect(option.value, level)}
          >
            {option.label}
            {option.children && renderOptions(option.children, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h2>Custom Cascader</h2>
      {renderOptions(options, 1)}
      <p>Selected Values: {selectedValues.join(" > ")}</p>
    </div>
  );
};

export default CustomCascader;
