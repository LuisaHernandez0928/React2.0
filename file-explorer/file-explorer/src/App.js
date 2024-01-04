import React, { useState } from "react";
import { SidebarLayout } from "./layouts/sidebar";
import { ContentView } from "./components/contentView";
import { FolderView } from "./components/foldersView/foldersView";

import "./App.css";

const items = {
  ejercicio: {
    "package.json": "Hola",
    "README.md": "mi",
    public: {
      "index.html": "hermosa",
    },
    src: {
      "index.js": "lu",
      "app.js": "te",
      components: {
        button: {
          "index.js": "adoro",
        },
      },
    },
  },
};

function App() {
  const [visibleContent, setVisibleContent] = useState("");
  const [activeContextMenu, setActiveContextMenu] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const itemClickEvent = (content) => {
    setVisibleContent(content);
  };

  const folderRightClickHandle = (startX, startY) => {
    setStartX(startX);
    setStartY(startY);
    setActiveContextMenu(1);
  };

  const filesViewComponent = (
    <FolderView
      itemClick={itemClickEvent}
      itemList={items}
      folderRightClick={folderRightClickHandle}
    />
  );
  const contentViewComponent = <ContentView content={visibleContent} />;

  return (
    <div
      onClick={() => setActiveContextMenu(0)}
      style={{ width: "100%", height: "100%" }}
    >
      <SidebarLayout
        sideBarWidth={"350px"}
        sidebarElement={filesViewComponent}
        contentElement={contentViewComponent}
        startX={startX}
        startY={startY}
        activeContextMenu={activeContextMenu}
      />
    </div>
  );
}

export default App;
