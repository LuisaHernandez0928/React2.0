import styles from "./index.module.css";

import { List } from "../list/";

function FolderView({ itemList, itemClick, folderRightClick }) {
  const key = Object.keys(itemList)[0];

  return (
    <div className={styles.container}>
      <List
        notifyItemClick={itemClick}
        items={itemList[key]}
        label={key}
        folderRightClick={folderRightClick}
      />
    </div>
  );
}

export { FolderView };
