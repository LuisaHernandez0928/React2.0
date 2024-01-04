import { useState } from "react";
import "./App.css";
import { MainScreen } from "./components/mainScreen/";
import { Sidebar } from "./components/sidebar";
import { Data } from "./data/filesOrder";


function App() {
  const [valueFile, setValueFile] = useState("");
  const [menuView, setMenuView] = useState(0);
  const [folderData, setFolderData] = useState(Data);

  const label = Object.keys(folderData)[0];

  const handleClick = (folders, num) => {
    setValueFile(folders);
    setMenuView(num);
  };

  const notifyDataChange = (action, name, path) => {
    if (action === "createFile") {
      const copyData = JSON.parse(JSON.stringify(folderData));
      let relativeObject = copyData;
      const pathParts = path.split("/");
      for (const part of pathParts) {
        relativeObject = relativeObject[part];
      }
      relativeObject[name] = "Hello world!";
      setFolderData(copyData);
    }
  }

  return (
    <div className="mainContainer">
      <Sidebar
        label={label}
        folders={folderData}
        handleClick={handleClick}
        menuContainer={menuView}
        notifyDataChange={notifyDataChange}
      />
      <MainScreen content={valueFile} />
    </div>
  );
}

export default App;
