import styles from "./index.module.css";

function ContentView({ content }) {
  return <div className={styles.container}>{content}</div>;
}

export { ContentView };
