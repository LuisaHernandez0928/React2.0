import {styles} from './index.module.css'

function Menu() {
  return (

    <div className={styles.menu}>
      <p>New folder...</p>
      <p>New file...</p>
      <p>Rename</p>
      <p>Delete</p>
    </div>
  )
  
};

export {Menu};