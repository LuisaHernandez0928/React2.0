import styles from "./index.module.css";

function FileList({label, data, notifyClick}) {
 
  return <div className={styles.file} onClick={() => {notifyClick(data)}}>{label}</div>;
}

export { FileList };
