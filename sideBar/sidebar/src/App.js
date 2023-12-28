import { useState } from "react";
import "./App.css";
import { MainScreen } from "./components/mainScreen/";
import { Sidebar } from "./components/sidebar";
import { Data } from "./data/filesOrder";


function App() {
  const [valueFile, setValueFile] = useState("");
  
  const label = Object.keys(Data)[0];

  const handleClick = (folders) => {
    setValueFile(folders);
  }

  return (
    <div className="mainContainer">
      <Sidebar label={label} folders={Data} handleClick={handleClick} />
      <MainScreen content={valueFile}/>
    </div>
  );
}

export default App;
