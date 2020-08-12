import React, {useState, useEffect} from "react";
import {ContainerCard} from "../containerCard/ContainerCard.js";
import styles from "./ContainerCardDeck.module.scss";

// const initialState = {
//   containers: [],
// };

export function ContainerCardDeck({containers}) {
  // const [state, setState] = useState(initialState);

  return (
    <div className={styles.ContainerCardDeck}>
      {containers.map((container) => (
        <ContainerCard container={container} key={container._id} />
      ))}
    </div>
  );
}
