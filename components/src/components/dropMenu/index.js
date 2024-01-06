import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState, useEffect } from "react";
import styles from "./index.module.css";

const DropMenu = ({ data, isVisible }) => {
  const [childIsVisible, setChildIsVisible] = useState(false);
  const [children, setChildren] = useState(null);

  useEffect(() => {
    setChildren(null);
    console.log("destruir hijo")
  }, [data]);

  const notifyChildClick = (children) => {
    setChildIsVisible(true);
    console.log("crear hijo")
    setChildren(children);
  };

  return (
    <>
      {isVisible && (
        <>
          <div>
            <ul className={styles.childrenList}>
              {data.map((option) => (
                <li>
                  {option.label}
                  <span>
                    <ArrowForwardIosIcon
                      style={{ fontSize: "14px" }}
                      onClick={() => notifyChildClick(option.children)}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {children != null && (
            <DropMenu isVisible={childIsVisible} data={children} />
          )}
        </>
      )}
    </>
  );
};

export default DropMenu;
