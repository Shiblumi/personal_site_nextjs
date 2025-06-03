"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("WEBFLOW_SITE_ID:", process.env.NEXT_PUBLIC_WEBFLOW_SITE_ID);
    console.log(
      "WEBFLOW_SITE_API_TOKEN:",
      process.env.NEXT_PUBLIC_WEBFLOW_SITE_API_TOKEN
    );
  }, []);

  return (
    <main className={styles["main"]}>
      <div className={styles["scroll-wrapper"]}>
        <section className={styles["scroll-section"]}>
          <h1>Section 1</h1>
        </section>
        <section className={styles["scroll-section"]}>
          <h1>Section 2</h1>
        </section>
        <section className={styles["scroll-section"]}>
          <h1>Section 3</h1>
        </section>
        <section className={styles["scroll-section"]}>
          <h1>Section 4</h1>
        </section>
        <section className={styles["scroll-section"]}>
          <h1>Section 5</h1>
        </section>
        <footer className={`${styles["footer"]} ${styles["scroll-section"]}`}>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Learn
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Examples
          </a>
          <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </div>
    </main>
  );
}
