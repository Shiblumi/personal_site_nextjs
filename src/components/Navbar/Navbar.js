"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "/public/vercel.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-div"]}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={40} height={40} />
        </Link>
        <div>
          <Link href="/">Home</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
