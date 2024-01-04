import React, { useState } from "react";
import styles from "./index.module.css";

const ComboBox = ({ options }) => {
  const [isOpen, setIsOpen] =useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleSearch = (e) => {
    const newSearchLetter = e.target.value;
    setSearchTerm(newSearchLetter);
    console.log(newSearchLetter);

    const newFilteredOptions = options.filter((option) =>
    option.toLowerCase().includes(newSearchLetter.toLowerCase())
  );
    if(newFilteredOptions.length > 0) {
      setFilteredOptions(newFilteredOptions);
    } else{
      setFilteredOptions(["No existe"]);
    }
  
    setIsOpen(true);
  };
 
  const selectedOptions = (option) => {
    setIsOpen(false);
    setSearchTerm(option);
  }


  const clearFilteredOptions = () => {
    setSearchTerm("");
    setIsOpen(false);
    console.log("valor searched: " + searchTerm)
  }

  const dropDown = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    console.log("tocado");
    setFilteredOptions(options);

  }

  const closeDropDown = () => {
    setIsOpen(false);
  }
  return (
    <div className={styles.mainContainer} onClick={(closeDropDown)}>
      <div className={styles.comboboxContainer}>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={handleSearch}
          onClick={(e) => dropDown(e)}
        />
        <button onClick={(e) => clearFilteredOptions()}>Clear</button>
        <ul className={isOpen ? styles.optionsContainer : styles.closed}>
          {filteredOptions.map((option, index) => (
            <li key={index} value={option} onClick={(e) => selectedOptions(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComboBox;
