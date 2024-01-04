import { FolderList } from "../folderList";
import styles from "./index.module.css";
import { ContextMenu } from "../contextMenu";
import { useState, useRef, useEffect } from "react";

function Sidebar({ label, folders, handleClick, menuContainer, notifyDataChange }) {
  const [contextMenu, setContextMenu] = useState(null);
  const [createFileMenu, setCreateFileMenu] = useState(null);
  const [createFolderMenu, setCreateFolderMenu] = useState(null);
  const [currentFileName, setCurrentFileName] = useState('');
  const [actionPath, setActionPath] = useState('');
  const sidebarRef = useRef(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu({
      visible: true,
      x: event.clientX,
      y: event.clientY,
    });

    const domElem = event.target;
    const path = domElem.getAttribute("routepath");
    setActionPath(path);
  };

  const handleCloseContextMenu = () => {
    setContextMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleCloseContextMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectOption = (option) => {
    console.log("Selected option:", option);
    // Cierra el menú contextual después de seleccionar una opción
    handleCloseContextMenu();

    if (option === "New folder") {
      setCreateFolderMenu(true);
    } else if (option === "New file") {
      setCreateFileMenu(true);
    }
  };

  const changeFileNameHandler = (event) => {
    setCurrentFileName(event.target.value);
  };


  const createFileHandler = () => {
    setCreateFileMenu(null);
    notifyDataChange("createFile", currentFileName, actionPath);
    setCurrentFileName("");

  } 

  return (
    <div
      ref={sidebarRef}
      onContextMenu={handleContextMenu}
      className={styles.container}
      onClick={() => handleCloseContextMenu()}
    >
      {/* Renderiza tu lista de elementos en el sidebar aquí */}
      <ul>
        <li>
          <FolderList
            label={label}
            data={folders[label]}
            path={label}
            notifyClick={handleClick}
          />
        </li>
      </ul>

      {/* Renderiza el menú contextual si está visible */}
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onClose={handleCloseContextMenu}
          onSelect={handleSelectOption}
        />
      )}

      {createFileMenu && (
        <div
          style={{
            position: "absolute",
            border: "1px solid #eee",
            borderRadius: "8px",
            left: "30%",
            top: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            backgroundColor: "#222",
            padding: "16px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type="text"
            placeholder="Write file name..."
            value={currentFileName ?? ""}
            style={{
              border: "none",
              outline: "none",
              padding: "8px",
              borderRadius: "5px",
            }}
            onChange={(e) => changeFileNameHandler(e)}
          />
          <button
            onClick={() => createFileHandler()}
            style={{
              backgroundColor: "#03A9F4",
              marginTop: "16px",
              padding: "8px 16px",
              borderRadius: "5px",
              cursor: "pointer",
              color: "white",
              border: "none",
            }}
          >
            Create
          </button>
        </div>
      )}

      {createFolderMenu && <div>Modal folder</div>}
    </div>
  );
}

export { Sidebar };
