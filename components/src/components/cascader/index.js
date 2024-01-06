import { useState } from "react";
import styles from "./index.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DropMenu from "../dropMenu";

const Cascader = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuDisplayed, setMenuDisplayed] = useState(data);

  const openOptions = () => {
    setIsOpen(true);
    console.log(menuDisplayed);
  };

  const notifyClick = (insideData) => {
    setMenuDisplayed(insideData);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "60px" }}>
      <div className={styles.mainContainer}>
        <div style={{ width: "300px" }}>
          <div className={styles.boxContainer}>
            <p>
              <i>Select a Car</i>
            </p>
            <ArrowForwardIosIcon onClick={() => openOptions()} />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", width: "fit-content" }}>
            <DropMenu data={menuDisplayed} isVisible={isOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cascader;
