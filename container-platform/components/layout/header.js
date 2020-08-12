import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import {useRouter} from "next/router";

export function Header() {
  let headerClass = null;

  const router = useRouter();
  const path = router.pathname;

  if (path === "/") {
    headerClass = styles.headerBig;
  } else {
    headerClass = styles.headerSmal;
  }

  return (
    <header className={headerClass}>
      <Link href="/">
        <a className={styles.iconLink}>
          <img src="/static/images/SBFastigheterLogoWhite.svg" alt="SB Fastigheter logo" />
        </a>
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/container">
              <a className={styles.navLink}>Förråd</a>
            </Link>
          </li>
          <li>
            <Link href="/lagenheter">
              <a className={styles.navLink}>Lägenhet</a>
            </Link>
          </li>
          <li>
            <Link href="/lokaler">
              <a className={styles.navLink}>Lokal</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
