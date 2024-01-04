import styles from "./index.module.css";
import { ListItem } from "../listItem";
import { useState } from "react";

function List({
  label,
  items,
  marginLeft = "32px",
  notifyItemClick,
  folderRightClick,
}) {

  const [toggle , setToggle] = useState(false); // guarda los elementos renderizados
  const arrElements = [];
  // Itera por los items que recibe
  for (const key in items) {
    const mItem = items[key];
    if (typeof mItem == "object") {
      arrElements.push(
        <List
          notifyItemClick={notifyItemClick}
          items={mItem}
          label={key}
          folderRightClick={folderRightClick}
        />
      );
    } else if (typeof mItem == "string") {
      arrElements.push(
        <ListItem notifyClick={notifyItemClick} label={key} content={mItem} />
      );
    }
  }

  const folderRightClickHandle = (e) => {
    e.preventDefault();
    folderRightClick(e.clientX, e.clientY);
  };

  const expandCollapse = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  return (
    <div className={styles.list}>
      <div onContextMenu={(e) => folderRightClickHandle(e)} onClick={(e) => expandCollapse(e)}>{label}</div>
      <div style={{ marginLeft: marginLeft, display: toggle ? "none" : "block" }}>{arrElements}</div>
    </div>
  );
}

export { List };
