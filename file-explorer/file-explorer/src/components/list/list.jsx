import styles from "./index.module.css";
import { ListItem } from "../listItem";

function List({
  label,
  items,
  marginLeft = "32px",
  notifyItemClick,
  folderRightClick,
}) {
  // guarda los elementos renderizados
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

  return (
    <div className={styles.list}>
      <div onContextMenu={(e) => folderRightClickHandle(e)}>{label}</div>
      <div style={{ marginLeft: marginLeft }}>{arrElements}</div>
    </div>
  );
}

export { List };
