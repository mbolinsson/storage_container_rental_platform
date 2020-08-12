import React, {useState} from "react";
import styles from "./container.module.scss";
import Link from "next/link";

export default function index() {
  const [locationValue, setLocationValue] = useState("");

  console.log(locationValue);

  let ready = styles.noneButton;
  if (locationValue) {
    ready = styles.button;
  }

  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.selectwrapper}>
          <h1 className={styles.h1}>Hyr förråd</h1>
          <h3 className={styles.h3}>Välj en plats</h3>
          <select
            className={styles.select}
            name="location"
            onChange={(e) => {
              setLocationValue(e.target.value);
            }}
            value={locationValue}
          >
            <option value="Välj plats"></option>
            <option value="Västerås, Källarbacken.">Västerås - Källarbacken</option>
            <option value="Eskilstuna, Nystrandsgatan.">Eskilstuna - Nystrandsgatan</option>
          </select>
          <Link href="/container/[location]" as={`/container/${locationValue}`}>
            <button className={ready}>Se lediga förråd</button>
          </Link>
        </div>
        <div className={styles.containerImgWrapper}>
          <img className={styles.containerImg} src="/static/images/container.svg" alt="illustration container" />
        </div>
      </div>
    </main>
  );
}
