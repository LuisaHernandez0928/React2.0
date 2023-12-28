import styles from "./index.module.css";

function MainScreen({ content }) {
    return ( 
    <div className={styles.container}>
      {content}
    </div>
    )
  
  };

  
export { MainScreen };
