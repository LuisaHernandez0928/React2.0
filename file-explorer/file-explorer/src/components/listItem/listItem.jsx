import styles from "./index.module.css";

function ListItem({ label, content, notifyClick }) {
  const handleItemClick = () => {
    if (notifyClick) notifyClick(content);
  };

  return (
    <div onClick={() => handleItemClick()} className={styles.item}>
      {label}
    </div>
  );
}

export { ListItem };
