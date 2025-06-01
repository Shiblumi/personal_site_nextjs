"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/vercel.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbarDiv"]}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </Link>
        <div>
          <Link href="/" className={styles["navbarLinks"]}>Home</Link>
          <Link href="/resume" className={styles["navbarLinks"]}>Resume</Link>
          <Link href="/contact" className={styles["navbarLinks"]}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
