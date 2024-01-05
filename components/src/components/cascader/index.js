import { useState } from "react";
import styles from "./index.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Cascader = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenChildren, setIsOpenChildren] = useState(false);
  const [menuDisplayed, setMenuDisplayed] = useState(data);
  const [childrenOptions, setChildrenOptions] = useState([]);

  const openOptions = () => {
    setIsOpen(!isOpen);
  };

  const showOptions = (options) => {
    console.log("click");
    return (
      <ul className={styles.carList}>
        {options.map((option) => (
          <li>
            {option.label}
            <span>
              <ArrowForwardIosIcon
                style={{ fontSize: "14px" }}
                onClick={() => activateChildrenOptions(option.children)}
              />
            </span>
          </li>
        ))}
        <li>
          {isOpenChildren ? showChildrenOptions(childrenOptions) : <div></div>}
        </li>
      </ul>
    );
  };

  const activateChildrenOptions = (children) => {
    setIsOpenChildren(true);
    setChildrenOptions(children);
  };

  const showChildrenOptions = (options) => {
    console.log("click");
    return (
      <ul className={styles.childrenList}>
        {options.map((option) => (
          <li>
            {option.label}
            <span>
              <ArrowForwardIosIcon
                style={{ fontSize: "14px" }}
                onClick={() => activateChildrenOptions(option.children)}
              />
            </span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.boxContainer}>
        <p>
          <i>Select a Car</i>
        </p>
        <ArrowForwardIosIcon onClick={() => openOptions()} />
        <div>{isOpen ? showOptions(menuDisplayed) : <div></div>}</div>
      </div>
    </div>
  );
};

export default Cascader;
