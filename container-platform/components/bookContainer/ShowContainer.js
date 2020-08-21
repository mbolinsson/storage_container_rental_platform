import React, {useEffect, useState} from "react";
import styles from "./ShowContainer.module.scss";
import {getContainer} from "../../utils/api";
import {useRouter} from "next/router";

const initialState = {
  container: "",
};

export function ShowContainer({container}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSpecs}>
        <h1 className={styles.h1}>Boka {container.type}</h1>
        <p className={styles.p}>
          Kul att du vill hyra {container.type} av oss! Din {container.type} finns på {container.location} Priset är {container.price}:- och faktureras månadsvis. Storleken är {container.m2}
          kvm. För att du lätt ska hitta din {container.type} har vi märkt den med numret: {container.containerNumber}.
        </p>
        <h2 className={styles.p}>Fyll i och skicka in uppgifterna nedan så återkommer vi med bekräftelse inom 24 timmar</h2>
      </div>
    </div>
  );
}
