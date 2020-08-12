import React, {useState} from "react";
import {Header} from "../components/layout/header";
import {Footer} from "../components/layout/footer";
import styles from "./app.module.scss";

export default function _app({Component, pageProps}) {
  const [HeaderViewHeight, setHeaderViewHeight] = useState(80);
  return (
    <div className={styles.body}>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
