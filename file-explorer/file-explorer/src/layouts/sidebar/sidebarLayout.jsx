import styles from "./index.module.css";
import { useEffect, useRef } from "react";

function SidebarLayout({
  sideBarWidth = "200px",
  sidebarElement,
  contentElement,
  startX = 0,
  startY = 0,
  activeContextMenu = 0,
}) {
  const folderContextMenuRef = useRef();

  useEffect(() => {
    folderContextMenuRef.current.style.top = startY + "px";
    folderContextMenuRef.current.style.left = startX + "px";
  }, [startX, startY]);

  return (
    <div className={styles.container}>
      <div
        ref={folderContextMenuRef}
        className={
          styles.folderContextMenu +
          " " +
          (activeContextMenu === 1 ? styles.activeContextMenu : "")
        }
      >
        <div>New folder...</div>
        <div>New file...</div>
      </div>
      <div className={styles.sidebar} style={{ width: sideBarWidth }}>
        {sidebarElement}
      </div>
      <div className={styles.screen}>{contentElement}</div>
    </div>
  );
}

export { SidebarLayout };
