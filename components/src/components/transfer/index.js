import React, { useState } from 'react';
import styles from './index.module.css'

const Transfer = () => {
  const peliculasVistas = ["Toy Story 1", "El museo del oro", "Cacería en venecia", "Como entrenar a tu dragón", "Que paso ayer"];

  const [sourceList, setSourceList] = useState(peliculasVistas);
  const [targetList, setTargetList] = useState([]);

  const moveItem = (index, source, target) => {
    const sourceCopy = [...source];
    const targetCopy = [...target];

    const [movedItem] = sourceCopy.splice(index, 1);
    targetCopy.push(movedItem);

    source === sourceList ? setSourceList(sourceCopy) : setTargetList(targetCopy);
  };

  return (
    <div>
      <div>
        <h3>Source</h3>
        <ul>
          {sourceList.map((item, index) => (
            <li key={index} onClick={() => moveItem(index, sourceList, targetList)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={() => setSourceList([])}>&gt;&gt;</button>
        <button onClick={() => setTargetList([])}>&lt;&lt;</button>
      </div>
      <div>
        <h3>Target</h3>
        <ul>
          {targetList.map((item, index) => (
            <li key={index} onClick={() => moveItem(index, targetList, sourceList)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transfer;
