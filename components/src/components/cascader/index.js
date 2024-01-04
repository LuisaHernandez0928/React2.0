import { useState } from "react";
import styles from "./index.modules.css";

const Cascader = ({ data }) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const handleItemClick = (value) => {
    const newSelectedValues = [...selectedValues, value];
    setSelectedValues(newSelectedValues);
  };

  const handleBackClick = () => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues.pop();
    setSelectedValues(newSelectedValues);
  };

  const renderMenu = (menuData) => {
    return (
      <ul>
        {menuData.map((item) => (
          <li key={item.value} onClick={() => handleItemClick(item.value)}>
            {item.label}
            {item.children && renderMenu(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      {selectedValues.length > 0 && (
        <button onClick={handleBackClick}>Atrás</button>
      )}
      {renderMenu(data)}
      <div>
        <strong>Selección actual:</strong>
        {selectedValues.map((value, index) => (
          <span key={value}>
            {index > 0 && " > "}
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Cascader;
