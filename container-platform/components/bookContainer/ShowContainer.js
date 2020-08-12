import React, {useEffect, useState} from "react";
import styles from "./ShowContainer.module.scss";
import {getContainer} from "../../utils/api";
import {useRouter} from "next/router";

const initialState = {
  container: "",
};

export function ShowContainer() {
  const [state, setState] = useState(initialState);
  const router = useRouter();
  const id = router.query.bookContainer;

  useEffect(() => {
    async function fetch() {
      try {
        if (id) {
          const response = await getContainer(id);
          if (response.data) {
            setState({...state, container: response.data});
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSpecs}>
        <h1 className={styles.h1}>Boka {state.container.type}</h1>
        <p className={styles.p}>
          Kul att du vill hyra {state.container.type} av oss! Din {state.container.type} finns på {state.container.location} Priset är {state.container.price}:- och faktureras månadsvis.
          Storleken är {state.container.m2}kvm. För att du lätt ska hitta din {state.container.type} har vi märkt den med numret: {state.container.containerNumber}.
        </p>
        <h2 className={styles.p}>Fyll i och skicka in uppgifterna nedan så återkommer vi med bekräftelse inom 24 timmar</h2>
      </div>
    </div>
  );
}
