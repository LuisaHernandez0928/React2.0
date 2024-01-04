import { useState } from "react";
import styles from "./index.module.css";
import { FileList } from "../fileList";

function FolderList({ label, data, notifyClick, path}) {
  const [toggled, setToggled ] = useState(false);

  const files = [];
  for(const key in data) {
    if(typeof data[key] === "object"){
      files.push(<FolderList path={path + "/" + key} label={key} data={data[key]} notifyClick={notifyClick} />);
    }else if(typeof data[key] === "string"){
      files.push(<FileList path={path} label={key} data={data[key]} notifyClick={notifyClick} />)
    }
  }

  const handleFolderClick = (sinContenido, num) => {
    notifyClick(sinContenido, num);
    setToggled(!toggled);
  }

  return (
    <div>
     <div routepath={path} className={styles.list} onClick={() => handleFolderClick('', 1)}>{label}</div>
     <div className={styles.marginLeft} style={{ display: toggled ? "none": "block"}}>{files}</div>
    </div>
  )
  
}

export { FolderList };
