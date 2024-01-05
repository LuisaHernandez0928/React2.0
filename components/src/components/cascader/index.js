import { useState } from "react";
import styles from "./index.module.css";

const Cascader = ({ data }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const showOptions = () => {
    setIsOpen(true);
    console.log("si entró");
  };
  const handleItemClick = (value) => {
    const newSelectedValues = [...selectedValues, value];
    setSelectedValues(newSelectedValues);
  };


  const renderMenu = (menuData) => {
    console.log("render1")
    return menuData.map((car) => (
      <option onClick={() => renderMenu(car.children)}>{car.label}</option>
    ));
  };

  return (
    <div className={styles.mainContainer}>
      <select className={styles.dropDownMenu} onClick={() => showOptions()}>
        <option value="" disabled selected>
          Select Brand
        </option>
        {renderMenu(data)}
      </select>
    </div>
  );
};

export default Cascader;
