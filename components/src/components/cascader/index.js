import { useState } from "react";
import styles from "./index.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DropMenu from "../dropMenu";

const Cascader = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuDisplayed, setMenuDisplayed] = useState(data);

  const openOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.boxContainer}>
        <p>
          <i>Select a Car</i>
        </p>
        <ArrowForwardIosIcon onClick={() => openOptions()} />
        <div>{isOpen ? <DropMenu children={menuDisplayed} /> : <></>}</div>
      </div>
    </div>
  );
};

export default Cascader;
