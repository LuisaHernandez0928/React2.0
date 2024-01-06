import React, { useState } from "react";
import styles from "./index.module.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const Transfer = ({ peliculasVistas }) => {
  const [sourceList, setSourceList] = useState(peliculasVistas);
  const [targetList, setTargetList] = useState([]);
  const [clickedSource, setclickedSource] = useState(false);
  const [indexSelected, setIndexSelected] = useState([]);

  const notifyClick = (index) =>{
    setclickedSource(!clickedSource);
    indexSelected.push(index)
  }

  const moveItem = (index, source, target) => {
    const sourceCopy = [...source];
    const targetCopy = [...target];

    for(let i = 0; i < indexSelected.length;i++){
      const [movedItem] = sourceCopy.splice(indexSelected[i], 1);
      targetList.push(movedItem);
    } 

    setIndexSelected([])

    source === sourceList
      ? setSourceList(sourceCopy)
      : setTargetList(targetCopy);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.boxOptions}>
        <div
          style={{
            borderBottom: "1px solid black",
            width: "100%",
            padding: "4px",
          }}
        >
          Source
        </div>
        <ul>
          {sourceList.map((item, index) => (
            <li
              key={index}
              onClick={() => notifyClick(index)}
            >
              {indexSelected.includes(index) ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/> }
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.moveButtons}>
        <button onClick={() =>  moveItem(indexSelected, sourceList, targetList)}>&gt;&gt;</button>
        <button onClick={() =>  moveItem(indexSelected, sourceList, targetList)}>&lt;&lt;</button>
      </div>
      <div className={styles.boxOptions}>
        <div
          style={{
            borderBottom: "1px solid black",
            width: "100%",
            padding: "4px",
          }}
        >
          Target
        </div>
        <ul>
          {targetList.map((item, index) => (
            <li
              key={index}
              onClick={() => moveItem(index, targetList, sourceList)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transfer;
