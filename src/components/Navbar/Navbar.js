"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`${styles["navbar"]}`}>
      <div className={styles["navbar-content"]}>
        <Link className={styles["navbar-logo"]} href="/">
          <Image
            src="/images/logoipsum-360.svg"
            alt="Site logo"
            width={200}
            height={200}
            
          />
        </Link>
        <div className={styles["navbar-link-container"]}>
          <Link href="/" className={styles["navbar-link"]}>
            Home
          </Link>
          <Link href="/resume" className={styles["navbar-link"]}>
            Resume
          </Link>
          <Link href="/contact" className={styles["navbar-link"]}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
