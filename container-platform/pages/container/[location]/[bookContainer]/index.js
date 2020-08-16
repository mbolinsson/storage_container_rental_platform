import React, {useEffect, useState} from "react";
import {ContainerForm} from "../../../../components/bookContainer/ContainerForm";
import {ShowContainer} from "../../../../components/bookContainer/ShowContainer";
import styles from "./bookContainer.module.scss";
import {getContainer} from "../../../../utils/api";
import {useRouter} from "next/router";

const initialState = {
  container: "",
};

export default function index() {
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
      <ShowContainer container={state.container} />
      <ContainerForm container={state.container} />
    </div>
  );
}
