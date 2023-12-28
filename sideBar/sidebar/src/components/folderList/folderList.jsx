import styles from "./index.module.css";
import { FileList } from "../fileList";

function FolderList({ label, data, notifyClick}) {
  const files = [];
  for(const key in data) {
    if(typeof data[key] === "object"){
      files.push(<FolderList label={key} data={data[key]} notifyClick={notifyClick} />);
    }else if(typeof data[key] === "string"){
      files.push(<FileList label={key} data={data[key]} notifyClick={notifyClick} />)
    }
  }

  return (
    <div>
     <div className={styles.list} onClick={() => {notifyClick("")}}>{label}</div>
     <div className={styles.marginLeft}>{files}</div>
    </div>
  )
  
}

export { FolderList };
