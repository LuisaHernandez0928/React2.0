import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";
import styles from "./index.module.css";


const DropMenu = (children) => {

  
    console.log("click");
    return (
      <ul className={styles.childrenList}>
        {children.map((option) => (
          <li>
            {option.label}
            <span>
              <ArrowForwardIosIcon
                style={{ fontSize: "14px" }}
                onClick={() => (option.children)}
              />
            </span>
          </li>
        ))}
      </ul>
    );
  };

export default DropMenu;