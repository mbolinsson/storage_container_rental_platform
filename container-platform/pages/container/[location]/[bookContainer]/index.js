import React from "react";
import {ContainerForm} from "../../../../components/bookContainer/ContainerForm";
import {ShowContainer} from "../../../../components/bookContainer/ShowContainer";
import styles from "./bookContainer.module.scss";

export default function index() {
  return (
    <div className={styles.wrapper}>
      <ShowContainer />
      <ContainerForm />
    </div>
  );
}
