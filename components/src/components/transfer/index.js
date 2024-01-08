import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Transfer = ({ peliculasVistas }) => {
  
  const [sourceList, setSourceList] = useState(peliculasVistas);
  const [targetList, setTargetList] = useState([]);
  const [checkReport, setCheckReport] = useState([]);

  useEffect(() => {
    setCheckReport(new Array(sourceList.length));
  }, [sourceList]);

  const notifyClick = (index, item) => {
    const copy = [...checkReport];
    const current = copy[index] ?? false;
    copy[index] = !current;
    setCheckReport(copy);
  };

  const moveItem = (source, target, direction) => {
    /*
    console.log("source: " + source)
    let sourceCopy = [...source];
    const targetCopy = [...target];
    console.log("segundo: " + indexSelected)

    for(let i = 0; i < indexSelected.length;i++){
      console.log("indexSelected[i]: " +indexSelected[i])
      const [movedItem] = sourceCopy.splice(indexSelected[i], 1);
      targetList.push( itemsSelected[i]);
      if(indexSelected[i]<indexSelected[i+1]){
        indexSelected[i+1] = indexSelected[i+1] -1;
      }
    }

    console.log("source: " + source)
    console.log("sourceList: " + sourceList)
    
    source === sourceList
      ? setSourceList(sourceCopy)
      : setTargetList(targetCopy);
    */
    if (direction === "right") {
      const targetCopy = [...target];
      checkReport.forEach((item, i) => {
        if (item) targetCopy.push(source[i]);
      });

      const sourceCopy = [];
      source.forEach((item, i) => {
        if (!checkReport[i]) sourceCopy.push(source[i]);
      });

      setSourceList(sourceCopy);
      setTargetList(targetCopy);
    }
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
            <li key={index} onClick={() => notifyClick(index, item)}>
              {checkReport[index] ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
              {console.log("sourceList2: " + sourceList)}
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.moveButtons}>
        <button onClick={() => moveItem(sourceList, targetList, "right")}>
          &gt;&gt;
        </button>
        <button onClick={() => moveItem(sourceList, targetList, "left")}>
          &lt;&lt;
        </button>
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
