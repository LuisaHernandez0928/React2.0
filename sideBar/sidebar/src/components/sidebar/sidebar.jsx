import { FolderList } from "../folderList";
import styles from "./index.module.css";

function Sidebar({label, folders, handleClick}) {
  return (
  <div className={styles.container}>
    <FolderList label={label} data={folders[label]} notifyClick={handleClick} />
  </div>
  )

}

export { Sidebar };
