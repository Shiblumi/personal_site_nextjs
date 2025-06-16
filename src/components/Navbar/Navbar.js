"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useNavbarContext } from "./NavbarContext";

export default function Navbar() {
  const { activeSection } = useNavbarContext();

  return (
    <nav className={`${styles["navbar"]}`}>
      <div className={styles["navbar-content"]}>
        <Link href="#home" className={`${styles["navbar-logo-text"]} full-dropshadow`}>DIWI</Link>
        <div className={`${styles["navbar-link-container"]}`}>
          <Link
            href="#home"
            className={`${styles["navbar-link"]} ${
              activeSection === 1 ? styles["active"] : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="#exp"
            className={`${styles["navbar-link"]} ${
              activeSection === 2 ? styles["active"] : ""
            }`}
          >
            Exp
          </Link>
          <Link
            href="#skills"
            className={`${styles["navbar-link"]} ${
              activeSection === 3 ? styles["active"] : ""
            }`}
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className={`${styles["navbar-link"]} ${
              activeSection === 4 ? styles["active"] : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className={`${styles["navbar-link"]} ${
              activeSection === 5 ? styles["active"] : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

{
  /* <Link className={styles["navbar-logo"]} href="/">
          <Image
            src="/images/logoipsum-360.svg"
            alt="Site logo"
            width={0}
            height={0}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "200px",
              maxHeight: "200px",
            }}
          />
        </Link> */
}
