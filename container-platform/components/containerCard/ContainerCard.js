import React, {useState, useEffect} from "react";
import styles from "./ContainerCard.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";
import {ContainerForm} from "../bookContainer/ContainerForm";

export function ContainerCard({container}) {
  const routerObject = useRouter();
  const location = routerObject.query.location;

  function handleClick(e) {
    e.preventDefault();

    routerObject.push("/container/[location]/[containerForm]", `/container/${location}/${container._id}`);
  }

  return (
    <div className={styles.container}>
      <img className={styles.containerImg} src="/static/images/container.svg" alt="illustration container" />
      <div className={styles.type}>
        <h1>Container </h1>
      </div>

      <div className={styles.PriceWrapper}>
        <h2 className={styles.h2}>{container.m2}kvm</h2>
        <h2 className={styles.h2}>{container.price}kr/mån</h2>
      </div>

      <a onClick={handleClick}>
        <button className={styles.button}>Boka</button>
      </a>
    </div>
  );
}
