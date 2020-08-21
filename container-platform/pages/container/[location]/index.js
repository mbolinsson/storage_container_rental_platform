import React, {useEffect, useState} from "react";
import styles from "./location.module.scss";
import {useRouter} from "next/router";
import {ContainerCardDeck} from "../../../components/containerCardDeck/ContainerCardDeck.js";
import {fetchContainers} from "../../../utils/api";
import Link from "next/link";

const initialState = {
  isLoding: false,
  data: [],
  error: null,
  slotText: styles.displayNone,
  noSlotText: styles.displayNone,
};

export default function locationValue() {
  const routerObject = useRouter();
  const [state, setState] = useState(initialState);
  const {location} = routerObject.query;

  useEffect(() => {
    async function fetch() {
      try {
        setState({...state, isLoading: true});
        if (location) {
          const response = await fetchContainers({location});
          if (response.data.length > 0) {
            setState({...state, isLoading: false, data: response.data, slotText: styles.display, noSlotText: styles.displayNone});
          } else {
            setState({...state, isLoading: false, data: response.data, slotText: styles.displayNone, noSlotText: styles.display});
          }
        }
      } catch (error) {
        setState({...state, isLoading: false, error});
      }
    }
    fetch();
  }, [location]);

  return (
    <main className={styles.main}>
      <div className={state.slotText}>
        <h1 className={styles.h1}>Tillgängliga förråd i {location}</h1>
        <hr className={styles.hr}></hr>
      </div>

      <div className={state.noSlotText}>
        <h1 className={styles.h1}>Vi kan tyvärr inte erbjuda något förråd i {location}</h1>
        <hr className={styles.hr}></hr>
        <Link href="/container">
          <button className={styles.button}>Tillbaka</button>
        </Link>
      </div>

      <div className={styles.wrapper}>
        <ContainerCardDeck containers={state.data} />
      </div>
    </main>
  );
}
