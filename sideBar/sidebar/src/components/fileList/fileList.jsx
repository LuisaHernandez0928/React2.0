import styles from "./index.module.css";

function FileList({label, data, notifyClick, path}) {
 
  return <div routepath={path} className={styles.file} onClick={() => {notifyClick(data,0)}}>{label}</div>;
}

export { FileList };
